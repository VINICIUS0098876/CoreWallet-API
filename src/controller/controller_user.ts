import { Request, Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import {
  UserService,
  FindAllUsersService,
  FindUserByIdService,
  UpdateUserService,
  DeleteUserService,
  LoginUserService,
} from "../service/user";
import {
  SUCCESS_CREATED_ITEM,
  SUCCESS_DELETED_ITEM,
  SUCCESS_LOGIN_ITEM,
  SUCCESS_UPDATED_ITEM,
  SUCCESS_GET_ITEMS,
  SUCCESS_GET_ITEM,
} from "../utils/message";
import {
  ERROR_INTERNAL_SERVER,
  ERROR_INVALID_ID,
  ERROR_REQUIRED_FIELDS,
} from "../utils/message";
import { AppError } from "../errors/AppError";
import { userSchema } from "../schemas/userSchema";

const userService = new UserService();
const findAllUsersService = new FindAllUsersService();
const findUserByIdService = new FindUserByIdService();
const updateUserService = new UpdateUserService();
const deleteUserService = new DeleteUserService();
const loginUserService = new LoginUserService();

export class UserController {
  async handle(req: Request, res: Response) {
    try {
      const data = userSchema.parse(req.body);

      const user = await userService.execute(data);

      return res
        .status(201)
        .json({ message: SUCCESS_CREATED_ITEM, data: user });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: ERROR_INTERNAL_SERVER });
    }
  }
}

export class FindAllUsersController {
  async handle(req: Request, res: Response) {
    try {
      const users = await findAllUsersService.execute();

      return res.status(200).json({ message: SUCCESS_GET_ITEMS, data: users });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: ERROR_INTERNAL_SERVER });
    }
  }
}

export class FindUserByIdController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: ERROR_INVALID_ID });
      }

      const user = await findUserByIdService.execute(Number(id));

      return res.status(200).json({ message: SUCCESS_GET_ITEM, data: user });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: ERROR_INTERNAL_SERVER });
    }
  }
}

export class LoginUserController {
  async handle(req: Request, res: Response) {
    try {
      const { email, password_user } = req.body;

      if (!email || !password_user) {
        return res.status(400).json({ message: ERROR_REQUIRED_FIELDS });
      }

      const login = await loginUserService.execute(email, password_user);

      return res.status(200).json({ message: SUCCESS_LOGIN_ITEM, data: login });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: ERROR_INTERNAL_SERVER });
    }
  }
}

export class UpdateUserController {
  async handle(req: AuthRequest, res: Response) {
    try {
      const { id } = req.params;
      const data = userSchema.partial().parse(req.body);

      if (!id) {
        return res.status(400).json({ message: ERROR_INVALID_ID });
      }

      const updateUser = await updateUserService.execute(Number(id), data);

      return res
        .status(200)
        .json({ message: SUCCESS_UPDATED_ITEM, data: updateUser });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: ERROR_INTERNAL_SERVER });
    }
  }
}

export class DeleteUserController {
  async handle(req: AuthRequest, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: ERROR_INVALID_ID });
      }

      const deleteUser = await deleteUserService.execute(Number(id));

      return res
        .status(200)
        .json({ message: SUCCESS_DELETED_ITEM, data: deleteUser });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: ERROR_INTERNAL_SERVER });
    }
  }
}
