import { storeConnector } from "../../domain/repository/storeConnector";

export class MysqlConnector implements storeConnector {
    async establishConnection(params: string): Promise<any> {
        console.log("BUSCANDO CONEXION CON MYSQL");
    }
}