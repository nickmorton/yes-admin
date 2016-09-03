"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('../user/user.component');
var user_list_component_1 = require('./user-list.component');
var user_detail_component_1 = require('./user-detail.component');
var routes = [
    {
        path: 'users', component: user_component_1.UserComponent, children: [
            {
                path: '',
                component: user_list_component_1.UserListComponent,
                resolve: { data: user_list_component_1.UserListResolve },
            },
            { path: 'add', component: user_detail_component_1.UserDetailComponent },
            {
                path: ':userId',
                component: user_detail_component_1.UserDetailComponent,
                resolve: { data: user_detail_component_1.UserDetailResolve },
            },
        ],
    },
];
exports.userRoutes = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=user.routing.js.map