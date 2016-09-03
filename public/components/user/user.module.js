"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var material_module_1 = require('../../lib/material.module');
var user_component_1 = require('./user.component');
var user_list_component_1 = require('./user-list.component');
var user_detail_component_1 = require('./user-detail.component');
var user_service_1 = require('./user.service');
var user_routing_1 = require('./user.routing');
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                material_module_1.MaterialModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                user_routing_1.userRoutes,
            ],
            declarations: [
                user_component_1.UserComponent,
                user_list_component_1.UserListComponent,
                user_detail_component_1.UserDetailComponent,
            ],
            exports: [
                user_component_1.UserComponent,
            ],
            providers: [
                user_service_1.UserService,
                user_detail_component_1.UserDetailResolve,
                user_list_component_1.UserListResolve,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map