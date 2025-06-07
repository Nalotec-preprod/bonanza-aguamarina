import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Por favor ingrese un correo electrónico válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export type LoginFormData = z.infer<typeof LoginSchema>;
