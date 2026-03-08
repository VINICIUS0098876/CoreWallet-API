import { Router, Request, Response } from "express";
import { authMiddleware } from "./middleware/authMiddleware";
import {
  UserController,
  FindAllUsersController,
  FindUserByIdController,
  UpdateUserController,
  DeleteUserController,
  LoginUserController,
} from "./controller/controller_user";
const router = Router();

// USER CONTROLLER
const userController = new UserController();
const findAllUserController = new FindAllUsersController();
const findUserByIdController = new FindUserByIdController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const loginUserController = new LoginUserController();

/* =================================================================================== */

// WALLET CONTROLLER

/* =================================================================================== */

//  TRANSICTION CONTROLLER

/* =================================================================================== */

// ROUTES USERS

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags:
 *       - Usuários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name_user:
 *                 type: string
 *               cpf:
 *                 type: string
 *               email:
 *                 type: string
 *               password_user:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
router.post("/users", (req: Request, res: Response) =>
  userController.handle(req, res),
);
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags:
 *       - Usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get("/users", (req: Request, res: Response) =>
  findAllUserController.handle(req, res),
);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Busca usuário por ID
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/users/:id", (req: Request, res: Response) =>
  findUserByIdController.handle(req, res),
);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza usuário por ID
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name_user:
 *                 type: string
 *               cpf:
 *                 type: string
 *               email:
 *                 type: string
 *               password_user:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.put("/users/:id", authMiddleware, (req: Request, res: Response) =>
  updateUserController.handle(req, res),
);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove usuário por ID
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Usuário removido com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.delete("/users/:id", authMiddleware, (req: Request, res: Response) =>
  deleteUserController.handle(req, res),
);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login do usuário
 *     tags:
 *       - Usuários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password_user:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login", (req: Request, res: Response) =>
  loginUserController.handle(req, res),
);

// ROUTES WALLETS

// ROUTES TRANSICTIONS

export default router;
