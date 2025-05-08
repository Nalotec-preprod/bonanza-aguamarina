import SectionHeader from "@/components/ui/headers/sectionHeader";
import { createClient } from "@/utils/supabase/server";

export default async function VigilanciaPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("vigilantes").select();

  return (
    <div>
      <SectionHeader>vigilancia</SectionHeader>

      <ul className="flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 px-2">
        {data &&
          data.map((vigilante) => (
            <li
              key={vigilante.id}
              className="rounded-lg shadow-lg w-full max-w-[95vw] border border-bonanzagreen-400 overflow-hidden"
            >
              <div className="h-[300px] overflow-hidden">
                <img
                  src={vigilante.photo}
                  alt="foto del vigilante en turno"
                  className="h-[300px] w-full object-cover object-center"
                />
              </div>
              <div className="px-4 py-4 rounded-b-lg">
                <p>
                  <b>Nombre: </b>
                  {vigilante.nombre}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
