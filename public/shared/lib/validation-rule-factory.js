"use strict";
var ValidationRuleFactory = (function () {
    function ValidationRuleFactory() {
    }
    ValidationRuleFactory.required = function () {
        return {
            failedMessage: 'Value required',
            validate: function (entity, propertyName) {
                var value = entity[propertyName];
                return value !== undefined && value !== null && value !== '';
            },
        };
    };
    ;
    ValidationRuleFactory.maxLength = function (max) {
        return {
            failedMessage: "Maximum allowed length is " + max,
            validate: function (entity, propertyName) {
                var value = entity[propertyName];
                return value !== undefined && value !== null && value.length <= max;
            },
        };
    };
    ;
    return ValidationRuleFactory;
}());
exports.ValidationRuleFactory = ValidationRuleFactory;
//# sourceMappingURL=validation-rule-factory.js.map