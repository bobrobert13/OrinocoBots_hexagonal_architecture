"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.balanceToAdmin = void 0;
var balanceToAdmin = /** @class */ (function () {
    function balanceToAdmin() {
    }
    balanceToAdmin.prototype.createBalance = function (user1Id, user2Id, user3Id) {
        console.log("Transfer balance from ".concat(user1Id, " to ").concat(user2Id, " "));
        return true;
    };
    return balanceToAdmin;
}());
exports.balanceToAdmin = balanceToAdmin;
