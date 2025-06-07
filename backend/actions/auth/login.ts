"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const signIn = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: "/",
    },
  });

  if (error) {
    console.log("-------------- Error recibido: ");
    console.log(error);
    return {
      status: "error",
      message: error.code,
    };
  } else {
    console.log(data);
    if (data.url) {
      redirect(data.url);
    }
  }
};

/**
 * Termina la sesion del usuario y lo regresa a la
 * pagina principal
 */
export const logOut = async () => {
  const supabase = await createClient();
  const res = await supabase.auth.signOut();
  console.log(res);
};
