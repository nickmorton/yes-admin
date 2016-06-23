'use strict';

import {Component} from '@angular/core';
import {Route, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import {ClientListComponent} from './client-list.component';
import {ClientDetailComponent} from './client-detail.component';
import {ClientService} from './client.service';

@Component({
	templateUrl: 'components/client/client.template.html',
	providers: [ClientService],
	directives: [
		ROUTER_DIRECTIVES,
		MD_CARD_DIRECTIVES,
	],
})

@Routes([
	new Route({ path: '/', component: ClientListComponent  }),
	new Route({ path: '/add', component: ClientDetailComponent }),
	new Route({ path: '/:id', component: ClientDetailComponent }),
])
export class ClientComponent {
}
