"use strict";
var user_repository_1 = require('./user.repository');
var user_service_1 = require('./user.service');
var user_1 = require('../../../public/shared/models/user');
var lazy_1 = require('../../lib/lazy');
require('rxjs/rx');
function register(app, config) {
    var baseUrl = '/api/users';
    var service = new lazy_1.Lazy(function () { return new user_service_1.UserService(new user_repository_1.UserRepository(config, new user_1.UserValidator())); });
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
//# sourceMappingURL=user.routes.js.map