import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="grid grid-col bg-secondary gap-[10px] ">
      <div className="grid grid-cols-3 items-center px-[24px] py-[24px] md:px-[50px]">
        <div className="grid grid-col gap-[5px] items-center text-center">
          <h4 className="font-bold">{t("title")}</h4>
          <Link href="tel:700 000 000" className="text-white text-[12px]">
            700 000 000
          </Link>
          <span className="font-bold">info@scznojmo.cz</span>
          <span className="text-[12px]">
            Stadionu 0000,
            <br />
            znojmo 70000
          </span>
        </div>
        <div className="flex flex-col items-center gap-[10px] items-center text-center ">
          <Image
            src={"/images/logo-dark.png"}
            width={60}
            height={60}
            alt="logo Znojmo"
          />
          <span className="font-bold">SC ZNOJMO</span>
        </div>
        <div className="flex flex-col gap-[10px] items-center font-bold ">
          <h3 className="font-semibold">{t("titleBtn")}</h3>
          <button className="rounded-full px-[25px] py-[10px] bg-primary hover:scale-105 transition-all duration-400 pointer">
            <a href="/assets/b2b-deck.pdf" download={"SC-Znojmo_B2B-Sponsors"}>
              {t("button")}
            </a>
          </button>
        </div>
      </div>

      <div className=" grid grid-cols-3 justify-between border-t-[1px] border-white text-center px-[24px] py-[24px]  md:px-[50px] text-[12px]">
        <Link href="/" className="text-white">
          {t("privacy")}
        </Link>
        <div className="flex justify-center gap-[10px]">
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
        <Link href="/" className="text-white">
          {t("terms")}
        </Link>
      </div>
    </footer>
  );
}
