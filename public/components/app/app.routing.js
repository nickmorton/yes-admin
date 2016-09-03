"use strict";
var router_1 = require('@angular/router');
var page_not_found_component_1 = require('./page-not-found.component');
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
];
exports.appRouting = router_1.RouterModule.forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map