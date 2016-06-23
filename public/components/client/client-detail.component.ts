'use strict';

import {Component} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {FORM_DIRECTIVES} from '@angular/common';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {ClientService} from './client.service';
import {IClient, ClientValidator} from '../../shared/models/client';
import {ValidatorFactory} from '../../lib/validator-factory';
import {Observable, Subject} from 'rxjs/rx';

@Component({
	templateUrl: 'components/client/client-detail.template.html',
	directives: [
		FORM_DIRECTIVES,
		MD_INPUT_DIRECTIVES,
	],
})
export class ClientDetailComponent implements CanActivate {
	public client: IClient = <IClient>{};
	public validator: ClientValidator;
	public isAddMode: boolean = true;

	constructor(private service: ClientService, validatorFactory: ValidatorFactory) {
		this.validator = validatorFactory.getInstance(ClientValidator);
	};

	public canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		const subject: Subject<boolean> = new Subject<boolean>();
		let id = route.params['id'];
		if (id) {
			this.isAddMode = false;
			this.service.getById(id)
				.subscribe((client: IClient) => {
					this.client = client;
					subject.next(true);
					subject.complete();
				});
		}

		return subject;
	}

	public onSubmit = (): void => {
		const source: Observable<IClient> = this.isAddMode ? this.service.insert(this.client) : this.service.update(this.client);
		source.subscribe((client: IClient) => this.client = client);
	};
}
