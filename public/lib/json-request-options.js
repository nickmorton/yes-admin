'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var http_1 = require('@angular/http');
var JsonRequestOptions = (function (_super) {
    __extends(JsonRequestOptions, _super);
    function JsonRequestOptions() {
        _super.call(this);
        this.headers.append('Accept', 'application/json');
        this.headers.append('Accept', 'text/plain');
        this.headers.append('Accept', '*/*');
        this.headers.append('Content-Type', 'application/json');
    }
    ;
    return JsonRequestOptions;
}(http_1.BaseRequestOptions));
exports.JsonRequestOptions = JsonRequestOptions;
//# sourceMappingURL=json-request-options.js.map