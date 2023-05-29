import axios from 'axios';
import { botAuthType } from '../../../domain/repository/botAuth';
import { updateOrderType } from '../../../domain/repository/Iorder'
import { updateOrder } from '../../../domain/repository/operations'
import { config } from '../../../infraestructure/config';

export class UpdateToConfirmed implements updateOrder {
    async update(data: botAuthType, paramsUpdate: updateOrderType): Promise<any> {
        console.log("_UPDATING_TO_CONFIRMED_", paramsUpdate);

        const bodyGraphql = {
            query: `
            mutation UpdateTransactionUC($data: TransactionInput) {
                UpdateTransactionUC(data: $data){
                    id
                    status{value}
                    trxType
                    type
                    coinInternal
                    fromSteemitUser
                    amountFiatColibri
                    amountCrypto
                    amountInternal
                    amountFiat
                }
                }
            `,
            variables: {
                "data": {
                    "transactionId": `${paramsUpdate.transactionId}`,
                    "status": `${paramsUpdate.status}`,
                    "reason": "",
                    "justification": "",
                    "confirmationCode": "200999399",
                    "transferenceOtherBank": false,
                    "action": "",
                    "userSteemit": ""
                }
            }
        };

        await axios.post(config.orinocoGraphql.url, bodyGraphql, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${data}`
            }
        }).then(response => {
            console.log("_RESPONSE_UPDATING_", response.data.data);
            // btcOrder = response.data.data.Login.token.code;
            // console.log("_RESPONSE USER__", response.data.data.Login.user);
        }).catch(error => {
            console.error(error);
        });


    }
}