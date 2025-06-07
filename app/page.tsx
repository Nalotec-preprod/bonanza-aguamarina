import { getAdminContactData } from "@/backend/actions/contacto/contactoActions";
import FuncionesAcordeon from "@/components/home/funcionesAcordeon";
import LinkBonanza from "@/components/ui/links/bonanzaLink";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

type adminT = {
  id: number;
  email: string;
  phone: string;
  horario: string;
};

// const botones = [
//   {
//     id: "contacto-1",
//     nombre: "Reporte anónimo",
//     url: "/contacto/reporte-anonimo",
//   },
//   {
//     id: "contacto-2",
//     nombre: "Dudas, quejas o reportes",
//     url: "/contacto/dudas-quejas-reportes",
//   },
// ];

export default async function HomePage() {
  const data = await getAdminContactData();

  return (
    <main className="px-2 space-y-4 max-w-[95vw] md:max-w-[450px] mx-auto w-full">
      <div className="w-full px-4 py-4 rounded-xl border-2 border-bonanzagreen-500 text-center shadow-lg">
        <h2 className="text-lg font-semibold">Administraci&oacute;n</h2>
        <p className="uppercase text-aquamarine-500 font-bold text-xl text-center">
          aguamarina
        </p>
        {data &&
          data.length > 0 &&
          data.map((contacto: adminT) => (
            <div key={contacto.id}>
              <div className="my-4 w-24 h-24 p-2 border-2 border-gray-300 rounded-full overflow-hidden mx-auto">
                <img
                  src="/images/villas_bonanza.png"
                  alt="fotografia del contacto"
                  className=""
                />
              </div>

              {/* Horarios de atención  */}
              <div className="text-sm">
                <p>Horarios de atenci&oacute;n: </p>
                <p>{contacto.horario}</p>
              </div>

              {/* Botones de contacto  */}
              <div className="mt-4 space-y-3">
                <Link
                  href={`mailto:${contacto.email}`}
                  className="text-blue-500 font-medium underline flex items-center gap-2 border border-bonanzagreen-400 py-2 rounded-md px-4 shadow-md active:shadow-sm"
                >
                  <Mail className="" />
                  {contacto.email}
                </Link>
                <Link
                  href={`tel:${contacto.phone}`}
                  className="text-blue-500 font-medium underline flex items-center gap-2 border border-bonanzagreen-400 py-2 rounded-md px-4 shadow-md active:shadow-sm"
                >
                  <Phone />
                  {contacto.phone}
                </Link>
              </div>
            </div>
          ))}

        {/* Acordeon Funciones  */}
        <div className="mt-6">
          <FuncionesAcordeon />
        </div>
      </div>

      <div className="w-full p-1 inline-flex items-center justify-center gap-4">
        <LinkBonanza href="/signin" variant="btnPrimaryLink">
          Ingresar
        </LinkBonanza>
        <LinkBonanza href="/signup" variant="btnPrimaryLink">
          Registrarse
        </LinkBonanza>
      </div>
    </main>
  );
}
