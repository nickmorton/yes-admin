import {IClient} from '../../../public/shared/models/client';
import {IClientRepository} from './client.repository';
import {Observable} from 'rxjs/observable';

export class ClientService {
	constructor(private repository: IClientRepository) {
	};

	public getById = (id: string): Observable<IClient> => {
		return this.repository.getById(id);
	};

	public getAll = (): Observable<Array<IClient>> => {
		return this.repository.getAll();
	};

	public add = (client: IClient): Observable<IClient> => {
		return this.repository.add(client);
	};

	public update = (client: IClient): Observable<IClient> => {
		return this.repository.update(client);
	};
}
