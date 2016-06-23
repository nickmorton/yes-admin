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
var http_1 = require('@angular/http');
var ClientService = (function () {
    function ClientService(http) {
        var _this = this;
        this.http = http;
        this.getAll = function () {
            return _this.http.get('/api/clients')
                .map(function (response) { return response.json(); });
        };
        this.getById = function (id) {
            return _this.http.get("/api/clients/" + id)
                .map(function (response) { return response.json(); });
        };
        this.insert = function (client) {
            return _this.http.post('api/clients', JSON.stringify(client))
                .map(function (response) { return response.json(); });
        };
        this.update = function (client) {
            return _this.http.put('api/clients', JSON.stringify(client))
                .map(function (response) { return response.json(); });
        };
        this.create = function () {
            return {};
        };
    }
    ;
    ClientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map