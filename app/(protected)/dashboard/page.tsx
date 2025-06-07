import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Dashboard() {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  return (
    <div>
      <h1>Esta ruta esta protegida</h1>
      <p>Informaci&oacute;n del usuario: </p>
      <p>{JSON.stringify(user)}</p>
      <form
        action={async () => {
          "use server";
          const supabase = await createClient();
          const { error } = await supabase.auth.signOut();
          if (error) {
            console.log("error: ", error);
          } else {
            redirect("/login");
          }
        }}
      >
        <Button className="" type="submit">
          Cerrar sesi&oacute;n
        </Button>
      </form>
    </div>
  );
}
