import { botRespository } from "../../../domain/repository/botRepository";

export class ScannerBtcOrders implements botRespository {
    async botBtcScanner(): Promise<any> {
        console.log("CONSULTANDO_UTXOS");
    }
}