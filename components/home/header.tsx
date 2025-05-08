import Link from "next/link";
import Navbar from "./sheetNavbar";

export default function Header() {
  return (
    <header
      className={`
        fixed top-0 left-0 w-full flex items-center bg-white justify-between gap-3 p-2 shadow-md h-[66px]
      `}
    >
      {/* Logotipo del sitio  */}
      <div className="bg-white">
        <Link href="/">
          <img
            src="/images/villas_bonanza.png"
            alt="logotipo de villas bonanza"
            className="h-14  "
          />
        </Link>
      </div>

      <Navbar />
    </header>
  );
}
