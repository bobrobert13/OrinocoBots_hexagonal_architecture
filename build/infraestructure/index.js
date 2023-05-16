"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dependecies_1 = require("./dependecies");
//data recibida desde resolvers o mook example.
var ordenRetiro = {
    numero: 1,
    type: "retiro"
};
var ordenDeposito = {
    numero: 2,
    type: "deposito"
};
dependecies_1.initOrinocoService._createPendingWithdraw.createOrder(ordenRetiro);
dependecies_1.initBalanceService._balanceToAdmin.createBalance("001", "002");
dependecies_1.initColibriService._updateOrderToAccept.updateOrder(ordenDeposito);
