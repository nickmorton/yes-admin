"use strict";
var Lazy = (function () {
    function Lazy(factory) {
        this.factory = factory;
    }
    ;
    Object.defineProperty(Lazy.prototype, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = this.factory();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Lazy;
}());
exports.Lazy = Lazy;
//# sourceMappingURL=lazy.js.map