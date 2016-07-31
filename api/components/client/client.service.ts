import {IClient} from '../../../public/shared/models/client';
import {IClientRepository} from './client.repository';
import {IRequest, IResponse, IPagedRequest, IPagedResponse} from '../../../public/shared/lib/request-response';
import {Observable} from 'rxjs/observable';

export class ClientService {
	constructor(private repository: IClientRepository) {
	};

	public getById = (request: IRequest<string>): Observable<IResponse<IClient>> => {
		return this.repository.getById(request.data)
			.map((client: IClient): IResponse<IClient> => <IResponse<IClient>>{ entity: client });
	};

	public get = (request: IPagedRequest<void>): Observable<IPagedResponse<IClient>> => {
		return this.repository.get({ skip: request.skip, limit: request.limit })
			.map((clients: Array<IClient>): IPagedResponse<IClient> => <IPagedResponse<IClient>>{
				entities: clients,
				skip: request.skip,
				limit: request.limit,
			});
	};

	public add = (request: IRequest<IClient>): Observable<IResponse<IClient>> => {
		return this.repository.add(request.data)
			.map((client: IClient): IResponse<IClient> => <IResponse<IClient>>{ entity: client });
	};

	public update = (request: IRequest<IClient>): Observable<IResponse<IClient>> => {
		return this.repository.update(request.data)
			.map((client: IClient): IResponse<IClient> => <IResponse<IClient>>{ entity: client });
	};
}
