"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas/auth/authSchemas";
import { useTransition } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInAction } from "@/actions/auth/authActions";

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    startTransition(async () => {
      console.log("Form Data: ", data);

      const signInRes = await signInAction(data);
      console.log("Respuesta: ", signInRes);
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-[450px] mx-auto shadow-lg text-sm">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

        {/* Boton registrar  */}
        <Button
          variant="bonanzaPrimary"
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          Ingresar
        </Button>
      </form>
    </div>
  );
}
