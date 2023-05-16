"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPendingWithdraw = void 0;
var createPendingWithdraw = /** @class */ (function () {
    function createPendingWithdraw() {
    }
    createPendingWithdraw.prototype.createOrder = function (order) {
        console.log("Creando orden de retiro con status pendiente.", order);
        return order;
    };
    return createPendingWithdraw;
}());
exports.createPendingWithdraw = createPendingWithdraw;
