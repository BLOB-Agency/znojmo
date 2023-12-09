import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function HeaderFooter({ isEnglish }) {
  return (
    <footer className="w-full h-fit py-[10px] gap-[10px] grid grid-row p-[24px] bg-secondary text-center">
      <div className="flex flex-col items-center">
        <Image
          src={"/images/logo-dark.png"}
          width={40}
          height={40}
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
      <div className="flex flex-col gap-[10px] items-center font-bold">
        <h3>{isEnglish ? "B2B Sponsors" : "B2B Sponzoři"}</h3>
        <button className="rounded-full px-[25px] text-[14px] py-[10px] bg-primary hover:scale-105 transition-all duration-400 pointer">
          <a href="/assets/b2b-deck.pdf" download={"SC-Znojmo_B2B-Sponsors"}>
            {isEnglish ? "DOWNLOAD PDF" : "STÁHNOUT PDF"}
          </a>
        </button>
      </div>
      <div className="grid grid-col grid-cols-3 h-fit pt-[10px] self-end items-center justify-center bg-secondary border-t-[1px] border-white w-full text-[10px] text-center">
        <Link href="/" className="text-white">
          {isEnglish ? "Privacy Policy" : "Ochrana osobních údajů"}
        </Link>

        <div className="w-full h-full grid grid-col grid-cols-3 items-center justify-items-center">
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
          {isEnglish ? "Terms & Conditions" : "Obchodní podmínky"}
        </Link>
      </div>
    </footer>
  );
}
