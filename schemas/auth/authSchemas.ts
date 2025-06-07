import z from "zod";

/**
 * Esquema para validaciones del formulario de signUp
 */
export const SignUpSchema = z
  .object({
    nombre: z.string().min(1, { message: "Ingresa tu nombre completo" }),
    email: z
      .string()
      .email({ message: "Ingresa un correo válido" })
      .min(1, { message: "Ingresa tu correo electrónico" }),
    password: z
      .string()
      .min(8, { message: "El password debe tener al menos 8 caracteres" }),
    passwordConfirm: z
      .string()
      .min(1, { message: "Ingresa nuevamente tu password" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Las contraseñas no coinciden",
    path: ["passwordConfirm"],
  });

/**
 * Esquema para validaciones del formulario de signUp
 */
export const SignInSchema = z.object({
  email: z
    .string()
    .email({ message: "Ingresa un correo válido" })
    .min(1, { message: "Ingresa tu correo electrónico" }),
  password: z
    .string()
    .min(8, { message: "El password debe tener al menos 8 caracteres" }),
});
