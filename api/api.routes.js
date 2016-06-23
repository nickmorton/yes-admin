"use strict";
var clients = require('./components/client/client.routes');
function register(app, config) {
    app
        .get('/*', function (req, res, next) {
        res.contentType('application/json');
        next();
    })
        .post('/*', function (req, res, next) {
        res.contentType('application/json');
        next();
    })
        .put('/*', function (req, res, next) {
        res.contentType('application/json');
        next();
    })
        .delete('/*', function (req, res, next) {
        res.contentType('application/json');
        next();
    });
    clients.register(app, config);
}
exports.register = register;
;
//# sourceMappingURL=api.routes.js.map