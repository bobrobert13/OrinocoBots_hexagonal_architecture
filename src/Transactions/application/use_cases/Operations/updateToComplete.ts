import { botAuthType } from '../../../domain/repository/botAuth';
import { updateOrderType } from '../../../domain/repository/Iorder'
import { updateOrder } from '../../../domain/repository/operations'

export class UpdateToComplete implements updateOrder {
    async update(data: botAuthType, paramsUpdate: updateOrderType): Promise<any> {
        console.log("_UPDATING_TO_COMPLETE");
    }
}