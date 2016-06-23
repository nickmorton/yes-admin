'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var card_1 = require('@angular2-material/card');
var client_list_component_1 = require('./client-list.component');
var client_detail_component_1 = require('./client-detail.component');
var client_service_1 = require('./client.service');
var ClientComponent = (function () {
    function ClientComponent() {
    }
    ClientComponent = __decorate([
        core_1.Component({
            templateUrl: 'components/client/client.template.html',
            providers: [client_service_1.ClientService],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
            ],
        }),
        router_1.Routes([
            new router_1.Route({ path: '/', component: client_list_component_1.ClientListComponent }),
            new router_1.Route({ path: '/add', component: client_detail_component_1.ClientDetailComponent }),
            new router_1.Route({ path: '/:id', component: client_detail_component_1.ClientDetailComponent }),
        ]), 
        __metadata('design:paramtypes', [])
    ], ClientComponent);
    return ClientComponent;
}());
exports.ClientComponent = ClientComponent;
//# sourceMappingURL=client.component.js.map