import { Application } from 'express';
import { IApiConfig } from './api.config';
import * as users from './components/user/user.routes';

export function register(app: Application, config: IApiConfig) {
	app
		.get('/*', function (req, res, next) {
			res.contentType('application/json');
			next();
		})
		.post('/*', function (req, res, next) {
			res.contentType('application/json');
			next();
		})
		.put('/*', function (req, res, next) {
			res.contentType('application/json');
			next();
		})
		.delete('/*', function (req, res, next) {
			res.contentType('application/json');
			next();
		});

	users.register(app, config);
};
