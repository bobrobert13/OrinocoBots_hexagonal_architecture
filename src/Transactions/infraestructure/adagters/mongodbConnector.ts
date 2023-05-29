import mongoose from 'mongoose';
import { storeConnector } from "../../domain/repository/storeConnector";

export class MongodbConnector implements storeConnector {
    async establishConnection(params: string): Promise<any> {
        return await mongoose.connect(params)
            .then(() => {
                console.log("MONGODB READY.");

            }).catch(() => {
                throw 'ERROR-CONNECT-TO-DATABASE-MONGODB';
            })

    }
}