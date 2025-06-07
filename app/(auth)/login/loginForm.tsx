"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/auth/login";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import InputError from "@/components/ui/forms/inputError";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const supabase = createClientComponentClient();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      try {
        const { error: authError } = await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        });

        if (authError) {
          setError(authError.message);
          return;
        }

        router.push("/"); // Redirigir al usuario a la página principal después de iniciar sesión
      } catch (error) {
        console.log("error: ", error);
        setError("Error al iniciar sesión. Por favor, intenta nuevamente.");
      }
    });
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

        <Button
          variant="bonanzaPrimary"
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          Ingresar
        </Button>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </form>
    </div>
  );
}
