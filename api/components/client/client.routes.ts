import * as e from 'express';
import {IApiConfig} from '../../api.config';
import {ClientRepository} from './client.repository';
import {ClientService} from './client.service';
import {IClient, ClientValidator} from '../../../public/shared/models/client';
import {IResponse, IPagedResponse} from '../../../public/shared/lib/request-response';
import {Lazy} from '../../lib/lazy';
import 'rxjs/rx';

export function register(app: e.Application, config: IApiConfig) {
	const baseUrl = '/api/clients';
	const service: Lazy<ClientService> = new Lazy(() => new ClientService(new ClientRepository(config, new ClientValidator())));
	app
		.get(`${baseUrl}/:id`, (req: e.Request, res: e.Response) => {
			service.instance.getById({ data: req.params.id }).subscribe((response: IResponse<IClient>) => res.json(response));
		})
		.post(baseUrl, (req: e.Request, res: e.Response) => {
			service.instance.get(req.body).subscribe((response: IPagedResponse<IClient>) => res.json(response));
		})
		.post(`${baseUrl}`, (req: e.Request, res: e.Response) => {
			service.instance.add(req.body).subscribe((response: IResponse<IClient>) => res.json(response));
		})
		.put(`${baseUrl}`, (req: e.Request, res: e.Response) => {
			service.instance.update(req.body).subscribe((response: IResponse<IClient>) => res.json(response));
		});
};
