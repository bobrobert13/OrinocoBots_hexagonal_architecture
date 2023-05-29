import { WithdrawOperation } from '../../../domain/repository/operations'
import { config } from '../../../infraestructure/config';
import axios from "axios";
import { botAuthType } from '../../../domain/repository/botAuth';

// SE DEBE CAMBIAR ESTO A UNA PROMESA DE VERDAD xd
export class QueryWithdrawOperations implements WithdrawOperation {
    async btcWithdrawOperations(data: botAuthType): Promise<any> {
        let btcOrder;
        console.log("__BTC_WITHDRAW_ORDERS__");
        const bodyGraphql = {
            query: `
            query allOperations($data: FilterBasicInput) {
                Transactions(data: $data){ 
                    transactions{
                        id
                        toCoin
                        fromIp
                        trxType
                        status{value}
                        bankAccount{bank{name}}
                        wallet{name}
                        amountCrypto
                    }

                }
              }
            `,
            variables: {
                "data": {
                    "module": "compra",
                    "coin": "BTC",
                    "status": "pending"
                }
            }
        };
        await axios.post(config.orinocoGraphql.url, bodyGraphql, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${data}`
            }
        }).then(response => {
            // console.log("_RESPONSE ORDERS_", response.data.data.Transactions);
            btcOrder = response.data.data.Transactions.transactions;
        }).catch(error => {
            console.error(error);
        });
        return btcOrder;

    }
}