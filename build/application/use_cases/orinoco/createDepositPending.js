"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPendingDeposit = void 0;
var createPendingDeposit = /** @class */ (function () {
    function createPendingDeposit() {
    }
    createPendingDeposit.prototype.createOrder = function (order) {
        console.log("Creando orden de deposito con status pendiente.", order);
        return order;
    };
    return createPendingDeposit;
}());
exports.createPendingDeposit = createPendingDeposit;
