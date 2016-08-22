import { provideRouter, RouterConfig } from '@angular/router';

import {PageNotFoundComponent} from './page-not-found.component';
import {AuthenticationGuard} from '../login/authentication.guard';
import {HomeComponent} from '../home/home.component';
import {StaffComponent} from '../staff/staff.component';
import {CLIENT_ROUTES} from '../user/user.routes';
import {LOGIN_ROUTES, AUTHENTICATION_PROVIDERS} from '../login/login.routes';

export const APP_ROUTES: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'staff', component: StaffComponent, canActivate: [AuthenticationGuard] },
  ...CLIENT_ROUTES,
  ...LOGIN_ROUTES,
  { path: '**', component: PageNotFoundComponent },
];

export const APP_ROUTES_PROVIDERS = [
  provideRouter(APP_ROUTES),
  AUTHENTICATION_PROVIDERS,
];
