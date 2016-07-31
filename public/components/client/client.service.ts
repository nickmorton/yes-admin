import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/rx';

import {IClient} from '../../shared/models/client';
import {IRequest, IResponse, IPagedRequest, IPagedResponse} from '../../shared/lib/request-response';

@Injectable()
export class ClientService {
	constructor(private http: Http) {
	};

	public get = (request: IPagedRequest<IClient>): Observable<IPagedResponse<IClient>> => {
		return this.http.post('/api/clients', JSON.stringify(request))
			.map((httpResponse: Response) => <IPagedResponse<IClient>>httpResponse.json());
	};

	public getById = (id: string): Observable<IResponse<IClient>> => {
		return this.http.get(`/api/clients/${id}`)
			.map((res: Response) => <IResponse<IClient>>res.json());
	};

	public add = (request: IRequest<IClient>): Observable<IResponse<IClient>> => {
		return this.http.post('api/clients', JSON.stringify(request))
			.map((res: Response) => <IResponse<IClient>>res.json());
	};

	public update = (request: IRequest<IClient>): Observable<IResponse<IClient>> => {
		return this.http.put('api/clients', JSON.stringify(request))
			.map((res: Response) => <IResponse<IClient>>res.json());
	};

	public create = (): IClient => {
		return <IClient>{};
	};
}
