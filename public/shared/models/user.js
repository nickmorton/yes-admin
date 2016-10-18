"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require('../lib/index');
;
;
var UserValidator = (function (_super) {
    __extends(UserValidator, _super);
    function UserValidator() {
        _super.call(this, [
            {
                propertyName: 'name', rules: [
                    index_1.ValidationRuleFactory.required(),
                    index_1.ValidationRuleFactory.maxLength(64),
                ],
            },
        ]);
    }
    ;
    UserValidator.prototype.validate = function (entity) {
        return _super.prototype.validate.call(this, entity);
    };
    return UserValidator;
}(index_1.ValidatorBase));
exports.UserValidator = UserValidator;
;
//# sourceMappingURL=user.js.map