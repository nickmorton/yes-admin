import * as e from 'express';
import {IApiConfig} from '../../api.config';
import {UserRepository} from './user.repository';
import {UserService} from './user.service';
import {IUser, UserValidator} from '../../../public/shared/models/user';
import {IResponse, IPagedResponse} from '../../../public/shared/lib/request-response';
import {Lazy} from '../../lib/lazy';
import 'rxjs/rx';

export function register(app: e.Application, config: IApiConfig) {
	const baseUrl = '/api/users';
	const service: Lazy<UserService> = new Lazy(() => new UserService(new UserRepository(config, new UserValidator())));
	app
		.get(`${baseUrl}/:id`, (req: e.Request, res: e.Response) => {
			service.instance.getById({ data: req.params.id }).subscribe((response: IResponse<IUser>) => res.json(response));
		})
		.post(baseUrl, (req: e.Request, res: e.Response) => {
			service.instance.get(req.body).subscribe((response: IPagedResponse<IUser>) => res.json(response));
		})
		.post(`${baseUrl}`, (req: e.Request, res: e.Response) => {
			service.instance.add(req.body).subscribe((response: IResponse<IUser>) => res.json(response));
		})
		.put(`${baseUrl}`, (req: e.Request, res: e.Response) => {
			service.instance.update(req.body).subscribe((response: IResponse<IUser>) => res.json(response));
		});
};
