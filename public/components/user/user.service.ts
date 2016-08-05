import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/rx';

import {IUser} from '../../shared/models/user';
import {IRequest, IResponse, IPagedRequest, IPagedResponse} from '../../shared/lib/request-response';

@Injectable()
export class UserService {
	constructor(private http: Http) {
	};

	public get = (request: IPagedRequest<IUser>): Observable<IPagedResponse<IUser>> => {
		return this.http.post('/api/users', JSON.stringify(request))
			.map((httpResponse: Response) => <IPagedResponse<IUser>>httpResponse.json());
	};

	public getById = (id: string): Observable<IResponse<IUser>> => {
		return this.http.get(`/api/users/${id}`)
			.map((res: Response) => <IResponse<IUser>>res.json());
	};

	public add = (request: IRequest<IUser>): Observable<IResponse<IUser>> => {
		return this.http.post('api/users', JSON.stringify(request))
			.map((res: Response) => <IResponse<IUser>>res.json());
	};

	public update = (request: IRequest<IUser>): Observable<IResponse<IUser>> => {
		return this.http.put('api/users', JSON.stringify(request))
			.map((res: Response) => <IResponse<IUser>>res.json());
	};

	public create = (): IUser => {
		return <IUser>{};
	};
}
