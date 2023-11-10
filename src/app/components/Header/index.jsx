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
          <Link href="/" className="text-white relative">
            <Image
              src="/images/social-instagram.svg"
              width={20}
              height={20}
              alt="facebook"
            />
          </Link>
          <Link href="/" className="text-white relative ">
            <Image
              src="/images/social-x.svg"
              width={20}
              height={20}
              alt="instagram"
              className="text-primary"
            />
          </Link>
          <Link href="/" className="text-white relative">
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
          <nav
            className={` grid grid-col gap-[10px] justify-center content-between h-fit border-t-[1px] border-black text-black  pt-[24px] text-center text-[20px]`}
          >
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
          </nav>
          <footer className=" grid grid-row justify-center gap-[24px] p-[24px] bg-secondary text-center">
            <div className="flex flex-col items-center">
              <Image
                src={"/images/logo-dark.png"}
                width={60}
                height={60}
                alt="logo Znojmo"
              />
              <span className="font-bold">SC ZNOJMO</span>
            </div>

            <div className="flex flex-col items-center">
              <span>info@scznojmo.cz</span>
              <span>
                Stadionu 0000,
                <br />
                znojmo 70000
              </span>
            </div>
            <div className="flex flex-col gap-[10px] items-center">
              <h3>B2B Sponsors</h3>
              <button className="rounded-full px-[25px] py-[10px] bg-primary hover:scale-105 transition-all duration-400 pointer">
                <a
                  href="/assets/b2b-deck.pdf"
                  download={"SC-Znojmo_B2B-Sponsors"}
                >
                  DOWNLOAD PDF
                </a>
              </button>
            </div>
          </footer>
          <div className="grid grid-col grid-cols-3 items-center justify-center bg-secondary border-t-[1px] border-white w-full text-[10px] text-center">
            <Link href="/" className="text-white">
              Privacy Policy
            </Link>
            <div className="grid grid-col grid-cols-3 items-center justify-items-center">
              <Link href="/" className="text-white relative">
                <Image
                  src="/images/social-instagram.svg"
                  width={20}
                  height={20}
                  alt="facebook"
                />
              </Link>
              <Link href="/" className="text-white relative ">
                <Image
                  src="/images/social-x.svg"
                  width={20}
                  height={20}
                  alt="instagram"
                  className="text-primary"
                />
              </Link>
              <Link href="/" className="text-white relative">
                <Image
                  src="/images/social-tiktok.svg"
                  width={20}
                  height={20}
                  alt="twitter"
                />
              </Link>
            </div>
            <Link href="/" className="text-white">
              Terms & Conditions
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
