"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initBalanceService = exports.initColibriService = exports.initOrinocoService = void 0;
var balanceService_1 = require("../application/services/balanceService");
var balanceToAdmin_1 = require("../application/use_cases/balanceToAdmin");
var createPendingWithdraw_1 = require("../application/use_cases/orinoco/createPendingWithdraw");
var colibriService_1 = require("../application/services/colibriService");
var orinocoService_1 = require("../application/services/orinocoService");
var updateToAcceptOrder_1 = require("../application/use_cases/colibri/updateToAcceptOrder");
var createDepositPending_1 = require("../application/use_cases/orinoco/createDepositPending");
exports.initOrinocoService = new orinocoService_1.OrinocoService(new createPendingWithdraw_1.createPendingWithdraw(), new createDepositPending_1.createPendingDeposit());
exports.initColibriService = new colibriService_1.ColibriService(new updateToAcceptOrder_1.updateToAcceptOrder());
exports.initBalanceService = new balanceService_1.BalanceService(new balanceToAdmin_1.balanceToAdmin());
