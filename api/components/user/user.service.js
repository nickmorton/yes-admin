"use strict";
var UserService = (function () {
    function UserService(repository) {
        var _this = this;
        this.repository = repository;
        this.getById = function (request) {
            return _this.repository.getById(request.data)
                .map(function (user) { return { entity: user }; });
        };
        this.get = function (request) {
            return _this.repository.get({ skip: request.skip, limit: request.limit })
                .map(function (users) { return {
                entities: users,
                skip: request.skip,
                limit: request.limit,
            }; });
        };
        this.add = function (request) {
            return _this.repository.add(request.data)
                .map(function (user) { return { entity: user }; });
        };
        this.update = function (request) {
            return _this.repository.update(request.data)
                .map(function (user) { return { entity: user }; });
        };
    }
    ;
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map