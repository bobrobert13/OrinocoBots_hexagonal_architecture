"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositFiat = void 0;
var DepositFiat = /** @class */ (function () {
    function DepositFiat() {
    }
    DepositFiat.prototype.createOrder = function (order) {
        console.log("MAKE DEPOSIT ORDER :)");
        return order;
    };
    return DepositFiat;
}());
exports.DepositFiat = DepositFiat;
