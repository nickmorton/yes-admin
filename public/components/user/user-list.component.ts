import {Component, OnInit, Injectable} from '@angular/core';
import {Router, Resolve, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/rx';
import {BaseComponent} from '../../lib';
import {UserService} from './user.service';
import {IUser} from '../../shared/models';
import {IPagedResponse} from '../../shared/lib';

interface IUserListData {
	users: Array<IUser>;
};

@Component({
	selector: 'user-list',
	templateUrl: 'components/user/user-list.template.html',
})
export class UserListComponent extends BaseComponent implements OnInit {
	public users: Array<IUser> = [];

	constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
		super();
	};

	public ngOnInit() {
		this.route.data.subscribe(
			(result: {data: IUserListData }) => {
				this.users = result.data.users;
			}
		);
	};

	public view = (user: IUser): boolean => {
		this.router.navigate(['/users', user._id]);
		return false;
	};
}

@Injectable()
export class UserListResolve implements Resolve<IUserListData> {
	constructor(private userService: UserService) {
	};

	public resolve(): Observable<IUserListData> {
		return this.userService.get({ skip: 0, limit: 10 })
			.map((response: IPagedResponse<IUser>) => <IUserListData>{ users: response.entities });
	};
}
