'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var base_component_1 = require('../../lib/base.component');
var client_service_1 = require('./client.service');
var ClientListComponent = (function (_super) {
    __extends(ClientListComponent, _super);
    function ClientListComponent(router, clientService) {
        var _this = this;
        _super.call(this);
        this.router = router;
        this.clientService = clientService;
        this.clients = [];
        this.view = function (client) {
            _this.router.navigate(['/clients', client._id]);
            return false;
        };
    }
    ;
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (clients) { return _this.clients = clients; });
    };
    ;
    ClientListComponent = __decorate([
        core_1.Component({
            selector: 'client-list',
            templateUrl: 'components/client/client-list.template.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, client_service_1.ClientService])
    ], ClientListComponent);
    return ClientListComponent;
}(base_component_1.BaseComponent));
exports.ClientListComponent = ClientListComponent;
//# sourceMappingURL=client-list.component.js.map