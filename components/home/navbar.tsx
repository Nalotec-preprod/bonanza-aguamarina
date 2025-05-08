"use client";

import Link from "next/link";
import { useState } from "react";
import { orbitron } from "../ui/fonts/font";

const navLinks = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "vigilancia",
    url: "/vigilancia",
  },
  {
    name: "mantenimiento",
    url: "/mantenimiento",
  },
  {
    name: "contacto",
    url: "/contacto",
  },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="">
      <button
        type="button"
        className="grid justify-items-center gap-1.5 rounded-md"
        onClick={handleShowMenu}
      >
        <span
          className={`h-1 w-8 rounded-full bg-bonanzagreen-500 transition-all ${showMenu ? "rotate-45 translate-y-2.5" : ""} `}
        ></span>
        <span
          className={`h-1 w-8 rounded-full bg-bonanzagreen-500 transition-all ${showMenu ? "scale-x-0" : ""}`}
        ></span>
        <span
          className={`h-1 w-8 rounded-full bg-bonanzagreen-500 transition-all ${showMenu ? "-rotate-45 -translate-y-2.5" : ""} `}
        ></span>
      </button>

      <ul
        className={`
          absolute bg-white z-10 top-16 left-0 w-full origin-top flex flex-col shadow-lg rounded-b-xl items-center justify-center py-6 text-sm text-bonanzagreen-600 font-semibold ${showMenu ? "block" : "hidden"}

        `}
      >
        {navLinks.map((link) => (
          <li className="w-full" key={link.name}>
            <Link
              href={link.url}
              className="block w-full py-4 border-b border-b-gray-300 text-center uppercase"
              onClick={handleShowMenu}
            >
              {link.name}
            </Link>
          </li>
        ))}

        <li className="">
          <p className="text-[10px] pt-4">
            Powered by{" "}
            <img
              src="/images/LogoNalotec.svg"
              alt="logotipo de nalotec"
              className="inline-block w-5"
            />{" "}
            <span
              className={`${orbitron.className} antialiased text-[#20387e]`}
            >
              nalotec
            </span>
          </p>
        </li>
      </ul>
    </nav>
  );
}
