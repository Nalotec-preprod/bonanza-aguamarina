"use client";

import { signIn } from "@/backend/actions/auth/login";
import { Button } from "@/components/ui/button";

export default function GoogleAuthBtn() {
  const onSubmit = async () => {
    const res = await signIn();
    console.log("Respuesta: ", res);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 px-2 py-2 text-sm shadow-md active:shadow-sm"
        >
          Google
        </Button>
      </form>
    </div>
  );
}
