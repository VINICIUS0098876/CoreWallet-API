import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import * as mariadb from "mariadb";

// Na versão 2.5.5, o createPool funciona exatamente igual
const pool = mariadb.createPool(process.env.DATABASE_URL!);
const adapter = new PrismaMariaDb(pool as any);
const prisma = new PrismaClient({ adapter });

export default prisma;