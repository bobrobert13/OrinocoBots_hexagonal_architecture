"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColibriService = void 0;
var ColibriService = /** @class */ (function () {
    function ColibriService(updateOrderToAccept) {
        this.updateOrderToAccept = updateOrderToAccept;
        //como mejor practica sirvo las injecciones de dependicias para la infraestructura.
        this._updateOrderToAccept = this.updateOrderToAccept;
    }
    return ColibriService;
}());
exports.ColibriService = ColibriService;
