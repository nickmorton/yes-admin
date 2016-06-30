'use strict';
var client_component_1 = require('../client/client.component');
var client_list_component_1 = require('./client-list.component');
var client_detail_component_1 = require('./client-detail.component');
exports.CLIENT_ROUTES = [
    {
        path: '',
        redirectTo: 'clients',
        terminal: true,
    },
    {
        path: 'clients', component: client_component_1.ClientComponent, children: [
            { path: '', component: client_list_component_1.ClientListComponent },
            { path: 'add', component: client_detail_component_1.ClientDetailComponent },
            { path: ':id', component: client_detail_component_1.ClientDetailComponent },
        ],
    },
];
//# sourceMappingURL=client.routes.js.map