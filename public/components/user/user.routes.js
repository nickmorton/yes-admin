'use strict';
var user_component_1 = require('../user/user.component');
var user_list_component_1 = require('./user-list.component');
var user_detail_component_1 = require('./user-detail.component');
exports.CLIENT_ROUTES = [
    {
        path: '',
        redirectTo: 'users',
        terminal: true,
    },
    {
        path: 'users', component: user_component_1.UserComponent, children: [
            { path: '', component: user_list_component_1.UserListComponent },
            { path: 'add', component: user_detail_component_1.UserDetailComponent },
            { path: ':id', component: user_detail_component_1.UserDetailComponent },
        ],
    },
];
//# sourceMappingURL=user.routes.js.map