import prismaClient from "../prisma/index";
import bcrypt from "bcryptjs";
import { BCRYPT_SALT_ROUNDS, SUCCESS_DELETED_ITEM } from "../utils/message";
import { TokenJwt } from "../middleware/JWTMiddleware";
import { CreateUserInput, UpdateUserInput} from "../schemas/userSchema";
import { AppError } from "../errors/AppError";
import prisma from "../prisma/index";
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

export class UserService {
  async execute(data: CreateUserInput) {
    const verifyUser = await prismaClient.users.findFirst({
      where: {
        OR: [{ email: data.email }, { cpf: data.cpf }],
      },
    });

    if (verifyUser) {
      throw new AppError(409, "Email ou CPF já cadastrado");
    }

    const hashedPassword = await bcrypt.hash(
      data.password_user,
      BCRYPT_SALT_ROUNDS,
    );

    const user = await prismaClient.users.create({
      data: {
        name_user: data.name_user,
        cpf: data.cpf,
        email: data.email,
        password_user: hashedPassword,
        // Ao criar um usuário, também criamos uma carteira associada a ele com saldo inicial de 0.00
        wallets: {
          create: {
            balance: 0.0,
          },
        },
      },
    });

    return excludePassword(user);
  }
}

export class FindAllUsersService{
    async execute(){
        const users = await prismaClient.users.findMany({
            include: {
                wallets: true
            }
        })

        if(users.length === 0){
            throw new AppError(404, 'Nenhum usuário encontrado')
        }

        // Ao retornar a lista de usuários, excluímos a senha de cada um para garantir a segurança dos dados
        return users.map((user: any) => excludePassword(user))
    }
}

export class FindUserByIdService {
    async execute(id_user: number) {
        const user = await prismaClient.users.findUnique({
            where: { id_user},
            include: {
                wallets: true
            }
        })

        if(!user){
            throw new AppError(404, 'Usuário não encontrado')
        }

        return excludePassword(user)
    }
}

export class UpdateUserService {
    async execute(id_user: number, data: Partial<UpdateUserInput>) {
        const user = await prismaClient.users.findUnique({
            where: { id_user}
        })

        if(!user){
            throw new AppError(404, 'Usuário não encontrado')
        }

        if(data.password_user){
            data.password_user = await bcrypt.hash(
                data.password_user,
                BCRYPT_SALT_ROUNDS,
            );
        }

        const updateUser = await prismaClient.users.update({
            where: { id_user},
            data: {
                name_user: data.name_user,
                cpf: data.cpf,
                email: data.email,
                password_user: data.password_user,
            }
        })

        return excludePassword(updateUser)
}
}

export class DeleteUserService {
    async execute(id_user: number) {
        const user = await prismaClient.users.findUnique({
            where: { id_user }
        })

        if(!user){
            throw new AppError(404, 'Usuário não encontrado')
        }

        // Transação Interativa - Aqui fazemos uma condição dentro de $transiction para verificar se a carteira associada ao usuário possui saldo antes de permitir a exclusão do usuário e da carteira. Se a carteira tiver saldo, a operação é negada e uma mensagem de erro é retornada.
        await prismaClient.$transaction(async (tx: any) => {
            const wallet = await tx.wallets.findFirst({
                where: { id_user}
            })

            if(!wallet){
                throw new AppError(404, 'Carteira associada ao usuário não encontrada')
            }

            if(Number(wallet.balance) > 0){
                throw new AppError(400, 'Operação negada: A conta ainda possui saldo e não pode ser encerrada.')
            }

            await tx.transictions.deleteMany({
                where:{
                    OR: [
                        { id_wallet_origin: wallet.id_wallet },
                        { id_wallet_destination: wallet.id_wallet }
                    ]
                }
            })

            await tx.wallets.delete({
                where: { id_user: id_user }
            })

            await tx.users.delete({
                where: { id_user: id_user }
            })
        })
    }
}

export class LoginUserService{
    async execute(email: string, password_user: string) {
        const user = await prismaClient.users.findUnique({
            where: { email}
        })

        if(!user){
            throw new AppError(404, 'Usuário não encontrado')
        }

        const isPasswordValid = await bcrypt.compare(password_user, user.password_user)

        if(!isPasswordValid){
            throw new AppError(401, 'Credenciais inválidas')
        }

        const token = TokenJwt.generateToken(user.id_user)

        return {
            user: {
                id_user: user.id_user,
                name_user: user.name_user,
                cpf: user.cpf,
                email: user.email,
            },
            token
            }
        }
}