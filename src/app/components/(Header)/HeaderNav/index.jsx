import React from 'react'
import Link from 'next/link'

export default function HeaderNav({isCzech}) {
  return (
    <nav
            className={` grid grid-col gap-[10px] justify-center content-between h-fit border-t-[1px] border-black text-black  pt-[24px] text-center text-[20px]`}
          >
            {isCzech ? (
              // Czech version of the navigation
              <>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Domů
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  O nás
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Tým
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Akademie
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Tabulka
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Novinky
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Obchod
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Kontakt
                </Link>
              </>
            ) : (
              // English version of the navigation
              <>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  About Us
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Team
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Academy
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Leaderboard
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  News
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Shop
                </Link>
                <Link
                  href="/"
                  className="transition-all hover:scale-105 hover:font-semibold"
                >
                  Contact
                </Link>
              </>
            )}
          </nav>
  )
}
