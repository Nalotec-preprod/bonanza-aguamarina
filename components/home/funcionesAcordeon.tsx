"use client";

import { ChevronDown, ChevronRight, CircleCheck } from "lucide-react";
import { useState } from "react";

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
  const [showData, setShowData] = useState(false);

  return (
    <div className="rounded-lg bg-bonanzagreen-100 text-bonanzagreen-800">
      <button
        className="mx-auto font-medium text-center py-2 w-full flex items-center justify-center gap-2 text-bonanzagreen-800"
        onClick={() => setShowData(!showData)}
      >
        <p>Ver funciones</p>
        {showData && <ChevronDown />}
        {!showData && <ChevronRight />}
      </button>

      {showData && (
        <div className="border-t px-4 border-t-bonanzagreen-200 mt-2 py-4 text-sm">
          <ul className="text-left space-y-2">
            {funciones.map((funcion) => (
              <li key={funcion.id} className="flex items-start gap-2 text-left">
                <CircleCheck className="h-5 text-bonanzagreen-500 shrink-0" />
                <p>{funcion.descripcion}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
