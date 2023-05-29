import axios from 'axios';
import { updateOrderType } from '../../../domain/repository/Iorder'
import { updateOrder } from '../../../domain/repository/operations'
import { config } from '../../../infraestructure/config';
import { botAuthType } from '../../../domain/repository/botAuth';

export class UpdateToAccepted implements updateOrder {
    async update(data: botAuthType, paramsUpdate: updateOrderType): Promise<any> {
        console.log("_UPDATING_TO_ACCEPTED_", paramsUpdate.status, paramsUpdate.transactionId);

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
                    "confirmationCode": "",
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
            console.log("_RESPONSE UPDATING_", response.data.data);
        }).catch(error => {
            throw 'ERROR_REQUEST';
        });
        let order = paramsUpdate;
        return {
            order,
            update: true
        };
    }
}