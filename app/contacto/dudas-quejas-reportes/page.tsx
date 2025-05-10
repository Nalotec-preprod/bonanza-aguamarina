"use client";

import { insertDudaQuejaReporte } from "@/backend/actions/contacto/contactoActions";
import SectionHeader from "@/components/ui/headers/sectionHeader";
import { QuejasSchema } from "@/schemas/contacto/quejas";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, LoaderCircle } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function SugerenciasPage() {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState({
    status: "",
    message: "",
  });

  const form = useForm<z.infer<typeof QuejasSchema>>({
    resolver: zodResolver(QuejasSchema),
  });

  const onSubmit = async (data: z.infer<typeof QuejasSchema>) => {
    startTransition(async () => {
      console.log("Queja data: ", data);
      const res = await insertDudaQuejaReporte(data);
      setFormState(res);
    });
  };

  return (
    <div className="px-2">
      <SectionHeader>Dudas, quejas y reportes</SectionHeader>

      <div className="px-2">
        {formState.status !== "success" && (
          <div>
            <p className="text-zinc-500 my-6">
              Utilice el siguiente formulario para enviar alguna duda, queja o
              reporte, la informaci&oacute;n ser&aacute; revisada por la
              administraci&oacute;n a la brevedad posible
            </p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="nombre">Nombre: </label>
                <input
                  {...form.register("nombre")}
                  type="text"
                  disabled={isPending}
                  className="block px-2 w-full py-1 border border-bonanzagreen-500 rounded-md"
                />
                {form.formState.errors.nombre && (
                  <p className="text-red-600 font-medium">
                    {form.formState.errors.nombre.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="casa">Casa: </label>
                <input
                  {...form.register("casa")}
                  type="text"
                  disabled={isPending}
                  className="block px-2 w-full py-1 border border-bonanzagreen-500 rounded-md"
                />
                {form.formState.errors.casa && (
                  <p className="text-red-600 font-medium">
                    {form.formState.errors.casa.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="descripcion">Duda, queja o reporte: </label>
                <textarea
                  {...form.register("descripcion")}
                  disabled={isPending}
                  className="block h-32 px-2 py-1 w-full border border-bonanzagreen-500 rounded-md"
                ></textarea>
                {form.formState.errors.descripcion && (
                  <p className="text-red-600 font-medium">
                    {form.formState.errors.descripcion.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="text-sm bg-gradient-to-b from-bonanzagreen-500 to-bonanzagreen-800 w-full font-medium px-6 py-2 text-white rounded-lg"
              >
                {!isPending && "Enviar"}
                {isPending && <LoaderCircle />}
              </button>
            </form>
          </div>
        )}

        {formState.status === "success" && (
          <div className="space-y-4">
            <p className="text-[100px] text-center">📨</p>
            <p className="py-2 px-4 bg-teal-200 rounded-lg flex items-center justify-center gap-2 text-teal-600 font-medium">
              <CircleCheck />
              {formState.message}
            </p>
            <button
              type="button"
              disabled={isPending}
              onClick={() => {
                setFormState({ status: "", message: "" });
                form.reset();
              }}
              className="text-sm bg-gradient-to-b from-bonanzagreen-500 to-bonanzagreen-800 w-full font-medium px-6 py-2 text-white rounded-lg"
            >
              Enviar otro reporte, duda o queja
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
