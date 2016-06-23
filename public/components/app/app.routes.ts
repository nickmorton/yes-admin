'use strict';

import { provideRouter, RouterConfig } from '@angular/router';

import {AuthenticationGuard} from '../../lib/authentication.guard';
import {HomeComponent} from '../home/home.component';
import {StaffComponent} from '../staff/staff.component';
import {CLIENT_ROUTES} from '../client/client.routes';

export const APP_ROUTES: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'staff', component: StaffComponent, canActivate: [AuthenticationGuard] },
  ...CLIENT_ROUTES,
];

export const APP_ROUTES_PROVIDERS = [
  provideRouter(APP_ROUTES),
];
