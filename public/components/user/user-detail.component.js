"use strict";
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
var user_service_1 = require('./user.service');
var user_1 = require('../../shared/models/user');
var validator_factory_1 = require('../../lib/validator-factory');
var rx_1 = require('rxjs/rx');
;
var UserDetailComponent = (function (_super) {
    __extends(UserDetailComponent, _super);
    function UserDetailComponent(router, route, userService, validatorFactory) {
        var _this = this;
        _super.call(this);
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.user = {};
        this.isAddMode = true;
        this.onSubmit = function () {
            var source = _this.isAddMode
                ? _this.userService.add({ data: _this.user })
                : _this.userService.update({ data: _this.user });
            source.subscribe(function (response) { return _this.user = response.entity; });
        };
        this.validator = validatorFactory.getInstance(user_1.UserValidator);
    }
    ;
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (result) { return _this.user = result.data.user || {}; });
    };
    ;
    UserDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'components/user/user-detail.template.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, user_service_1.UserService, validator_factory_1.ValidatorFactory])
    ], UserDetailComponent);
    return UserDetailComponent;
}(base_component_1.BaseComponent));
exports.UserDetailComponent = UserDetailComponent;
var UserDetailResolve = (function () {
    function UserDetailResolve(userService) {
        this.userService = userService;
    }
    ;
    UserDetailResolve.prototype.resolve = function (route) {
        var id = route.params['userId'];
        if (id) {
            return this.userService.getById(id)
                .map(function (response) { return { user: response.entity }; });
        }
        return rx_1.Observable.empty();
    };
    ;
    UserDetailResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserDetailResolve);
    return UserDetailResolve;
}());
exports.UserDetailResolve = UserDetailResolve;
//# sourceMappingURL=user-detail.component.js.map