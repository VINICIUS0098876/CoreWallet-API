import prismaClient from "../prisma/index";
import { AppError } from "../errors/AppError";
import { Prisma } from "../generated/prisma/client";

export class CreateTransactionService{
    async execute(id_user: number, id_wallet_destination: number, value_transiction: number){

        // Aqui ocorre a busca pela carteira do usuario que esta fazendo o (PIX)
        const myWallet = await prismaClient.wallets.findFirst({
            where: {
                id_user: id_user
            }
        })

        if(!myWallet){
            throw new AppError(404, "Carteira do usuário não encontrada");
        }

        // Aqui é aonde ocorre a definição da carteira de origem, que é a carteira do usuário que esta fazendo o (PIX)
        const id_wallet_origin = myWallet.id_wallet

        if(id_wallet_origin === id_wallet_destination){
            throw new AppError(400, "Não é possível transferir para a mesma carteira");
        }
        
        if(value_transiction <= 0){
            throw new AppError(400, "Valor da transação deve ser maior que zero");
        }

        const wallet = await prismaClient.wallets.findUnique({
            where: {
                id_wallet: id_wallet_origin
            }
        })

        if(!wallet){
            throw new AppError(404, "Carteira de origem não encontrada");
        }

        const walletDestiny = await prismaClient.wallets.findUnique({
            where: {
                id_wallet: id_wallet_destination
            }
        })

        if(!walletDestiny){
            throw new AppError(404, "Carteira de destino não encontrada");
        }

        if(Number(wallet.balance) < value_transiction){
            throw new AppError(400, "Saldo insuficiente para realizar a transação");
        }


        // Aqui ocorre a transação atômica que garante que caso uma das operações falhe, todas as outras operações são revertidas, mantendo a integridade dos dados.
        // O "tx" é o objeto da transação que é passado para cada operação dentro do bloco $transaction, garantindo que todas as operações sejam executadas como parte da mesma transação.
        const transiction = await prismaClient.$transaction(async (tx) => {
            await tx.wallets.update({
                where: { id_wallet: id_wallet_origin },
                data: {
                    balance: {
                        // Aqui é aonde ocorre a funcão de subtrair o valor da carteira de quem esta fazendo a transição
                        decrement: new Prisma.Decimal(value_transiction)
                    }
                }
            })

            await tx.wallets.update({
                where: { id_wallet: id_wallet_destination },
                data: {
                    balance: {
                        // Aqui é aonde ocorre a função de adicionar o valor na carteira de quem está recebendo a transição
                        increment: new Prisma.Decimal(value_transiction)
                    }
                }
            })

            // Aqui é aonde ocorre a criação do registro da transação.
           const comprovante = await tx.transictions.create({
                data: {
                    id_wallet_origin,
                    id_wallet_destination,
                    value_transiction
                }
            })

            // Aqui retorna o comprovante da transação.
            return comprovante;
        })

        
        return transiction;


    }
}

export class GetExtractTransictionService{
    async execute(id_user: number){
        // Aqui ocorre a busca pela carteira do usuario que esta solicitando o extrato, para que seja possível buscar todas as transações relacionadas a essa carteira, seja como carteira de origem ou carteira de destino.
        const myWallet = await prismaClient.wallets.findFirst({
            where: {
                id_user: id_user
            }
        })

        if(!myWallet){
            throw new AppError(404, "Carteira do usuário não encontrada");
        }

        // Aqui é aonde ocorre a definição da carteira do usuário, que é utilizada para buscar todas as transações relacionadas a essa carteira, seja como carteira de origem ou carteira de destino.
        const myWalletId = myWallet.id_wallet;

        const extract = await prismaClient.transictions.findMany({
            where: {
                // Aqui é aonde ocorre a busca por todas as transações que envolvem a carteira do usuário, seja como carteira de origem ou carteira de destino. O operador OR é utilizado para garantir que todas as transações relacionadas à carteira do usuário sejam incluídas no extrato.
                OR: [
                    { id_wallet_origin: myWalletId },
                    { id_wallet_destination: myWalletId }
                ]
            },
            orderBy: {
                // Aqui é aonde ocorre a ordenação do extrato, onde as transações mais recentes aparecem primeiro.
                    date_time: "desc"
            }
        })

        return extract;
    }
}