import { IUser } from '../../../public/shared/models';
import { IUserBusinessRules } from './user.business-rules';
import { IUserRepository } from './user.repository';
import { IRequest, IResponse, IPagedRequest, IPagedResponse } from '../../../public/shared/lib';
import { Observable } from 'rxjs/observable';

export class UserService {
	constructor(private repository: IUserRepository, private businessRules: IUserBusinessRules) {
	}

	public getById = (request: IRequest<string>): Observable<IResponse<IUser>> => {
		return this.repository.getById(request.data)
			.map((user: IUser): IResponse<IUser> => <IResponse<IUser>>{ entity: user });
	}

	public get = (request: IPagedRequest<void>): Observable<IPagedResponse<IUser>> => {
		return this.repository.get({ skip: +request.skip, limit: +request.limit })
			.map((users: Array<IUser>): IPagedResponse<IUser> => <IPagedResponse<IUser>>{
				entities: users,
			});
	}

	public add = (request: IRequest<IUser>): Observable<IResponse<IUser>> => {
		this.businessRules.updateLastVisited(request.data);
		return this.repository.add(request.data)
			.map((user: IUser): IResponse<IUser> => <IResponse<IUser>>{ entity: user });
	}

	public update = (request: IRequest<IUser>): Observable<IResponse<IUser>> => {
		this.businessRules.updateLastVisited(request.data);
		return this.repository.update(request.data)
			.map((user: IUser): IResponse<IUser> => <IResponse<IUser>>{ entity: user });
	}
}
