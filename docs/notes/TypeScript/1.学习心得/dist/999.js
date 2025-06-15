var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var b = /** @class */ (function () {
    function b(a, b) {
        this.a = a;
        this.b = b;
    }
    return b;
}());
var c = /** @class */ (function (_super) {
    __extends(c, _super);
    function c(a, b, d) {
        var _this = _super.call(this, a) || this;
        _this.a = a;
        _this.b = b;
        _this.d = d;
        return _this;
    }
    return c;
}(b));
