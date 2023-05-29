export interface Iorder {
    type: String,
    amountIn: Number,
    amountOut: Number,
    tax: Number,
    walletId: String,
    pin: String,
    tfa: String
}

export type updateOrderType = {
    transactionId: string,
    status: string,
    reason?: string,
    justification?: string,
    confirmationCode?: string,
    file?: string,
    transferenceOtherBank?: string,
    action?: string,
    userSteemit?: string
}