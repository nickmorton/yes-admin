import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {LibModule} from '../../lib/lib.module';
import {MaterialModule} from '../../lib/material.module';
import {HomeModule} from '../home/home.module';
import {UserModule} from '../user/user.module';

import {appRouting} from './app.routing';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
		AppComponent,
		PageNotFoundComponent,
		],
    imports: [
		BrowserModule,
		RouterModule,
		CommonModule,
		LibModule.forRoot(),
		MaterialModule.forRoot(),

		// App modules.
		appRouting,
		HomeModule,
		UserModule,
	],
})
export class AppModule {
}
