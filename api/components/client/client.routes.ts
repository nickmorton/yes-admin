import * as e from 'express';
import {IApiConfig} from '../../api.config';
import {ClientRepository} from './client.repository';
import {ClientService} from './client.service';
import {IClient, ClientValidator} from '../../../public/shared/models/client';
import {Lazy} from '../../lib/lazy';
import 'rxjs/rx';

export function register(app: e.Application, config: IApiConfig) {
	const baseUrl = '/api/clients';
	const service: Lazy<ClientService> = new Lazy(() => new ClientService(new ClientRepository(config, new ClientValidator())));
	app
		.get(`${baseUrl}/:id`, (req: e.Request, res: e.Response) => {
			service.instance.getById(req.params.id).subscribe((client: IClient) => res.json(client));
		})
		.get(baseUrl, (req: e.Request, res: e.Response) => {
			service.instance.getAll().subscribe((clients: Array<IClient>) => res.json(clients));
		})
		.post(`${baseUrl}`, (req: e.Request, res: e.Response) => {
			service.instance.add(req.body).subscribe((client: IClient) => res.json(client));
		})
		.put(`${baseUrl}`, (req: e.Request, res: e.Response) => {
			service.instance.update(req.body).subscribe((client: IClient) => res.json(client));
		});
};
