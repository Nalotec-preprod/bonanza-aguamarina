"use server";

import { ReporteAnonimoSchema } from "@/schemas/contacto/reporte-anonimo";
import { z } from "zod";
import { createSupabaseClient } from "../supabaseClient";
import { QuejasSchema } from "@/schemas/contacto/quejas";

/**
 * Funcion que ingresa un registro en la tabla de
 * reportes anónimos
 */
export const insertReporteAnonimo = async (
  data: z.infer<typeof ReporteAnonimoSchema>,
) => {
  const supabase = createSupabaseClient();
  const { error } = await supabase.from("reporte-anonimo").insert(data);

  if (error) {
    console.log("Error recibido");
    console.log(error);
    return {
      status: "error",
      message: "Algo salio mal",
      data: error,
    };
  } else {
    return {
      status: "success",
      message: "Se ha enviado el reporte",
    };
  }
};

/**
 * Funcion que ingresa un registro en la tabla de
 * reportes anónimos
 */
export const insertDudaQuejaReporte = async (
  data: z.infer<typeof QuejasSchema>,
) => {
  const supabase = createSupabaseClient();
  const { error } = await supabase.from("dudas-quejas-reportes").insert(data);

  if (error) {
    console.log("Error recibido");
    console.log(error);
    return {
      status: "error",
      message: "Algo salio mal",
      data: error,
    };
  } else {
    return {
      status: "success",
      message: "Se ha enviado el reporte",
    };
  }
};
