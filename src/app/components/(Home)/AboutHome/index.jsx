import Image from "next/image";
import Link from "next/link";
import React from "react";
import PartnerBanner from "../PartnerBanner";

export default function AboutHome({ t }) {
  
  return (
    <section className="relative grid grid-col grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-[25px] min-h-[60vh] p-[24px] md:p-[50px] mt-[150px] w-full relative">
      <div className="relative row-span-1">
        <Image
          src="/images/accueil-strate-2.jpg"
          fill
          sizes={"100%"}
          priority
          alt="Team Znojmo"
          className="object-cover"
        />
      </div>
      <div className="text-black flex flex-col justify-between gap-[25px] row-span-1">
        <div className="flex flex-col gap-[25px] ">
          <h2 className="font-extrabold">{t("AboutHome.title")}</h2>
          <p>{t("AboutHome.description1")}</p>
          <p>{t("AboutHome.description2")}</p>
        </div>
        <button className="text-white font-semibold bg-primary px-[25px] py-[10px] w-fit rounded-full pointer transition-all hover:scale-105">
          <Link href="/about">{t("AboutHome.button")}</Link>
        </button>
      </div>
      <PartnerBanner />
    </section>
  );
}
