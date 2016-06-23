'use strict';

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
	selector: 'yes-admin-app',
	moduleId: module.id,
	styleUrls: ['app.style.css'],
	templateUrl: 'app.template.html',
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
export class AppComponent {
	constructor() {
		console.log('App component initialised');
	};
}
