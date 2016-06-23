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
var common_1 = require('@angular/common');
var input_1 = require('@angular2-material/input');
var client_service_1 = require('./client.service');
var client_1 = require('../../shared/models/client');
var validator_factory_1 = require('../../lib/validator-factory');
var rx_1 = require('rxjs/rx');
var ClientDetailComponent = (function () {
    function ClientDetailComponent(service, validatorFactory) {
        var _this = this;
        this.service = service;
        this.client = {};
        this.isAddMode = true;
        this.onSubmit = function () {
            var source = _this.isAddMode ? _this.service.insert(_this.client) : _this.service.update(_this.client);
            source.subscribe(function (client) { return _this.client = client; });
        };
        this.validator = validatorFactory.getInstance(client_1.ClientValidator);
    }
    ;
    ClientDetailComponent.prototype.canActivate = function (route, state) {
        var _this = this;
        var subject = new rx_1.Subject();
        var id = route.params['id'];
        if (id) {
            this.isAddMode = false;
            this.service.getById(id)
                .subscribe(function (client) {
                _this.client = client;
                subject.next(true);
                subject.complete();
            });
        }
        return subject;
    };
    ClientDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'components/client/client-detail.template.html',
            directives: [
                common_1.FORM_DIRECTIVES,
                input_1.MD_INPUT_DIRECTIVES,
            ],
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, validator_factory_1.ValidatorFactory])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());
exports.ClientDetailComponent = ClientDetailComponent;
//# sourceMappingURL=client-detail.component.js.map