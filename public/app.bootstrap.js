"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./components/app/app.module');
require('rxjs/Rx');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
// // import 'rxjs/Rx';
// // import {bootstrap} from '@angular/platform-browser-dynamic';
// // import {HTTP_PROVIDERS, RequestOptions} from '@angular/http';
// // import {provide} from '@angular/core';
// // import {disableDeprecatedForms, provideForms} from '@angular/forms';
// // import {MdIconRegistry} from '@angular2-material/icon';
// // import {AppComponent} from './components/app/app.component';
// // import {ValidatorFactory} from './lib/validator-factory';
// // import {JsonRequestOptions} from './lib/json-request-options';
// // import {APP_ROUTES_PROVIDERS} from  './components/app/app.routes';
// // bootstrap(
// // 	AppComponent,
// // 	[
// // 		HTTP_PROVIDERS,
// // 		disableDeprecatedForms(),
// // 		provideForms(),
// // 		MdIconRegistry,
// // 		ValidatorFactory,
// // 		provide(RequestOptions, { useClass: JsonRequestOptions }),
// // 		APP_ROUTES_PROVIDERS,
// // 	]
// // ).catch((err: any) => console.error(err));
//# sourceMappingURL=app.bootstrap.js.map