'use strict';

import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs/rx';

export class AuthenticationGuard implements CanActivate {

	public canActivate(): boolean | Observable<boolean> {
		return true;
	};
}
