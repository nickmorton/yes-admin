import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../lib/material.module';
import {UserComponent} from './user.component';
import {UserListComponent, UserListResolve} from './user-list.component';
import {UserDetailComponent, UserDetailResolve} from './user-detail.component';
import {UserService} from './user.service';
import {userRoutes} from './user.routing';

@NgModule({
	imports: [
		MaterialModule,
		CommonModule,
		FormsModule,
		userRoutes,
	],
	declarations: [
		UserComponent,
		UserListComponent,
		UserDetailComponent,
	],
	exports: [
		UserComponent,
	],
	providers: [
		UserService,
		UserDetailResolve,
		UserListResolve,
	],
})
export class UserModule {
}
