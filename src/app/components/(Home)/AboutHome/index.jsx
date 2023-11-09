import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutHome({ t }) {
  const logos = [
    "logo-kfc.png",
    "logo-premium-hotel.png",
    "logo-znojmo.png",
    "nevoga_logo.png",
    "logo-ds-duma.png",
    "logo-starbuck.png",
  ];
  return (
    <section className="grid grid-col grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-[25px] min-h-[60vh] p-[24px] md:p-[50px] mt-[150px] w-full relative">
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
      <div className="absolute bg-white  trusted-by w-fit md:w-[80%] left-0 sm:left-auto flex justify-self-center top-[-35%] sm:top-[-45%] overflow-hidden ">
        <div className="bg-black w-fit text-center flex justify-center items-center p-[10px] pl:[24px] sm:pl-[50px] relative w-[200px] overflow-hidden">
          <h3 className="font-bold absolute z-[4] absolute ">TRUSTED BY</h3>
        </div>
        <div className=" flex w-[180px]  bg-white p-[10px]  pr-[50px] ">
        {" "}
          <div className="logo-container space-x-4 ">
            {Array.from({ length: 2 }).flatMap((_, repeatIndex) =>
              logos.map((logo, index) => (
                <div
                  key={`${repeatIndex}-${index}`}
                  className="logo-slide  relative w-[50px] h-[50px]"
                >
                  <Image
                    src={`/images/${logo}`}
                    fill
                    priority
                    sizes={100}
                    alt="Logo Partner"
                    className="object-contain"
                  />
                </div>
              ))
            )}
            {Array.from({ length: 2 }).flatMap((_, repeatIndex) =>
              logos.map((logo, index) => (
                <div
                  key={`${repeatIndex}-${index}`}
                  className="logo-slide  relative w-[50px] h-[50px]"
                >
                  <Image
                    src={`/images/${logo}`}
                    fill
                    priority
                    sizes={100}
                    alt="Logo Partner"
                    className="object-contain"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
