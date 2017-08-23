import { IUser } from '../../../public/shared/models';
import { IUserBusinessRules } from './user.business-rules';
import { IUserRepository } from './user.repository';
import { IRequest, IResponse, IPagedRequest, IPagedResponse } from '../../../public/shared/lib';

export class UserService {
	constructor(private repository: IUserRepository, private businessRules: IUserBusinessRules) {
	}

	public getById = (request: IRequest<string>): Promise<IResponse<IUser>> => {
		return this.repository.getById(request.data)
			.then((user: IUser): IResponse<IUser> => <IResponse<IUser>>{ entity: user });
	}

	public get = (request: IPagedRequest<void>): Promise<IPagedResponse<IUser>> => {
		return this.repository.get({ skip: +request.skip, limit: +request.limit })
			.then((users: Array<IUser>): IPagedResponse<IUser> => <IPagedResponse<IUser>>{
				entities: users,
			});
	}

	public add = (request: IRequest<IUser>): Promise<IResponse<IUser>> => {
		this.businessRules.updateLastVisited(request.data);
		return this.repository.add(request.data)
			.then((user: IUser): IResponse<IUser> => <IResponse<IUser>>{ entity: user });
	}

	public update = (request: IRequest<IUser>): Promise<IResponse<IUser>> => {
		this.businessRules.updateLastVisited(request.data);
		return this.repository.update(request.data)
			.then((user: IUser): IResponse<IUser> => <IResponse<IUser>>{ entity: user });
	}
}
