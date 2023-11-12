import React from "react";
import Link from "next/link";

export default function HeaderNav({ isCzech, toggleMenu }) {
  return (
    <nav
      className={` grid grid-col gap-[10px] justify-center content-between h-fit border-t-[1px] border-black text-black  pt-[24px] text-center text-[20px]`}
    >
      <>
        <Link
          onClick={toggleMenu}
          href="/"
          className="transition-all hover:scale-105 hover:font-semibold"
        >
          {isCzech ? "Domů" : "Home"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/about"
          className="transition-all hover:scale-105 hover:font-semibold"
        >
          {isCzech ? "O nás" : "About us"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/team"
          className="transition-all hover:scale-105 hover:font-semibold"
        >
          {isCzech ? "Tým" : "Team"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/academy"
          className="transition-all hover:scale-105 hover:font-semibold"
        >
          {isCzech ? "Akademie" : "Academy"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/"
          className="transition-all hover:scale-105 hover:font-semibold"
        >
          {isCzech ? "Obchod" : "Shop"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/news"
          className="transition-all hover:scale-105 hover:font-semibold"
        >
          {isCzech ? "Novinky" : "News"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/contact"
          className="transition-all hover:scale-105 hover:font-semibold"
        >
          {isCzech ? "Kontakt" : "Contact"}
        </Link>
      </>
    </nav>
  );
}
