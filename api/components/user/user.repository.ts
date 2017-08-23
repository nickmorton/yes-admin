import { IApiConfig } from '../../api.config';
import { RepositoryBase, IRepository, IGetAllCriteria } from '../../lib';
import { IUser, UserValidator } from '../../../public/shared/models';
import { ObjectID, Collection, MongoError } from 'mongodb';

export interface IUserRepository extends IRepository<IUser> {
}

export class UserRepository extends RepositoryBase<IUser> implements IUserRepository {
	constructor(config: IApiConfig, validator: UserValidator) {
		super(config, 'users', validator);
	}

	// // db.users.insert({ forename: 'Nick', surname: 'Morton', dob: new Date(1959, 9, 20) })
	// // db.users.insert({ forename: 'Liz', surname: 'Morton', dob: new Date(1969, 5, 24) })
	// // db.users.insert({ forename: 'Nathan', surname: 'Morton', dob: new Date(2005, 6, 15) })

	public async get(criteria: IGetAllCriteria): Promise<Array<IUser>> {
		const db = await this.db;
		return this.collection(db).find<IUser>({})
			.skip(criteria.skip)
			.limit(criteria.limit)
			.toArray()
			.then(result => {
				db.close();
				return result;
			});
	}
}
