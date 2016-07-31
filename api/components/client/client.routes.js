"use strict";
var client_repository_1 = require('./client.repository');
var client_service_1 = require('./client.service');
var client_1 = require('../../../public/shared/models/client');
var lazy_1 = require('../../lib/lazy');
require('rxjs/rx');
function register(app, config) {
    var baseUrl = '/api/clients';
    var service = new lazy_1.Lazy(function () { return new client_service_1.ClientService(new client_repository_1.ClientRepository(config, new client_1.ClientValidator())); });
    app
        .get(baseUrl + "/:id", function (req, res) {
        service.instance.getById({ data: req.params.id }).subscribe(function (response) { return res.json(response); });
    })
        .post(baseUrl, function (req, res) {
        service.instance.get(req.body).subscribe(function (response) { return res.json(response); });
    })
        .post("" + baseUrl, function (req, res) {
        service.instance.add(req.body).subscribe(function (response) { return res.json(response); });
    })
        .put("" + baseUrl, function (req, res) {
        service.instance.update(req.body).subscribe(function (response) { return res.json(response); });
    });
}
exports.register = register;
;
//# sourceMappingURL=client.routes.js.map