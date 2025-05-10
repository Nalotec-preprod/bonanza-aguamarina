"use server";

import { ReporteAnonimoSchema } from "@/schemas/contacto/reporte-anonimo";
import { z } from "zod";
import { QuejasSchema } from "@/schemas/contacto/quejas";
import { createClient } from "@/utils/supabase/client";

/**
 * Funcion que ingresa un registro en la tabla de
 * reportes anónimos
 */
export const insertReporteAnonimo = async (
  data: z.infer<typeof ReporteAnonimoSchema>,
) => {
  const supabase = createClient();
  const { error } = await supabase.from("reporte_anonimo").insert(data);

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
  const supabase = createClient();
  const { error } = await supabase.from("dudas_quejas_reportes").insert(data);

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
 * Obtiene los datos de contacto de la administracion
 */
export const getAdminContactData = async () => {
  const supabase = createClient();
  const { data } = await supabase.from("admin_contact_data").select();
  console.log("Data: ", data);
  return data;
};
