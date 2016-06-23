'use strict';
var AuthenticationGuard = (function () {
    function AuthenticationGuard() {
    }
    AuthenticationGuard.prototype.canActivate = function () {
        return true;
    };
    ;
    return AuthenticationGuard;
}());
exports.AuthenticationGuard = AuthenticationGuard;
//# sourceMappingURL=authentication.guard.js.map