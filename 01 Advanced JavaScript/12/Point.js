var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function () {
    "use strict";
    var Point = (function () {
        function Point(x) {
            this.x = x;
        }
        Point.prototype.dump = function () {
            console.log(this.x);
        };
        return Point;
    })();
    var PointEx = (function (_super) {
        __extends(PointEx, _super);
        function PointEx(x, y) {
            var _this = this;
            _super.call(this, x);
            setTimeout(function () {
                console.log(_this.x);
            }, 1000);
        }
        return PointEx;
    })(Point);
})();
