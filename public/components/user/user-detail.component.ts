import { Component, Injectable, SimpleChange, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/rx';

import { BaseComponent, ValidatorFactory } from '../../lib';
import { UserService } from './user.service';
import { IUser, UserValidator, EthnicityCode } from '../../shared/models';
import { IResponse } from '../../shared/lib';

export interface IUserDetailData {
	user: IUser;
};

@Component({
	templateUrl: 'components/user/user-detail.template.html',
})
export class UserDetailComponent extends BaseComponent implements OnInit {
	public user: IUser = <IUser>{};
	public validators: Map<string, Array<ValidatorFn>>;
	public isAddMode: boolean = true;
	public ethnicityCode: typeof EthnicityCode = EthnicityCode;
	public formErrors: { name?: string } = {};
	private userForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private userService: UserService,
		validatorFactory: ValidatorFactory
	) {
		super();
		this.validators = validatorFactory.getNgValidators(UserValidator);
	};

	public ngOnInit() {
		this.buildForm();
		this.route.data.subscribe(
			(result: { data: IUserDetailData }) => this.user = result.data.user || <IUser>{}
		);
	};

	public onSubmit = (): void => {
		const source: Observable<IResponse<IUser>> = this.isAddMode
			? this.userService.add({ data: this.user })
			: this.userService.update({ data: this.user });
		source.subscribe((response: IResponse<IUser>) => this.user = response.entity);
	}

	private onValueChanged(change?: SimpleChange) {
		if (!this.userForm) {
			return;
		}

		// const form: FormGroup = this.userForm;
		// for (const field in this.formErrors) {
		// 	// clear previous error message (if any)
		// 	this.formErrors[field] = '';
		// 	const control = form.get(field);
		// 	if (control && control.dirty && !control.valid) {
		// 		const messages = this.validationMessages[field];
		// 		for (const key in control.errors) {
		// 			this.formErrors[field] += messages[key] + ' ';
		// 		}
		// 	}
		// }
	}

	private buildForm = () => {

		this.userForm = this.formBuilder.group({
			'name': [ this.user.name, this.validators.get('name') ],
		});

		// // this.userForm = this.formBuilder.group({
		// // 	'name': [
		// // 		this.user.name, [
		// // 			Validators.required,
		// // 			Validators.minLength(4),
		// // 			Validators.maxLength(24),
		// // 		],
		// // 	],
		// // });

		this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
		this.onValueChanged();
	}
}

@Injectable()
export class UserDetailResolve implements Resolve<IUserDetailData> {
	constructor(private userService: UserService) {
	};

	public resolve(route: ActivatedRouteSnapshot): Observable<IUserDetailData> {
		const id: string = route.params['userId'];
		if (id) {
			return this.userService.getById(id)
				.map((response: IResponse<IUser>) => <IUserDetailData>{ user: response.entity });
		}

		return Observable.empty<IUserDetailData>();
	};
}
