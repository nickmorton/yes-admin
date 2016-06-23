'use strict';

import 'rxjs/Rx';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, RequestOptions} from '@angular/http';
import {Renderer, provide} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {MdIconRegistry} from '@angular2-material/icon';
import {AppComponent} from './components/app/app.component';
import {ValidatorFactory} from './lib/validator-factory';
import {JsonRequestOptions} from './lib/json-request-options';
import {APP_ROUTES_PROVIDERS} from  './components/app/app.routes';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	MdIconRegistry,
	Renderer,
	ValidatorFactory,
	provide(LocationStrategy, { useClass: HashLocationStrategy }),
	provide(RequestOptions, { useClass: JsonRequestOptions }),
	APP_ROUTES_PROVIDERS,
]);
