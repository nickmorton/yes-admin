'use strict';

import {Component} from '@angular/core';
import {Router, OnActivate} from '@angular/router';

import {ClientService} from './client.service';
import {IClient} from '../../shared/models/client';

@Component({
	selector: 'client-list',
	templateUrl: 'components/client/client-list.template.html',
})
export class ClientListComponent implements OnActivate {
	public clients: Array<IClient> = [];

	constructor(private router: Router, private clientService: ClientService) {
	};

	public routerOnActivate() {
		this.clientService.getAll()
			.subscribe((clients: Array<IClient>) => this.clients = clients);
	};

	public view = (client: IClient): boolean => {
		console.log(client);
		this.router.navigate(['/clients', client._id]);
		return false;
	};
}
