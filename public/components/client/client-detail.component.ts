'use strict';

import {Component, OnInit} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {BaseComponent} from '../../lib/base.component';
import {ClientService} from './client.service';
import {IClient, ClientValidator} from '../../shared/models/client';
import {ValidatorFactory} from '../../lib/validator-factory';
import {IResponse} from '../../shared/lib/request-response';
import {Observable} from 'rxjs/rx';

@Component({
	templateUrl: 'components/client/client-detail.template.html',
	directives: [
		FORM_DIRECTIVES,
		MD_INPUT_DIRECTIVES,
	],
})
// // export class ClientDetailComponent extends BaseComponent implements OnInit, CanActivate {
export class ClientDetailComponent extends BaseComponent implements OnInit {
	public client: IClient = <IClient>{};
	public validator: ClientValidator;
	public isAddMode: boolean = true;

	constructor(private router: Router, private route: ActivatedRoute, private service: ClientService, validatorFactory: ValidatorFactory) {
		super();
		this.validator = validatorFactory.getInstance(ClientValidator);
	};

	public ngOnInit() {
		this.addForDisposal(
			this.route.params
				.subscribe((params: { [key: string]: string }) => {
					let id: string = params['id'];
					if (id) {
						this.isAddMode = false;
						this.service.getById(id)
							.subscribe((response: IResponse<IClient>) => this.client = response.entity);
					}
				})
		);
	};

	// // public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
	// // 	const subject: Subject<boolean> = new Subject<boolean>();
	// // 	let params: { [key: string]: string } = route.params;
	// // 	let id: string = params['id'];
	// // 	if (id) {
	// // 		this.isAddMode = false;
	// // 		this.service.getById(id)
	// // 			.subscribe((client: IClient) => {
	// // 				this.client = client;
	// // 				subject.next(true);
	// // 				subject.complete();
	// // 			});
	// // 	}

	// // 	return subject;
	// // }

	public onSubmit = (): void => {
		const source: Observable<IResponse<IClient>> = this.isAddMode
			? this.service.add({ data: this.client })
			: this.service.update({ data: this.client });
		source.subscribe((response: IResponse<IClient>) => this.client = response.entity);
	};
}
