'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var validator_base_1 = require('../lib/validator-base');
var validation_rule_factory_1 = require('../lib/validation-rule-factory');
;
var ClientValidator = (function (_super) {
    __extends(ClientValidator, _super);
    function ClientValidator() {
        _super.call(this, [
            {
                propertyName: 'surname', rules: [
                    validation_rule_factory_1.ValidationRuleFactory.required(),
                    validation_rule_factory_1.ValidationRuleFactory.maxLength(32),
                ],
            },
        ]);
    }
    ;
    ClientValidator.prototype.validate = function (entity) {
        return _super.prototype.validate.call(this, entity);
    };
    return ClientValidator;
}(validator_base_1.ValidatorBase));
exports.ClientValidator = ClientValidator;
;
//# sourceMappingURL=client.js.map