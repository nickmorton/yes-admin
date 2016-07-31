import {IApiConfig} from '../../api.config';
import {RepositoryBase, IRepository, IGetAllCriteria} from '../../lib/repository';
import {IClient, ClientValidator} from '../../../public/shared/models/client';
import {ObjectID, Collection, MongoError} from 'mongodb';
import {Observable, Subject} from 'rxjs/rx';

export interface IClientRepository extends IRepository<IClient> {
};

export class ClientRepository extends RepositoryBase<IClient> implements IClientRepository {
	constructor(config: IApiConfig, validator: ClientValidator) {
		super(config, 'clients', validator);
	};

	// // db.clients.insert({ forename: 'Nick', surname: 'Morton', dob: new Date(1959, 9, 20) })
	// // db.clients.insert({ forename: 'Liz', surname: 'Morton', dob: new Date(1969, 5, 24) })
	// // db.clients.insert({ forename: 'Nathan', surname: 'Morton', dob: new Date(2005, 6, 15) })

	public getById(id: string): Observable<IClient> {
		return this.dbExecute<IClient>((collection: Collection, subject: Subject<IClient>) => {
			collection.find({ _id: new ObjectID(id) }).limit(1).next((err: MongoError, client: IClient): void => {
				if (err) {
					throw new Error(err.message);
				}

				subject.next(client);
				subject.complete();
			});
		});
	};

	public get(criteria: IGetAllCriteria): Observable<Array<IClient>> {
		return this.dbExecute<Array<IClient>>((collection: Collection, subject: Subject<Array<IClient>>) => {
			collection
				.find({}, null, criteria.skip, criteria.limit)
				.toArray((err: MongoError, clients: Array<IClient>): void => {
					if (err) {
						throw new Error(err.message);
					}

					subject.next(clients);
					subject.complete();
				});
		});
	};
}
