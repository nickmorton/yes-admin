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
var core_1 = require('@angular/core');
// Import modules.
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var material_1 = require('@angular/material');
var lib_module_1 = require('../../lib/lib.module');
var home_module_1 = require('../home/home.module');
var user_module_1 = require('../user/user.module');
// Members.
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var page_not_found_component_1 = require('./page-not-found.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                page_not_found_component_1.PageNotFoundComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                common_1.CommonModule,
                material_1.MaterialModule.forRoot(),
                lib_module_1.LibModule.forRoot(),
                // App modules.
                app_routing_1.appRouting,
                home_module_1.HomeModule,
                user_module_1.UserModule,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map