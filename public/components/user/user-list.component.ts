'use strict';

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {BaseComponent} from '../../lib/base.component';
import {UserService} from './user.service';
import {IUser} from '../../shared/models/user';
import {IPagedResponse} from '../../shared/lib/request-response';

@Component({
	selector: 'user-list',
	templateUrl: 'components/user/user-list.template.html',
})
export class UserListComponent extends BaseComponent implements OnInit {
	public users: Array<IUser> = [];

	constructor(private router: Router, private userService: UserService) {
		super();
	};

	public ngOnInit() {
		this.userService.get({ skip: 0, limit: 10 })
			.subscribe((response: IPagedResponse<IUser>) => this.users = response.entities);
	};

	public view = (user: IUser): boolean => {
		this.router.navigate(['/users', user._id]);
		return false;
	};
}
