"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas/auth/register";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import InputError from "@/components/ui/forms/inputError";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    startTransition(async () => {
      try {
        const { error: authError } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
        });

        if (authError) {
          setError(authError.message);
          return;
        }

        // Actualizar el perfil del usuario con el nombre
        const { error: profileError } = await supabase.auth.getUser();
        if (profileError) {
          setError("Error al crear el perfil del usuario");
          return;
        }

        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          await supabase
            .from('profiles')
            .insert({
              id: user.id,
              name: data.name,
            });
        }

        router.push('/auth/login');
      } catch (error) {
        setError("Error al registrarse. Por favor, intenta nuevamente.");
      }
    });
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1">
          <Label>Nombre: </Label>
          <Input type="text" {...form.register("name")} />
          {form.formState.errors.name && (
            <InputError>{form.formState.errors.name.message}</InputError>
          )}
        </div>

        <div className="space-y-1">
          <Label>Correo electr&oacute;nico: </Label>
          <Input type="email" {...form.register("email")} />
          {form.formState.errors.email && (
            <InputError>{form.formState.errors.email.message}</InputError>
          )}
        </div>

        <div className="space-y-1">
          <Label>Contraseña: </Label>
          <Input type="password" {...form.register("password")} />
          {form.formState.errors.password && (
            <InputError>{form.formState.errors.password.message}</InputError>
          )}
        </div>

        <div className="space-y-1">
          <Label>Confirmar contraseña: </Label>
          <Input type="password" {...form.register("confirmPassword")} />
          {form.formState.errors.confirmPassword && (
            <InputError>{form.formState.errors.confirmPassword.message}</InputError>
          )}
        </div>

        <Button
          variant="bonanzaPrimary"
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          Registrarse
        </Button>
      </form>
      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}
    </div>
  );
}
