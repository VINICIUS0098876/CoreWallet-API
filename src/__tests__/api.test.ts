jest.mock('../prisma/index', () => ({
  __esModule: true,
  default: {
    $connect: jest.fn(),
    user: { findMany: jest.fn().mockResolvedValue([]) }
  }
}), { virtual: true });

import request from "supertest";
import { describe, it, expect } from "@jest/globals";
import { app } from "../server";

// describe -> Ele é usado para agrupar testes relacionados, ou seja, para organizar os testes em blocos que fazem sentido juntos.
// it -> Ele é usado para definir um teste em especifico, ou seja, para descrever o comportamento esperado de uma funcionalidade específica da aplicação.
// expect -> Ele é usado para fazer asserções sobre o resultado do teste, ou seja, para verificar se o resultado obtido corresponde ao resultado esperado.
describe("Testes de saúde da API", () => {
  it("Deve retornar status 200 para a rota de saúde", async () => {
    const response = await request(app).get("/");

    expect(response.status);
  });
});
