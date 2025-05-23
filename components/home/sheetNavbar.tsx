"use client";

import Link from "next/link";
import { orbitron } from "../ui/fonts/font";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { useState } from "react";

const navLinks = [
  {
    name: "inicio",
    url: "/",
  },
  {
    name: "comunicados",
    url: "/comunicados",
  },
  {
    name: "vigilancia",
    url: "/vigilancia",
  },
  {
    name: "mantenimiento",
    url: "/mantenimiento",
  },
  // {
  //   name: "contacto",
  //   url: "/contacto",
  // },
  {
    name: "reporte anonimo",
    url: "/contacto/reporte-anonimo",
  },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="grid justify-items-center gap-1.5 rounded-md"
        onClick={() => setShowMenu(true)}
      >
        <span
          className={`h-1 w-8 rounded-full bg-bonanzagreen-500 transition-all`}
        ></span>
        <span
          className={`h-1 w-8 rounded-full bg-bonanzagreen-500 transition-all`}
        ></span>
        <span
          className={`h-1 w-8 rounded-full bg-bonanzagreen-500 transition-all`}
        ></span>
      </button>

      <Sheet open={showMenu} onOpenChange={setShowMenu}>
        <SheetContent className="bg-navbar-clear-overlay border-transparent rounded-l-lg overflow-hidden">
          <SheetHeader className="hidden">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="backdrop-blur-md h-full w-full border-transparent pt-8 px-2">
            <nav className="">
              <ul className="text-bonanzagreen-700">
                {navLinks.map((link) => (
                  <li className="w-full" key={link.name}>
                    <Link
                      href={link.url}
                      className="block w-full py-4 font-medium border-b border-b-bonanzagreen-300 text-center uppercase"
                      onClick={() => setShowMenu(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                <li className="">
                  <p className="text-[10px] text-center pt-4">
                    Powered by{" "}
                    <img
                      src="/images/LogoNalotec.svg"
                      alt="logotipo de nalotec"
                      className="inline-block w-5"
                    />{" "}
                    <span
                      className={`${orbitron.className} antialiased font-semibold text-[#20387e]`}
                    >
                      nalotec
                    </span>
                  </p>
                </li>
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
