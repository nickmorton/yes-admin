"use strict";
var ClientService = (function () {
    function ClientService(repository) {
        var _this = this;
        this.repository = repository;
        this.getById = function (id) {
            return _this.repository.getById(id);
        };
        this.getAll = function () {
            return _this.repository.getAll();
        };
        this.add = function (client) {
            return _this.repository.add(client);
        };
        this.update = function (client) {
            return _this.repository.update(client);
        };
    }
    ;
    return ClientService;
}());
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map