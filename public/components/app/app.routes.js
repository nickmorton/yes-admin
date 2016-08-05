'use strict';
var router_1 = require('@angular/router');
var page_not_found_component_1 = require('./page-not-found.component');
var authentication_guard_1 = require('../login/authentication.guard');
var home_component_1 = require('../home/home.component');
var staff_component_1 = require('../staff/staff.component');
var client_routes_1 = require('../client/client.routes');
var login_routes_1 = require('../login/login.routes');
exports.APP_ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'staff', component: staff_component_1.StaffComponent, canActivate: [authentication_guard_1.AuthenticationGuard] }
].concat(client_routes_1.CLIENT_ROUTES, login_routes_1.LOGIN_ROUTES, [
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
]);
exports.APP_ROUTES_PROVIDERS = [
    router_1.provideRouter(exports.APP_ROUTES),
    login_routes_1.AUTHENTICATION_PROVIDERS,
];
//# sourceMappingURL=app.routes.js.map