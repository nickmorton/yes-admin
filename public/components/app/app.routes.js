'use strict';
var router_1 = require('@angular/router');
var authentication_guard_1 = require('../../lib/authentication.guard');
var home_component_1 = require('../home/home.component');
var staff_component_1 = require('../staff/staff.component');
var client_routes_1 = require('../client/client.routes');
exports.APP_ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'staff', component: staff_component_1.StaffComponent, canActivate: [authentication_guard_1.AuthenticationGuard] }
].concat(client_routes_1.CLIENT_ROUTES);
exports.APP_ROUTES_PROVIDERS = [
    router_1.provideRouter(exports.APP_ROUTES),
];
//# sourceMappingURL=app.routes.js.map