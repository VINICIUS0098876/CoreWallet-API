import { z } from "zod";

export const userSchema = z.object({
  name_user: z
    .string()
    .min(3, "O nome é obrigatório e deve conter pelo menos 3 caracteres"),
  email: z.string().email("O email é obrigatório e deve ser válido"),
  cpf: z
    .string()
    .regex(/^\d{11}$/, "O CPF é obrigatório e deve conter apenas números"),
  password_user: z
    .string()
    .min(6, "A senha é obrigatória e deve conter pelo menos 6 caracteres"),
});

// Para atualização, todos os campos são opcionais
// O partial() torna todos os campos do schema opcionais, permitindo que o usuário atualize apenas os campos desejados
export const updateUserSchema = userSchema.partial();

export type CreateUserInput = z.infer<typeof userSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
