'use strict';

import {Component} from '@angular/core';
import {Route, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';

import {HomeComponent} from '../home/home.component';
import {ClientComponent} from '../client/client.component';
import {StaffComponent} from '../staff/staff.component';

@Component({
	selector: 'yes-admin-app',
	styleUrls: ['components/app/app.style.css'],
	templateUrl: 'components/app/app.template.html',
	directives: [
		ROUTER_DIRECTIVES,
		MdButton,
		MdIcon,
		MD_SIDENAV_DIRECTIVES,
		MD_LIST_DIRECTIVES,
		MdToolbar,
	],
	viewProviders: [MdIconRegistry],
})
@Routes([
	new Route({ path: '/', component: HomeComponent }),
	new Route({ path: '/clients', component: ClientComponent }),
	new Route({ path: '/staff', component: StaffComponent }),
])
export class AppComponent {
	constructor() {
		console.log('App component initialised');
	};
}
