type configuration = {
    orinocoGraphql: {
        url: string
    },
    serverConfig: {
        port: number
    },
    dbs: {
        url: string
    },
    botConfig: {
        admittedBotCoin: string,
        botLiquidity: number,
    }
}
export const config: configuration = {
    orinocoGraphql: {
        url: 'http://localhost:3000/graphql'
    },
    serverConfig: {
        port: 4040
    },
    dbs: {
        url: 'mongodb://127.0.0.1:27017/orinocodev'
    },
    botConfig: {
        admittedBotCoin: "BTC",
        botLiquidity: 200
    }
}
