"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPendingOrder = void 0;
var createPendingOrder = /** @class */ (function () {
    function createPendingOrder() {
    }
    createPendingOrder.prototype.createOrder = function (order) {
        console.log("ORDER PENDING READY ", order);
        return order;
    };
    return createPendingOrder;
}());
exports.createPendingOrder = createPendingOrder;
