import { Request, Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import { DepositWalletService, FindWalletByIdService } from "../service/wallet";
import {
  SUCCESS_UPDATED_ITEM,
  SUCCESS_GET_ITEM,
} from "../utils/message";
import {
  ERROR_INTERNAL_SERVER
} from "../utils/message";
import { AppError } from "../errors/AppError";
import { CreateTransactionService, GetExtractTransictionService } from "../service/transiction";

const createTransictionService = new CreateTransactionService();
const getExtractTransictionService = new GetExtractTransictionService();

export class CreateTransictionController{
    async handle(req: AuthRequest, res: Response){
        try {
            const id_user = Number(req.userId);
            const {id_wallet_destination, value_transiction} = req.body;

            if(!id_wallet_destination || !value_transiction){
                throw new AppError(400, "Parâmetros inválidos");
            }

            const transiction = await createTransictionService.execute(id_user, id_wallet_destination, value_transiction);

            return res.status(200).json({message: SUCCESS_UPDATED_ITEM, data: transiction});

        } catch (error) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ message: error.message });
            }
            console.error("Erro ao criar transação:", error);
            return res.status(500).json({ message: ERROR_INTERNAL_SERVER });
        }
    }
}

export class GetExtractController{
    async handle(req: AuthRequest, res: Response){
        try {
            const id_user = Number(req.userId);

        const extract = await getExtractTransictionService.execute(id_user);

        return res.status(200).json({message: SUCCESS_GET_ITEM, data: extract});
        } catch (error) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ message: error.message });
            }
            console.error("Erro ao buscar extrato:", error);
            return res.status(500).json({ message: ERROR_INTERNAL_SERVER });
        }
        
    }
}