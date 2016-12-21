import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthenticationService } from './authentication.service';
import { AuthenticationGuard } from './authentication.guard';

export const LOGIN_ROUTES: Routes = [
	{ path: 'login', component: LoginComponent },
];

export const AUTHENTICATION_PROVIDERS: Array<Object> = [AuthenticationGuard, AuthenticationService];
