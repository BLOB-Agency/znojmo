"use client";
import React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LangSwitch from "../LangSwitch";
import Burger from "../Burger";
import Link from "next/link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isCzech, setIsCzech] = useState(false);
  let test = usePathname();

  const toggleLangSwitch = () => {
    if (test.includes("/cs")) {
      setIsCzech(true);
    } else {
      setIsCzech(false);
    }
  };
  useEffect(() => {
    toggleLangSwitch();
  }, [test]);

  return (
    <header className="fixed z-[99] w-full h-[100px] top-0 p-[24px] md:p-[50px] grid grid-cols-3 items-center">
      <Burger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Link href="/" className="justify-self-center">
        <Image
          src="/images/logo_sc-znojmo.png"
          width={50}
          height={50}
          alt="logo"
        />
      </Link>
      <LangSwitch isCzech={isCzech} />
    </header>
  );
}
