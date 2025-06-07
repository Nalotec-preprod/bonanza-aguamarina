import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email("Por favor ingrese un correo electrónico válido"),
  password: z.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(72, "La contraseña no debe exceder los 72 caracteres"),
  confirmPassword: z.string(),
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof RegisterSchema>;
