import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { FormGroup } from '@angular/forms';
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
	public validator: UserValidator;
	public isAddMode: boolean = true;
	public ethnicityCode: typeof EthnicityCode = EthnicityCode;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		form: FormGroup,
		private userService: UserService,
		validatorFactory: ValidatorFactory
	) {
		super();
		this.validator = validatorFactory.getInstance(UserValidator);
	};

	public ngOnInit() {
		this.route.data.subscribe(
			(result: { data: IUserDetailData }) => this.user = result.data.user || <IUser>{}
		);
	};

	public onSubmit = (): void => {
		const source: Observable<IResponse<IUser>> = this.isAddMode
			? this.userService.add({ data: this.user })
			: this.userService.update({ data: this.user });
		source.subscribe((response: IResponse<IUser>) => this.user = response.entity);
	};
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
