import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Cta({ t }) {
  return (
    <section className="grid grid-col sm:flex sm:flex-row-reverse items-center justify-center  gap-[24px] p-[24px] md:p-[50px]">
      <div className="flex flex-col items-center sm:items-start gap-[10px]">
        <h2 className="text-black font-bold">{t("CTA.title")}</h2>
        <p className="text-black">{t("CTA.description")}</p>
        <button className="rounded-full w-fit bg-primary font-semibold px-[25px] py-[10px] transition-all duration-400 hover:scale-105">
          <Link href="/contact">{t("CTA.button")}</Link>
        </button>
      </div>
      <Image src={"/images/cta.png"} width={400} height={400} priority alt="cta" />
    </section>
  );
}
