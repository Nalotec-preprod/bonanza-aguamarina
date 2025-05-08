import { z } from "zod";

export const ReporteAnonimoSchema = z.object({
  descripcion: z.string().min(1, { message: "Ingrese el detalle del reporte" }),
});
