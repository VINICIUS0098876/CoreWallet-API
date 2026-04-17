import prismaClient from "../prisma/index";
import { AppError } from "../errors/AppError";
import { Prisma } from "@prisma/client";


interface SafeUser {
  id_user: number;
  name_user: string;
  cpf: string;
  email: string;
}

function excludePassword(user: {
  id_user: number;
  name_user: string;
  cpf: string;
  password_user: string;
  email: string;
}): SafeUser {
  const { password_user, ...safeUser } = user;
  return safeUser;
}

export class FindWalletByIdService {
    async execute(id_wallet: number) {
        // if (typeof id_wallet !== "number" || isNaN(id_wallet)) {
        //     throw new AppError(400, "ID da carteira inválido");
        // }
        const wallet = await prismaClient.wallets.findUnique({
            where: { id_wallet },
            include: {
                users: true
            }
        });
        if (!wallet) {
            throw new AppError(404, "Carteira não encontrada");
        }
        return wallet;
    }
}

export class DepositWalletService{
    async execute(id_user: number, amount: number){
        const wallet = await prismaClient.wallets.findUnique({
            where: { id_user }
        })

        if(!wallet){
            throw new AppError(404, 'Carteira não encontrada')
        }
        
        if(amount <= 0){
            throw new AppError(400, 'Valor de depósito deve ser maior que zero')
        }

        const updateWallet = await prismaClient.wallets.update({
            where: { id_user },
            data: {
                // increment é um operador do Prisma que incrementa o valor atual do campo balance com o valor fornecido
                balance: {
                    increment: new Prisma.Decimal(amount)
                }
            }
        })

        return updateWallet
    }
}