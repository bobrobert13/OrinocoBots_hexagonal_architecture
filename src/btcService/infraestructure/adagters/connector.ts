import { storeConnector } from "../../domain/repository/storeConnector";

export class ConnectStorage {
    constructor(
        private readonly dataBaseConnect: storeConnector
    ) {

    }
    _dataBaseConnect = this.dataBaseConnect;
} 