'use strict';
var BaseComponent = (function () {
    function BaseComponent() {
        var _this = this;
        this.disposables = [];
        this.addForDisposal = function (subscription) {
            _this.disposables.push(subscription);
        };
    }
    BaseComponent.prototype.ngOnDestroy = function () {
        this.disposables.forEach(function (s) { return s.unsubscribe; });
    };
    ;
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map