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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var input_1 = require('@angular2-material/input');
var base_component_1 = require('../../lib/base.component');
var client_service_1 = require('./client.service');
var client_1 = require('../../shared/models/client');
var validator_factory_1 = require('../../lib/validator-factory');
var ClientDetailComponent = (function (_super) {
    __extends(ClientDetailComponent, _super);
    function ClientDetailComponent(router, route, service, validatorFactory) {
        var _this = this;
        _super.call(this);
        this.router = router;
        this.route = route;
        this.service = service;
        this.client = {};
        this.isAddMode = true;
        // // public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        // // 	const subject: Subject<boolean> = new Subject<boolean>();
        // // 	let params: { [key: string]: string } = route.params;
        // // 	let id: string = params['id'];
        // // 	if (id) {
        // // 		this.isAddMode = false;
        // // 		this.service.getById(id)
        // // 			.subscribe((client: IClient) => {
        // // 				this.client = client;
        // // 				subject.next(true);
        // // 				subject.complete();
        // // 			});
        // // 	}
        // // 	return subject;
        // // }
        this.onSubmit = function () {
            var source = _this.isAddMode
                ? _this.service.add({ data: _this.client })
                : _this.service.update({ data: _this.client });
            source.subscribe(function (response) { return _this.client = response.entity; });
        };
        this.validator = validatorFactory.getInstance(client_1.ClientValidator);
    }
    ;
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addForDisposal(this.route.params
            .subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isAddMode = false;
                _this.service.getById(id)
                    .subscribe(function (response) { return _this.client = response.entity; });
            }
        }));
    };
    ;
    ClientDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'components/client/client-detail.template.html',
            directives: [
                forms_1.FORM_DIRECTIVES,
                input_1.MD_INPUT_DIRECTIVES,
            ],
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, client_service_1.ClientService, validator_factory_1.ValidatorFactory])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}(base_component_1.BaseComponent));
exports.ClientDetailComponent = ClientDetailComponent;
//# sourceMappingURL=client-detail.component.js.map