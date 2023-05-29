import { botAuth } from "../../domain/repository/botAuth";
import { botRespository } from "../../domain/repository/botRepository";
import { botLiquidityRepository, DepositOperation, updateOrder, WithdrawOperation } from "../../domain/repository/operations";

export class botBTC {
    constructor(
        private readonly auth: botAuth,
        private readonly getWithdrawOperations: WithdrawOperation,
        private readonly getDepositOperations: DepositOperation,
        private readonly UpdateToAcceptedOrder: updateOrder,
        private readonly UpdateToConfirmedOrder: updateOrder,
        private readonly UpdateToCompleteOrder: updateOrder,
        private readonly checkLiquidityBot: botLiquidityRepository,
        private readonly scannerBtcOrders: botRespository,

    ) { }

    _auth = this.auth;
    _getWithdrawOperations = this.getWithdrawOperations;
    _getDepositOperations = this.getDepositOperations;
    _UpdateToAcceptedOrder = this.UpdateToAcceptedOrder;
    _UpdateToConfirmedOrder = this.UpdateToConfirmedOrder;
    _UpdateToCompleteOrder = this.UpdateToCompleteOrder;
    _checkLiquidityBot = this.checkLiquidityBot;
    _scannerBtcOrders = this.scannerBtcOrders;
}