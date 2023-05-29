import { botLiquidityRepository } from "../../../domain/repository/operations";
import { config } from "../../../infraestructure/config";

export class checkBotLiquidity implements botLiquidityRepository {
    checkBotLiquidity(params: { liquidity: number }): Boolean {
        console.log("REVISANDO_DISPONIBILIDAD_DE_FONDOS");
        if (params.liquidity > config.botConfig.botLiquidity) {
            console.log("SIN_FONDOS");
            return false;
        } else {
            console.log("FONDOS_DISPONIBLES");
            return true;
        }
    }
}