import { Component, Injectable, SimpleChange, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/rx';

import { FormBaseComponent, INgValidator, NgValidatorFactory } from '../../lib';
import { UserService } from './user.service';
import { IUser, UserValidator, EthnicityCode } from '../../shared/models';
import { IResponse } from '../../shared/lib';

export interface IUserDetailData {
	user: IUser;
};

interface IFormModel {
	forename: string;
	surname: string;
}

@Component({
	moduleId: module.id,
	templateUrl: 'user-detail.template.html',
	styleUrls: ['user-detail.style.css'],
})
export class UserDetailComponent extends FormBaseComponent implements OnInit {
	public user: IUser = <IUser>{};
	public validators: Map<string, Array<INgValidator>>;
	public ethnicityCode: typeof EthnicityCode = EthnicityCode;
	public formErrors: { [key: string]: Array<string> } = {};
	protected form: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private userService: UserService,
		validatorFactory: NgValidatorFactory
	) {
		super();
		this.validators = validatorFactory.getValidators(UserValidator);
	};

	public ngOnInit() {
		this.buildForm();
		this.route.data.subscribe(
			(result: { data: IUserDetailData }) => {
				this.user = result.data.user || <IUser>{};
				this.copyDataToFormModel();
			}
		);
	};

	public onSubmit = (): void => {
		Object.assign(this.user, this.form.value);
		const service: Observable<IResponse<IUser>> = this.user._id
			? this.userService.update({ data: this.user })
			: this.userService.add({ data: this.user });
		service.subscribe((response: IResponse<IUser>) => this.user = response.entity);
	}

	public onReset = () => {
		this.copyDataToFormModel();
	}

	private buildForm = () => {
		this.form = this.formBuilder.group({
			'forename': ['', this.validators.get('forename').map((v: INgValidator) => v.validatorFn)],
			'surname': ['', this.validators.get('surname').map((v: INgValidator) => v.validatorFn)],
			'gender': [],
		});

		this.form.valueChanges.subscribe((change: SimpleChange) => this.onValueChanged(change));
		this.onValueChanged();
	}

	private copyDataToFormModel = () => {
		this.form.reset(<IFormModel>{
			'forename': this.user.forename || '',
			'surname': this.user.surname || '',
			'gender': this.user.gender,
		});
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

		return Observable.of({ user: this.userService.create() });
	};
}
