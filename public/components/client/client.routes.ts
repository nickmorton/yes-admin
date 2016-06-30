'use strict';

import {RouterConfig} from '@angular/router';

import {ClientComponent} from '../client/client.component';
import {ClientListComponent} from './client-list.component';
import {ClientDetailComponent} from './client-detail.component';

export const CLIENT_ROUTES: RouterConfig = [
	{
		path: '',
		redirectTo: 'clients',
		terminal: true,
	},
	{
		path: 'clients', component: ClientComponent, children: [
			{ path: '', component: ClientListComponent },
			{ path: 'add', component: ClientDetailComponent },
			{ path: ':id', component: ClientDetailComponent },
		],
	},
];
