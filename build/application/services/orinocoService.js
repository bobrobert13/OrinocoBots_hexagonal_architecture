"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrinocoService = void 0;
var OrinocoService = /** @class */ (function () {
    function OrinocoService(createPendingWithdraw, createDepositPending) {
        this.createPendingWithdraw = createPendingWithdraw;
        this.createDepositPending = createDepositPending;
        this._createPendingWithdraw = this.createPendingWithdraw;
        this._createDepositPending = this.createDepositPending;
    }
    return OrinocoService;
}());
exports.OrinocoService = OrinocoService;
