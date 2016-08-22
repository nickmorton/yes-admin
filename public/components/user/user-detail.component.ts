import {Component, OnInit} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {BaseComponent} from '../../lib/base.component';
import {UserService} from './user.service';
import {IUser, UserValidator} from '../../shared/models/user';
import {ValidatorFactory} from '../../lib/validator-factory';
import {IResponse} from '../../shared/lib/request-response';
import {Observable} from 'rxjs/rx';

@Component({
	templateUrl: 'components/user/user-detail.template.html',
	directives: [
		FORM_DIRECTIVES,
		MD_INPUT_DIRECTIVES,
	],
})
// // export class UserDetailComponent extends BaseComponent implements OnInit, CanActivate {
export class UserDetailComponent extends BaseComponent implements OnInit {
	public user: IUser = <IUser>{};
	public validator: UserValidator;
	public isAddMode: boolean = true;

	constructor(private router: Router, private route: ActivatedRoute, private service: UserService, validatorFactory: ValidatorFactory) {
		super();
		this.validator = validatorFactory.getInstance(UserValidator);
	};

	public ngOnInit() {
		this.addForDisposal(
			this.route.params
				.subscribe((params: { [key: string]: string }) => {
					let id: string = params['id'];
					if (id) {
						this.isAddMode = false;
						this.service.getById(id)
							.subscribe((response: IResponse<IUser>) => this.user = response.entity);
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
	// // 			.subscribe((user: IUser) => {
	// // 				this.user = user;
	// // 				subject.next(true);
	// // 				subject.complete();
	// // 			});
	// // 	}

	// // 	return subject;
	// // }

	public onSubmit = (): void => {
		const source: Observable<IResponse<IUser>> = this.isAddMode
			? this.service.add({ data: this.user })
			: this.service.update({ data: this.user });
		source.subscribe((response: IResponse<IUser>) => this.user = response.entity);
	};
}
