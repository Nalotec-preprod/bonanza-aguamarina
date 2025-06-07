"use client";

import { UserRound } from "lucide-react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import GoogleAuthBtn from "./googleAuth";
import { Button } from "@/components/ui/button";
import { logOut } from "@/backend/actions/auth/login";
import { useState } from "react";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <div className="p-2 bg-bonanzagreen-500 rounded-full w-fit mx-auto">
        <UserRound size={40} strokeWidth={2} className="text-white mx-auto" />
      </div>
      <h1 className="text-center text-bonanzagreen-500 font-semibold my-4 text-lg">
        {showLogin ? "Ingreso de usuarios" : "Registro de usuarios"}
      </h1>
      <GoogleAuthBtn />
      
      {showLogin ? (
        <LoginForm />
      ) : (
        <RegisterForm />
      )}

      <div className="text-center mt-4">
        <Button
          variant="link"
          onClick={() => setShowLogin(!showLogin)}
          className="text-bonanzagreen-500 hover:text-bonanzagreen-600"
        >
          {showLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
        </Button>
      </div>

      {/* <form
        action={async () => {
          "use server";
          console.log("Saliendo de la aplicacion");
          logOut();
        }}
      >
        <Button>Logout</Button>
      </form> */}
    </div>
  );
}
