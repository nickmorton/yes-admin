import {NgModule} from '@angular/core';

// Import modules.
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';

import {LibModule} from '../../lib/lib.module';
import {HomeModule} from '../home/home.module';
import {UserModule} from '../user/user.module';

// Members.
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
		MaterialModule.forRoot(),
		LibModule.forRoot(),

		// App modules.
		appRouting,
		HomeModule,
		UserModule,
	],
})
export class AppModule {
}
