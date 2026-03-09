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

const findWalletByIdService = new FindWalletByIdService()
const depositWalletService = new DepositWalletService()

export class FindWalletByIdController{
    async handle(req: AuthRequest, res: Response){
        try {
            const id_wallet = Number(req.params.id_wallet);

            const wallet = await findWalletByIdService.execute(id_wallet)

            return res.status(200).json({ message: SUCCESS_GET_ITEM, data: wallet });

        } catch (error) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ message: error.message });
            }
            console.error(error);
            return res.status(500).json({ message: ERROR_INTERNAL_SERVER });
        }
    }
}

export class DepositWalletController{
    async handle(req: AuthRequest, res: Response){
        try {
            const id_user = Number(req.params.id_user);
            const { amount } = req.body

            const wallet = await depositWalletService.execute(id_user, amount)

            return res.status(200).json({ message: SUCCESS_UPDATED_ITEM, data: wallet });

        } catch (error) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ message: error.message });
            }
            console.error(error);
            return res.status(500).json({ message: ERROR_INTERNAL_SERVER });
        }
    }
}