import express, { Request, Response } from "express";
import bodyParser, { json } from "body-parser";
import cors from 'cors';
import { config } from "../config";
import { initDataBaseConnect } from "../dependecies";
import { InitFlowWithdrawBtcBot } from "./withdraw";


async function initServer() {
    await initDataBaseConnect._dataBaseConnect.establishConnection(config.dbs.url);
    await InitFlowWithdrawBtcBot();
    const app: any = express();
    app.use(cors({
        origin: '*'
    }));
    app.use(bodyParser.json());
    app.post("/order", async (req: Request, res: Response) => {
        res.send("OK.!");
        await InitFlowWithdrawBtcBot();
    });

    app.listen(config.serverConfig.port, () => {
        console.log(`Server listening at http://localhost:${config.serverConfig.port}`);
    });
}

initServer();
