"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FuncionesAcordeon() {
  const [showData, setShowData] = useState(false);

  return (
    <div>
      <button
        className="mx-auto text-center flex items-center justify-center gap-2"
        onClick={() => setShowData(!showData)}
      >
        <p>Funciones</p>
        {showData && <ChevronDown />}
      </button>
    </div>
  );
}
