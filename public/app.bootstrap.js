'use strict';
require('rxjs/Rx');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
////import {Renderer, provide} from '@angular/core';
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var icon_1 = require('@angular2-material/icon');
var app_component_1 = require('./components/app/app.component');
var validator_factory_1 = require('./lib/validator-factory');
var json_request_options_1 = require('./lib/json-request-options');
var app_routes_1 = require('./components/app/app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    icon_1.MdIconRegistry,
    ////Renderer,
    validator_factory_1.ValidatorFactory,
    core_1.provide(http_1.RequestOptions, { useClass: json_request_options_1.JsonRequestOptions }),
    app_routes_1.APP_ROUTES_PROVIDERS,
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.bootstrap.js.map