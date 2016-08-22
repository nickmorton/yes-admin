import {RouterConfig} from '@angular/router';

import {UserComponent} from '../user/user.component';
import {UserListComponent} from './user-list.component';
import {UserDetailComponent} from './user-detail.component';

export const CLIENT_ROUTES: RouterConfig = [
	{
		path: '',
		redirectTo: 'users',
		terminal: true,
	},
	{
		path: 'users', component: UserComponent, children: [
			{ path: '', component: UserListComponent },
			{ path: 'add', component: UserDetailComponent },
			{ path: ':id', component: UserDetailComponent },
		],
	},
];
