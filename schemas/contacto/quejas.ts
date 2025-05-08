import { z } from "zod";

export const QuejasSchema = z.object({
  nombre: z.string().min(1, { message: "Ingrese su nombre" }),
  casa: z.string().min(1, { message: "Ingrese su casa" }),
  descripcion: z
    .string()
    .min(1, { message: "Ingrese el detalle de la duda, queja o reporte" }),
});
