import { PrismaClient } from "@prisma/client/extension";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const prisma = new PrismaClient({
  // No Prisma 7, passamos o adaptador aqui se a URL não estiver no schema
  adapter: new PrismaMariaDb(process.env.DATABASE_URL!),
});

export default prisma;