"use strict";
var colibriOperations = /** @class */ (function () {
    function colibriOperations(data, options) {
        this.data = data;
        this.options = options;
        console.log(this.data, this.options);
    }
    return colibriOperations;
}());
var colibriTransaction = new colibriOperations({ type: "retiro" }, { status: "pending" });
// colibriTransaction.manualFiat({}, {})
