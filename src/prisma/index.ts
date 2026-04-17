import { PrismaClient } from "@prisma/client"; // Mudamos para o import padrão
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import * as mariadb from "mariadb";

// 1. Criamos a piscina de conexões (Obrigatorio no Prisma 7)
const pool = mariadb.createPool(process.env.DATABASE_URL!);

// 2. Criamos o adaptador usando a piscina
const adapter = new PrismaMariaDb(pool as any);

// 3. Iniciamos o Prisma com esse adaptador
const prisma = new PrismaClient({ adapter });

export default prisma;