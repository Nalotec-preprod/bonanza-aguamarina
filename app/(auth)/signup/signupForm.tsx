"use client";

import { useForm } from "react-hook-form";
import { SignUpSchema } from "@/schemas/auth/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { signUpAction } from "@/actions/auth/authActions";

export default function SignUpForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    startTransition(async () => {
      console.log("Datos del formulario: ", data);

      const signUpRes = await signUpAction(data);

      console.log("Respuesta recibida: ", signUpRes);
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-[450px] mx-auto shadow-lg text-sm">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Nombre del usuario  */}
        <div className="space-y-1">
          <Label className="">Nombre:</Label>
          <Input
            {...form.register("nombre")}
            type="text"
            disabled={isPending}
          />
          {form.formState.errors.nombre && (
            <p className="text-red-500">
              {form.formState.errors.nombre.message}
            </p>
          )}
        </div>

        {/* Email del usuario */}
        <div className="space-y-1">
          <Label className="">Correo electr&oacute;nico:</Label>
          <Input
            {...form.register("email")}
            type="email"
            disabled={isPending}
          />

          {form.formState.errors.email && (
            <p className="text-red-500">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Contraseña */}
        <div className="space-y-1">
          <Label className="">Contraseña:</Label>
          <Input
            {...form.register("password")}
            type="password"
            disabled={isPending}
          />

          {form.formState.errors.password && (
            <p className="text-red-500">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        {/* Confirmación de Contraseña */}
        <div className="space-y-1">
          <Label className="">Confirmar contraseña:</Label>
          <Input
            {...form.register("passwordConfirm")}
            type="password"
            disabled={isPending}
          />
          {form.formState.errors.passwordConfirm && (
            <p className="text-red-500">
              {form.formState.errors.passwordConfirm.message}
            </p>
          )}
        </div>

        {/* Boton registrar  */}
        <Button
          variant="bonanzaPrimary"
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          Registrar
        </Button>
      </form>
    </div>
  );
}
