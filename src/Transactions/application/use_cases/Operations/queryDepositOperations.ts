import { DepositOperation } from '../../../domain/repository/operations'


// SE DEBE CAMBIAR ESTO A UNA PROMESA DE VERDAD xd
export class QueryDepositOperations implements DepositOperation {
    async btcDespositOperations(): Promise<any> {
        console.log("BTC_DEPOSIT_ORDERS");
    }
}