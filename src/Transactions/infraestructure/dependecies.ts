// import { BalanceService } from "../application/services/balanceService";
// import { balanceToAdmin } from "../application/use_cases/balance/balanceToAdmin";
// import { createPendingWithdraw } from "../application/use_cases/orinoco/createPendingWithdraw";
// import { ColibriService } from "../application/services/colibriService";
// import { OrinocoService } from "../application/services/orinocoService";
// import { updateToAcceptedOrder } from "../application/use_cases/colibri/updateToAcceptedOrder";
// import { createPendingDeposit } from "../application/use_cases/orinoco/createDepositPending";
import { MongodbConnector } from "./adagters/mongodbConnector";
import { ConnectStorage } from "./adagters/connector";
import { MysqlConnector } from "./adagters/mysqlConnector";
import { AuthenticationBot } from "../application/use_cases/auth";
import { botBTC } from "../application/services/botBTC";
import { QueryDepositOperations } from "../application/use_cases/Operations/queryDepositOperations";
import { QueryWithdrawOperations } from "../application/use_cases/Operations/queryWithdrawOperations";
import { UpdateToAccepted } from "../application/use_cases/Operations/updateToAccepted";
import { UpdateToConfirmed } from "../application/use_cases/Operations/updateToConfirmed";
import { UpdateToComplete } from "../application/use_cases/Operations/updateToComplete";
import { checkBotLiquidity } from "../application/use_cases/Operations/checkBotLiquidity";
// import { checkUsersBalances } from "../application/use_cases/balance/checkUsersBalances";


export const botService = new botBTC(
    new AuthenticationBot(),
    new QueryWithdrawOperations(),
    new QueryDepositOperations(),
    new UpdateToAccepted(),
    new UpdateToConfirmed(),
    new UpdateToComplete(),
    new checkBotLiquidity()

);

export const initDataBaseConnect = new ConnectStorage(
    new MongodbConnector(),
    // new MysqlConnector(),
);

