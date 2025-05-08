"use client";

import SectionHeader from "@/components/ui/headers/sectionHeader";
import { ReporteAnonimoSchema } from "@/schemas/contacto/reporte-anonimo";
import { zodResolver } from "@hookform/resolvers/zod";
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

    setFormState({ status: "success", message: "Reporte enviado" });
  };

  return (
    <div className="px-2 text-sm">
      <SectionHeader>Reporte an&oacute;nimo</SectionHeader>

      <p className="my-4 text-zinc-500">
        Envio de reporte an&oacute;nimo. Le pedimos use el siguiente formulario
        de forma responsable.
      </p>

      {formState.status !== "success" && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* <div> */}
          {/*   <label htmlFor="nombre">Nombre (opcional)</label> */}
          {/*   <input */}
          {/*     {...form.register("nombre")} */}
          {/*     type="text" */}
          {/*     className="block px-2 w-full py-1 border border-bonanzagreen-500 rounded-md" */}
          {/*   /> */}
          {/* </div> */}
          {/**/}
          {/* <div> */}
          {/*   <label htmlFor="casa">Casa (opcional)</label> */}
          {/*   <input */}
          {/*     {...form.register("casa")} */}
          {/*     type="text" */}
          {/*     className="block px-2 py-1 w-full border border-bonanzagreen-500 rounded-md" */}
          {/*   /> */}
          {/* </div> */}

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
            className="text-sm bg-gradient-to-b from-bonanzagreen-500 to-bonanzagreen-800 w-full font-medium px-6 py-1 text-white rounded-lg"
          >
            Enviar
          </button>
        </form>
      )}

      {formState.status === "success" && (
        <div className="space-y-4">
          <p className="text-[100px] text-center">📨</p>
          <p className="text-center py-2 bg-bonanzagreen-200 rounded-lg">
            {formState.message}
          </p>
          <button
            type="button"
            onClick={() => {
              setFormState({ status: "", message: "" });
              form.reset();
            }}
            className="text-sm bg-gradient-to-b from-bonanzagreen-500 to-bonanzagreen-800 w-full font-medium px-6 py-1 text-white rounded-lg"
          >
            Enviar otro reporte
          </button>
        </div>
      )}
    </div>
  );
}
