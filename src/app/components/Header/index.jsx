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
      <div className="relative grid grid-cols-3 items-center pb-[10px] px-[24px] pt-[24px] md:px-[50px] h-fit">
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
        <div className="justify-self-end w-fit grid grid-row gap-[10px] py-[10px] pr-[24px] md:pr-[50px]">
          <Link
            href="https://www.instagram.com/1scznojmofk/"
            target="_blank"
            className="text-white relative transition-all duration-400 hover:scale-105"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.50985 0C2.02294 0 0 1.96372 0 4.37622V10.6262C0 13.0381 2.02481 15 4.51237 15H10.9568C13.4437 15 15.4667 13.0363 15.4667 10.6238V4.37378C15.4667 1.9619 13.4419 0 10.9543 0H4.50985ZM12.2444 2.5C12.6002 2.5 12.8889 2.78 12.8889 3.125C12.8889 3.47 12.6002 3.75 12.2444 3.75C11.8887 3.75 11.6 3.47 11.6 3.125C11.6 2.78 11.8887 2.5 12.2444 2.5ZM7.73333 3.75C9.8658 3.75 11.6 5.43188 11.6 7.5C11.6 9.56812 9.8658 11.25 7.73333 11.25C5.60087 11.25 3.86667 9.56812 3.86667 7.5C3.86667 5.43188 5.60087 3.75 7.73333 3.75ZM7.73333 5C7.04966 5 6.394 5.26339 5.91057 5.73223C5.42714 6.20107 5.15556 6.83696 5.15556 7.5C5.15556 8.16304 5.42714 8.79893 5.91057 9.26777C6.394 9.73661 7.04966 10 7.73333 10C8.417 10 9.07267 9.73661 9.5561 9.26777C10.0395 8.79893 10.3111 8.16304 10.3111 7.5C10.3111 6.83696 10.0395 6.20107 9.5561 5.73223C9.07267 5.26339 8.417 5 7.73333 5Z"
                fill="black"
              />
            </svg>
          </Link>
          <Link
            href="https://x.com/1scznojmofk?s=20"
            target="_blank"
            className="text-white relative transition-all duration-400 hover:scale-105"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.65 0C1.31531 0 0.233334 1.11929 0.233334 2.5V12.5C0.233334 13.8807 1.31531 15 2.65 15H12.3167C13.6514 15 14.7333 13.8807 14.7333 12.5V2.5C14.7333 1.11929 13.6514 0 12.3167 0H2.65ZM3.37015 3.21429H6.11047L8.05648 6.07492L10.4179 3.21429H11.281L8.44622 6.6476L11.9418 11.7857H9.20211L6.9439 8.4668L4.20357 11.7857H3.34048L6.55416 7.89411L3.37015 3.21429ZM4.69176 3.92857L9.56218 11.0714H10.6201L5.74973 3.92857H4.69176Z"
                fill="black"
              />
            </svg>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="relative transition-all duration-400 hover:scale-105"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1587 0H2.3746C1.35933 0 0.533333 0.801071 0.533333 1.78571V13.2143C0.533333 14.1989 1.35933 15 2.3746 15H14.1587C15.174 15 16 14.1989 16 13.2143V1.78571C16 0.801071 15.174 0 14.1587 0ZM12.6879 6.54393C12.6043 6.55143 12.5196 6.55643 12.4338 6.55643C11.4679 6.55643 10.6191 6.07464 10.1252 5.34643C10.1252 7.25679 10.1252 9.43036 10.1252 9.46679C10.1252 11.1486 8.71925 12.5121 6.98514 12.5121C5.25103 12.5121 3.84504 11.1486 3.84504 9.46679C3.84504 7.785 5.25103 6.42143 6.98514 6.42143C7.05069 6.42143 7.11477 6.42714 7.17921 6.43107V7.93179C7.11477 7.92429 7.05143 7.91286 6.98514 7.91286C6.09986 7.91286 5.3825 8.60857 5.3825 9.46714C5.3825 10.3257 6.09986 11.0214 6.98514 11.0214C7.87042 11.0214 8.65223 10.345 8.65223 9.48643C8.65223 9.4525 8.66769 2.48857 8.66769 2.48857H10.1466C10.2858 3.77107 11.3534 4.78321 12.6879 4.87607V6.54393Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      )}
      {isMenuOpen && (
        <>
          <HeaderNav isCzech={isCzech} toggleMenu={toggleMenu} />
          <HeaderFooter isCzech={isCzech} />
        </>
      )}
    </header>
  );
}
