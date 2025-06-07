import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Ingresa un correo electrónico válido" })
    .min(1, { message: "Ingresa tu correo electrónico" }),
  password: z.string().min(1, { message: "Ingresa tu contraseña" }),
});
