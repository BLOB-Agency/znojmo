import Image from "next/image";
import React from "react";

export default function AboutBottom({ t }) {
  return (
    <section className="flex flex-col text-black p-[24px] md:p-[50px] grid gap-[24px]">
      <div className="flex flex-col md:flex-row gap-[24px]">
        <h2 className="w-fit whitespace-nowrap font-bold text-[25px]">{t("TitleTop")}</h2>
        <p>{t("DescriptionTop")}</p>
      </div>
      <div className="relative  min-h-[400px]">
        <Image
          src={"/images/about-strate-3.jpg"}
          fill
          priority
          objectPosition="center"
          sizes="100%"
          alt="logo Znojmo"
          className="object-cover "
        />
      </div>
    </section>
  );
}
