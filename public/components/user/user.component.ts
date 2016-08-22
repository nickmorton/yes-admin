import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import {BaseComponent} from '../../lib/base.component';
import {UserService} from './user.service';

@Component({
	templateUrl: 'components/user/user.template.html',
	providers: [UserService],
	directives: [
		ROUTER_DIRECTIVES,
		MD_CARD_DIRECTIVES,
	],
})
export class UserComponent extends BaseComponent {
}
