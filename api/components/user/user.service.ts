import {IUser} from '../../../public/shared/models/user';
import {IUserRepository} from './user.repository';
import {IRequest, IResponse, IPagedRequest, IPagedResponse} from '../../../public/shared/lib/request-response';
import {Observable} from 'rxjs/observable';

export class UserService {
	constructor(private repository: IUserRepository) {
	};

	public getById = (request: IRequest<string>): Observable<IResponse<IUser>> => {
		return this.repository.getById(request.data)
			.map((user: IUser): IResponse<IUser> => <IResponse<IUser>>{ entity: user });
	};

	public get = (request: IPagedRequest<void>): Observable<IPagedResponse<IUser>> => {
		return this.repository.get({ skip: request.skip, limit: request.limit })
			.map((users: Array<IUser>): IPagedResponse<IUser> => <IPagedResponse<IUser>>{
				entities: users,
				skip: request.skip,
				limit: request.limit,
			});
	};

	public add = (request: IRequest<IUser>): Observable<IResponse<IUser>> => {
		return this.repository.add(request.data)
			.map((user: IUser): IResponse<IUser> => <IResponse<IUser>>{ entity: user });
	};

	public update = (request: IRequest<IUser>): Observable<IResponse<IUser>> => {
		return this.repository.update(request.data)
			.map((user: IUser): IResponse<IUser> => <IResponse<IUser>>{ entity: user });
	};
}
