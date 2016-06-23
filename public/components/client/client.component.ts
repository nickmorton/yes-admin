'use strict';

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import {ClientService} from './client.service';

@Component({
	templateUrl: 'components/client/client.template.html',
	providers: [ClientService],
	directives: [
		ROUTER_DIRECTIVES,
		MD_CARD_DIRECTIVES,
	],
})
export class ClientComponent {
}
