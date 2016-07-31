"use strict";
var ClientService = (function () {
    function ClientService(repository) {
        var _this = this;
        this.repository = repository;
        this.getById = function (request) {
            return _this.repository.getById(request.data)
                .map(function (client) { return { entity: client }; });
        };
        this.get = function (request) {
            return _this.repository.get({ skip: request.skip, limit: request.limit })
                .map(function (clients) { return {
                entities: clients,
                skip: request.skip,
                limit: request.limit,
            }; });
        };
        this.add = function (request) {
            return _this.repository.add(request.data)
                .map(function (client) { return { entity: client }; });
        };
        this.update = function (request) {
            return _this.repository.update(request.data)
                .map(function (client) { return { entity: client }; });
        };
    }
    ;
    return ClientService;
}());
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map