// Import modules.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibModule } from '../../lib/lib.module';
import { HomeModule } from '../home/home.module';
import { UserModule } from '../user/user.module';

// Members.
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		PageNotFoundComponent,
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		CommonModule,
		FlexLayoutModule,
		LibModule.forRoot(),
		MaterialModule,
		RouterModule,

		// App modules.
		appRouting,
		HomeModule,
		UserModule,
	],
})
export class AppModule {
}
