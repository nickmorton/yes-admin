import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { UserComponent } from './user.component';
import { UserListComponent, UserListResolve } from './user-list.component';
import { UserDetailComponent, UserDetailResolve } from './user-detail.component';
import { UserService } from './user.service';
import { userRoutes } from './user.routing';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
	imports: [
		userRoutes,
		MaterialModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		PipesModule,
	],
	declarations: [
		UserComponent,
		UserListComponent,
		UserDetailComponent,
	],
	providers: [
		UserService,
		UserDetailResolve,
		UserListResolve,
	],
})
export class UserModule {
}
