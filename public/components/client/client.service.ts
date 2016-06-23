import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/rx';

import {IClient} from '../../shared/models/client';

@Injectable()
export class ClientService {
	constructor(private http: Http) {
	};

	public getAll = (): Observable<Array<IClient>> => {
		return 	this.http.get('/api/clients')
			.map((response: Response) => <Array<IClient>>response.json());
	};

	public getById = (id: string): Observable<IClient> => {
		return 	this.http.get(`/api/clients/${id}`)
			.map((response: Response) => <IClient>response.json());
	};

	public insert = (client: IClient): Observable<IClient> => {
		return this.http.post('api/clients', JSON.stringify(client))
			.map((response: Response) => <IClient>response.json());
	};

	public update = (client: IClient): Observable<IClient> => {
		return this.http.put('api/clients', JSON.stringify(client))
			.map((response: Response) => <IClient>response.json());
	};

	public create = (): IClient => {
		return  <IClient>{};
	};
}
