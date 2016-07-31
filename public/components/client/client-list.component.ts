'use strict';

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {BaseComponent} from '../../lib/base.component';
import {ClientService} from './client.service';
import {IClient} from '../../shared/models/client';
import {IPagedResponse} from '../../shared/lib/request-response';

@Component({
	selector: 'client-list',
	templateUrl: 'components/client/client-list.template.html',
})
export class ClientListComponent extends BaseComponent implements OnInit {
	public clients: Array<IClient> = [];

	constructor(private router: Router, private clientService: ClientService) {
		super();
	};

	public ngOnInit() {
		this.clientService.get({ skip: 0, limit: 10 })
			.subscribe((response: IPagedResponse<IClient>) => this.clients = response.entities);
	};

	public view = (client: IClient): boolean => {
		this.router.navigate(['/clients', client._id]);
		return false;
	};
}
