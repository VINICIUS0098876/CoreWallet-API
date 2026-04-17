// Isto diz ao Jest: "Quando alguém pedir o Prisma, não vás ao ficheiro real"
// Assim, ele nunca vai tentar ler o 'import mariadb' que está a dar erro.
jest.mock('../prisma', () => ({
  __esModule: true,
  default: {
    $connect: jest.fn().mockResolvedValue(null),
    $disconnect: jest.fn().mockResolvedValue(null),
    user: {
      findMany: jest.fn().mockResolvedValue([]),
      findUnique: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockResolvedValue({}),
    },
    // Adiciona aqui outros modelos (wallet, etc) se os teus testes usarem
  },
}));