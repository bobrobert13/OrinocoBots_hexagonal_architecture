
import { botService } from "../dependecies";
import { botAuthType } from "../../domain/repository/botAuth";

export async function InitFlowWithdrawBtcBot() {
	const authCode: botAuthType = await botService._auth.Login();

	const btcOrders: [any] = await botService._getWithdrawOperations.btcWithdrawOperations(authCode);

	if (btcOrders.length > 0) {
		// HACEMOS COMPROBACIONES ANTES DE ACEPTAR UNA.
		// checkBotLiquidity solo devuelve un booleano: montoOrden > mookLiqBot
		if (await botService._checkLiquidityBot.checkBotLiquidity({ liquidity: btcOrders[0].amountCrypto })) {
			setTimeout(
				async () => {
					await botService._UpdateToAcceptedOrder.update(authCode, {
						transactionId: btcOrders[0].id, status: "accepted"
					}).then(async (operation) => {
						if (operation.update) {    // SI LA ACEPTAMOS PASAMOS AL FLUJO FAKE DE ESCANEOS ANTES DE CONFIRMAR.
							setTimeout(
								async () => {
									await botService._UpdateToConfirmedOrder.update(authCode, { transactionId: operation.order.transactionId, status: "confirmed" })
								},
								10000
							);
						}
					})
				}
				, 5000);
			//Convertir en una promesa para añadir los demas flujos.
		}
	} else {
		console.error("NO_SE_ENCONTRARON_ORDENES_BTC");
	}
}