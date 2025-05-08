import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createClient } from "@/utils/supabase/server";
import { ChevronRight, Mail, Phone } from "lucide-react";
import Link from "next/link";

type adminT = {
  id: number;
  nombre: string;
  phone: string;
  email: string;
  photo: string;
};

const botones = [
  {
    id: "contacto-1",
    nombre: "Reporte anónimo",
    url: "/contacto/reporte-anonimo",
  },
  {
    id: "contacto-2",
    nombre: "Dudas, quejas o reportes",
    url: "/contacto/sugerencias",
  },
];

export default async function ContactoPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("contacto").select();

  return (
    <div className="px-2 space-y-4">
      {/* <SectionHeader>Contacto</SectionHeader> */}

      <div className="w-full px-4 py-6 rounded-xl border-2 border-bonanzagreen-500 text-center shadow-lg">
        <h2 className="text-lg font-semibold">Administraci&oacute;n</h2>
        {data &&
          data.length > 0 &&
          data.map((contacto: adminT) => (
            <div key={contacto.id}>
              <div className="my-4 w-24 h-24 rounded-full overflow-hidden mx-auto">
                <img
                  src={contacto.photo}
                  alt="fotografia del contacto"
                  className="object-cover object-center h-full w-full"
                />
              </div>
              <p>{contacto.nombre}</p>
              <Link
                href={`mailto:${contacto.email}`}
                className="text-blue-500 font-medium underline flex justify-center items-center gap-2"
              >
                <Mail className="" />
                {contacto.email}
              </Link>
              <Link
                href={`tel:${contacto.phone}`}
                className="text-blue-500 font-medium underline  flex justify-center items-center gap-2"
              >
                <Phone />
                {contacto.phone}
              </Link>
            </div>
          ))}
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Funciones</AccordionTrigger>
            <AccordionContent>Descripcion de las funciones</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {botones.map((boton) => (
        <Link
          key={boton.id}
          href={boton.url}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium shadow-md bg-gradient-to-b from-bonanzagreen-500 to-bonanzagreen-800 text-white"
        >
          <p>{boton.nombre}</p>
          <ChevronRight className="" />
        </Link>
      ))}
    </div>
  );
}
