"use strict";
;
;
;
;
var ValidatorBase = (function () {
    function ValidatorBase(propertyRules) {
        this.propertyRules = propertyRules;
        this.brokenRules = [];
    }
    ;
    ValidatorBase.prototype.validate = function (entity) {
        var _this = this;
        this.propertyRules.forEach(function (propertyRule) {
            var failedMessages = new Array();
            propertyRule.rules.forEach(function (rule) {
                if (!rule.validate(entity, propertyRule.propertyName)) {
                    failedMessages.push(rule.failedMessage);
                }
            });
            if (failedMessages.length > 0) {
                _this.brokenRules.push({
                    propertyName: propertyRule.propertyName,
                    failedMessages: failedMessages,
                });
            }
        });
        return this.brokenRules.length === 0;
    };
    ;
    return ValidatorBase;
}());
exports.ValidatorBase = ValidatorBase;
//# sourceMappingURL=validator-base.js.map