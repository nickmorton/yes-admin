'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model_base_1 = require('./model-base');
;
var ClientValidator = (function (_super) {
    __extends(ClientValidator, _super);
    function ClientValidator() {
        _super.apply(this, arguments);
        this.rules = [];
    }
    ClientValidator.prototype.validate = function (entity) {
        return _super.prototype.validate.call(this, entity);
    };
    return ClientValidator;
}(model_base_1.ValidatorBase));
exports.ClientValidator = ClientValidator;
;
//# sourceMappingURL=client.js.map