// import { initBalanceService, initColibriService, initDataBaseConnect, initOrinocoService } from "./dependecies";

//data recibida desde resolvers o mook example.
let ordenRetiro = {
    type: "withdraw_fiat",
    amountIn: 1,
    amountOut: 3,
    tax: 4,
    walletId: "029919",
    pin: "",
    tfa: ""
}

let ordenDeposito = {
    type: "deposit_fiat",
    amountIn: 2,
    amountOut: 2,
    tax: 4,
    walletId: "200399",
    pin: "",
    tfa: ""
}

// initDataBaseConnect._dataBaseConnect.establishConnection("");
// initBalanceService._checkUsersBalances.checkAvailableBalance("001");
// initOrinocoService._createPendingWithdraw.createOrder(ordenRetiro);
// initBalanceService._balanceToAdmin.createBalance("001", "002");
// initColibriService._updateOrderToAccept.updateOrder(ordenDeposito);

