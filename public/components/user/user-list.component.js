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
var index_1 = require('../../lib/index');
var user_service_1 = require('./user.service');
;
var UserListComponent = (function (_super) {
    __extends(UserListComponent, _super);
    function UserListComponent(router, route, userService) {
        var _this = this;
        _super.call(this);
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.users = [];
        this.view = function (user) {
            _this.router.navigate(['/users', user._id]);
            return false;
        };
    }
    ;
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (result) {
            _this.users = result.data.users;
        });
    };
    ;
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: 'components/user/user-list.template.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, user_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}(index_1.BaseComponent));
exports.UserListComponent = UserListComponent;
var UserListResolve = (function () {
    function UserListResolve(userService) {
        this.userService = userService;
    }
    ;
    UserListResolve.prototype.resolve = function () {
        return this.userService.get({ skip: 0, limit: 10 })
            .map(function (response) { return { users: response.entities }; });
    };
    ;
    UserListResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserListResolve);
    return UserListResolve;
}());
exports.UserListResolve = UserListResolve;
//# sourceMappingURL=user-list.component.js.map