'use strict';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, RequestOptions} from '@angular/http';
import {Renderer, provide} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {MdIconRegistry} from '@angular2-material/icon';
import 'rxjs/Rx';
import {AppComponent} from './components/app/app.component';
import {ValidatorFactory} from './lib/validator-factory';
import {JsonRequestOptions} from './lib/json-request-options';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	MdIconRegistry,
	Renderer,
	ValidatorFactory,
	provide(LocationStrategy, { useClass: HashLocationStrategy }),
	provide(RequestOptions, { useClass: JsonRequestOptions }),
]);
