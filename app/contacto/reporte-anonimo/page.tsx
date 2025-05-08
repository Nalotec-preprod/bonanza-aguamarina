"use client";

import { insertReporteAnonimo } from "@/backend/actions/contacto/contactoActions";
import SectionHeader from "@/components/ui/headers/sectionHeader";
import { ReporteAnonimoSchema } from "@/schemas/contacto/reporte-anonimo";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function ReporteAnonimoPage() {
  const [formState, setFormState] = useState({
    status: "",
    message: "",
  });

  const form = useForm<z.infer<typeof ReporteAnonimoSchema>>({
    resolver: zodResolver(ReporteAnonimoSchema),
  });

  const onSubmit = async (data: z.infer<typeof ReporteAnonimoSchema>) => {
    console.log("Data: ", data);
    const res = await insertReporteAnonimo(data);
    setFormState(res);
  };

  return (
    <div className="px-2 text-sm">
      <SectionHeader>Reporte an&oacute;nimo</SectionHeader>

      {formState.status !== "success" && (
        <div>
          <p className="my-4 text-zinc-500">
            Envio de reporte an&oacute;nimo. Le pedimos use el siguiente
            formulario de forma responsable.
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="descripcion">Descripci&oacute;n *</label>
              <textarea
                {...form.register("descripcion")}
                className="block h-32 px-2 py-1 w-full border border-bonanzagreen-500 rounded-md"
              ></textarea>
              {form.formState.errors.descripcion && (
                <p className="text-red-600 font-medium">
                  {form.formState.errors.descripcion.message}
                </p>
              )}
            </div>

            {formState.status === "error" && (
              <p className="text-red-600 font-medium">{formState.message}</p>
            )}

            <button
              type="submit"
              className="text-sm bg-gradient-to-b from-bonanzagreen-500 to-bonanzagreen-800 w-full font-medium px-6 py-2 text-white rounded-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      )}

      {formState.status === "success" && (
        <div className="space-y-4">
          <p className="text-[100px] text-center">📨</p>
          <p className="text-center py-2 bg-teal-200 text-teal-600 flex items-center justify-center gap-2 rounded-lg">
            <CircleCheck />
            {formState.message}
          </p>
          <button
            type="button"
            onClick={() => {
              setFormState({ status: "", message: "" });
              form.reset();
            }}
            className="text-sm bg-gradient-to-b from-bonanzagreen-500 to-bonanzagreen-800 w-full font-medium px-6 py-2 text-white rounded-lg"
          >
            Enviar otro reporte
          </button>
        </div>
      )}
    </div>
  );
}
