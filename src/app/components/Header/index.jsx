"use client";
import React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LangSwitch from "../(Header)/LangSwitch";
import Burger from "../(Header)/Burger";
import Link from "next/link";
import HeaderFooter from "../(Header)/HeaderFooter";
import HeaderNav from "../(Header)/HeaderNav";
import SocialsFixed from "../(Header)/SocialsFixed";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isEnglish, setIsEnglish] = useState(false); // Set default language to Czech
  let path = usePathname();

  const toggleLangSwitch = () => {
    if (path.includes("/en")) {
      setIsEnglish(true);
    } else {
      setIsEnglish(false);
    }
  };
  useEffect(() => {
    toggleLangSwitch();
  }, [path]);

  return (
    <header
      className={`flex flex-col fixed z-[99] w-full  top-0  ${
        isMenuOpen ? "bg-white h-[100vh]" : ""
      } `}
    >
      <div className="relative grid grid-cols-3 row-span-1 items-center pb-[10px] px-[24px] pt-[24px] md:px-[50px] ">
        <Burger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Link href="/" className="justify-self-center ">
          <Image
            src="/images/logo_sc-znojmo.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <LangSwitch isEnglish={isEnglish} />
      </div>
      {!isMenuOpen && <SocialsFixed />}
      {isMenuOpen && (
        <HeaderNav isEnglish={isEnglish} toggleMenu={toggleMenu} />
      )}
      {isMenuOpen && <HeaderFooter isEnglish={isEnglish} />}
    </header>
  );
}
