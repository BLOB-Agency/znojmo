import React from "react";
import Link from "next/link";

export default function HeaderNav({ isEnglish, toggleMenu }) {
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
          {isEnglish ? "Home" : "Domů"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/about"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isEnglish ? "About us" : "O nás"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/team"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isEnglish ? "Team" : "Tým"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/academy"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isEnglish ? "Academy" : "Akademie"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/leaderboard"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isEnglish ? "Leaderboard" : "Žebříček"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/shop"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isEnglish ? "Shop" : "Obchod"}
        </Link>

        <Link
          onClick={toggleMenu}
          href="/news"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isEnglish ? "News" : "Novinky"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="/contact"
          className="transition-all hover:scale-105 hover:font-semibold row-span-1"
        >
          {isEnglish ? "Contact" : "Kontakt"}
        </Link>
      </>
    </nav>
  );
}
