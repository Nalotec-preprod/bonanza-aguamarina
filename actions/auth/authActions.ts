"use server";

import { SignInSchema, SignUpSchema } from "@/schemas/auth/authSchemas";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export const signUpAction = async (formdata: z.infer<typeof SignUpSchema>) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: formdata.email,
    password: formdata.password,
  });

  console.log("\n\n");
  console.log("=============================");
  console.log("       signUpAction");
  console.log("=============================");
  console.log("Data: ", data);

  if (error) {
    console.log("------------ Error recibido");
    console.log(error);
    return {
      status: "error",
      message: error.message,
      data: error,
    };
  }

  console.log("No ha marcado ningun error");
  redirect("/dashboard");
};

export const signInAction = async (formdata: z.infer<typeof SignInSchema>) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formdata.email,
    password: formdata.password,
  });

  if (error) {
    console.log("---------------- Error recibido");
    return {
      status: "error",
      message: error.message,
      data: error,
    };
  } else {
    console.log("Respuesta recibida: ", data);
    redirect("/dashboard");
  }
};
