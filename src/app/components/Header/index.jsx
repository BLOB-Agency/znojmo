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
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isCzech, setIsCzech] = useState(false);
  let path = usePathname();

  const toggleLangSwitch = () => {
    if (path.includes("/cs")) {
      setIsCzech(true);
    } else {
      setIsCzech(false);
    }
  };
  useEffect(() => {
    toggleLangSwitch();
  }, [path]);

  return (
    <header
      className={`grid grid-col fixed z-[99] w-full  top-0  ${
        isMenuOpen ? "bg-white h-[100vh]" : ""
      } `}
    >
      <div className="relative grid grid-cols-3 items-center px-[24px] pt-[24px] md:px-[50px] h-fit">
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
      </div>
      {!isMenuOpen && (
        <div className="justify-self-end w-fit grid grid-row gap-[10px] pr-[24px] md:pr-[50px]">
          <Link
            href="/"
            className="text-white relative transition-all duration-400 hover:scale-105"
          >
            <Image
              src="/images/social-instagram.svg"
              width={20}
              height={20}
              alt="facebook"
            />
          </Link>
          <Link
            href="/"
            className="text-white relative transition-all duration-400 hover:scale-105"
          >
            <Image
              src="/images/social-x.svg"
              width={20}
              height={20}
              alt="instagram"
              className="text-primary"
            />
          </Link>
          <Link
            href="/"
            className="text-white relative transition-all duration-400 hover:scale-105"
          >
            <Image
              src="/images/social-tiktok.svg"
              width={20}
              height={20}
              alt="twitter"
            />
          </Link>
        </div>
      )}
      {isMenuOpen && (
        <>
          <HeaderNav isCzech={isCzech} />
          <HeaderFooter isCzech={isCzech} />
        </>
      )}
    </header>
  );
}
