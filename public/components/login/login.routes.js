"use strict";
var login_component_1 = require('./login.component');
var authentication_service_1 = require('./authentication.service');
var authentication_guard_1 = require('./authentication.guard');
exports.LOGIN_ROUTES = [
    { path: 'login', component: login_component_1.LoginComponent },
];
exports.AUTHENTICATION_PROVIDERS = [authentication_guard_1.AuthenticationGuard, authentication_service_1.AuthenticationService];
//# sourceMappingURL=login.routes.js.map