"use client";

import { CircleCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const funciones = [
  {
    id: "func-1",
    descripcion: "Atender dudas, quejas o reportes",
  },
  {
    id: "func-2",
    descripcion: "Coordinar temas de mantenimiento y seguridad",
  },
  {
    id: "func-3",
    descripcion: "Activar o desactivar accesos",
  },
  {
    id: "func-4",
    descripcion:
      "Y, sobre todo, mejorar la comunicación y el orden de nuestra comunidad",
  },
];

export default function FuncionesAcordeon() {
  return (
    <Accordion
      collapsible
      type="single"
      className="bg-bonanzagreen-100 text-bonanzagreen-800 px-4 py-1 rounded-md shadow-md transform transition-all ease-in-out duration-300"
    >
      <AccordionItem value="funciones">
        <AccordionTrigger className="flex justify-center text-lg font-medium py-2 gap-2 items-center">
          Funciones
        </AccordionTrigger>
        <AccordionContent>
          <ul className="text-left space-y-2">
            {funciones.map((funcion) => (
              <li key={funcion.id} className="flex items-start gap-2 text-left">
                <CircleCheck className="h-5 text-bonanzagreen-500 shrink-0" />
                <p>{funcion.descripcion}</p>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
