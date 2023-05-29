export interface storeConnector {
    establishConnection(params: string): Promise<any>
}