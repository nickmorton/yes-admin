import {IApiConfig} from '../../api.config';
import {RepositoryBase, IRepository, IGetAllCriteria} from '../../lib/repository';
import {IUser, UserValidator} from '../../../public/shared/models/user';
import {ObjectID, Collection, MongoError} from 'mongodb';
import {Observable, Subject} from 'rxjs/Rx';

export interface IUserRepository extends IRepository<IUser> {
};

export class UserRepository extends RepositoryBase<IUser> implements IUserRepository {
	constructor(config: IApiConfig, validator: UserValidator) {
		super(config, 'users', validator);
	};

	// // db.users.insert({ forename: 'Nick', surname: 'Morton', dob: new Date(1959, 9, 20) })
	// // db.users.insert({ forename: 'Liz', surname: 'Morton', dob: new Date(1969, 5, 24) })
	// // db.users.insert({ forename: 'Nathan', surname: 'Morton', dob: new Date(2005, 6, 15) })

	public getById(id: string): Observable<IUser> {
		return this.dbExecute<IUser>((collection: Collection, subject: Subject<IUser>) => {
			collection.find({ _id: new ObjectID(id) }).limit(1).next((err: MongoError, user: IUser): void => {
				if (err) {
					throw new Error(err.message);
				}

				subject.next(user);
				subject.complete();
			});
		});
	};

	public get(criteria: IGetAllCriteria): Observable<Array<IUser>> {
		return this.dbExecute<Array<IUser>>((collection: Collection, subject: Subject<Array<IUser>>) => {
			collection
				.find({}, null, criteria.skip, criteria.limit)
				.toArray((err: MongoError, users: Array<IUser>): void => {
					if (err) {
						throw new Error(err.message);
					}

					subject.next(users);
					subject.complete();
				});
		});
	};
}