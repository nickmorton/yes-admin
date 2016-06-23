'use strict';
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var icon_1 = require('@angular2-material/icon');
require('rxjs/Rx');
var app_component_1 = require('./components/app/app.component');
var validator_factory_1 = require('./lib/validator-factory');
var json_request_options_1 = require('./lib/json-request-options');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    icon_1.MdIconRegistry,
    core_1.Renderer,
    validator_factory_1.ValidatorFactory,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
    core_1.provide(http_1.RequestOptions, { useClass: json_request_options_1.JsonRequestOptions }),
]);
//# sourceMappingURL=app.bootstrap.js.map