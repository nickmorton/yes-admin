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
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var list_1 = require('@angular2-material/list');
var sidenav_1 = require('@angular2-material/sidenav');
var toolbar_1 = require('@angular2-material/toolbar');
var home_component_1 = require('../home/home.component');
var client_component_1 = require('../client/client.component');
var staff_component_1 = require('../staff/staff.component');
var AppComponent = (function () {
    function AppComponent() {
        console.log('App component initialised');
    }
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'yes-admin-app',
            styleUrls: ['components/app/app.style.css'],
            templateUrl: 'components/app/app.template.html',
            directives: [
                router_1.ROUTER_DIRECTIVES,
                button_1.MdButton,
                icon_1.MdIcon,
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES,
                toolbar_1.MdToolbar,
            ],
            viewProviders: [icon_1.MdIconRegistry],
        }),
        router_1.Routes([
            new router_1.Route({ path: '/', component: home_component_1.HomeComponent }),
            new router_1.Route({ path: '/clients', component: client_component_1.ClientComponent }),
            new router_1.Route({ path: '/staff', component: staff_component_1.StaffComponent }),
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map