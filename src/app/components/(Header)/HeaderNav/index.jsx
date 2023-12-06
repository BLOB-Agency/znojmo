import React from "react";
import Link from "next/link";

export default function HeaderNav({ isCzech, toggleMenu }) {
  return (
    <nav
      className={`grid grid-col grid-rows-[8]  justify-center  h-full w-full border-t-[1px] border-black text-black  pt-[24px] text-center text-[20px]`}
    >
      <>
        <Link
          onClick={toggleMenu}
          href="/"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isCzech ? "Domů" : "Home"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/about"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isCzech ? "O nás" : "About us"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/team"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isCzech ? "Tým" : "Team"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/academy"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isCzech ? "Akademie" : "Academy"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/leaderboard"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isCzech ? "Žebříček" : "Leaderboard"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/shop"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isCzech ? "Obchod" : "Shop"}
        </Link>

        <Link
          onClick={toggleMenu}
          href="/news"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isCzech ? "Novinky" : "News"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/contact"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isCzech ? "Kontakt" : "Contact"}
        </Link>
      </>
    </nav>
  );
}
