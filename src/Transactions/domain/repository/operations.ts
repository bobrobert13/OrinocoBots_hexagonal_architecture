import { botAuthType } from "./botAuth"
import { updateOrderType } from "./Iorder"

export interface WithdrawOperation {
    btcWithdrawOperations(data: botAuthType): Promise<any>
}
export interface DepositOperation {
    btcDespositOperations(): Promise<any>
}

export interface updateOrder {
    update(data: botAuthType, paramsUpdate: updateOrderType): Promise<any>;
}

export interface botLiquidityRepository {
    checkBotLiquidity(params: object): Boolean;
}