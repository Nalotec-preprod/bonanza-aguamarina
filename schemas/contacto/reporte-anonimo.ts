import { z } from "zod";

export const ReporteAnonimoSchema = z.object({
  nombre: z.string().optional(),
  casa: z.string().optional(),
  descripcion: z.string().min(1, { message: "Ingrese el detalle del reporte" }),
});
