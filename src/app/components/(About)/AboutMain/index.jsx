import React from "react";
import Image from "next/image";
export default function AboutMain({ t }) {
  const styles = {
    backgroundImage: "url(/images/bg-about.png);",
    repeat: "no-repeat",
    backgroudSize: "cover",
  };
  return (
    <main
      className="bg-secondary p-[24px] md:p-[50px] grid gap-[24px]"
      style={{
        backgroundImage: styles.backgroundImage,
        backgroundRepeat: styles.repeat,
        backgroundSize: styles.backgroudSize,
      }}
    >
      <Image
        className="m-auto"
        src={"/images/logo_sc-znojmo.png"}
        width={60}
        height={60}
        priority
        alt="logo Znojmo"
      />
      <div className="flex items-center text-center gap-[10px]">
        <span className="w-full h-[1px] bg-white"></span>
        <h2 className="w-fit whitespace-nowrap font-bold text-[25px]">{t("Title2")}</h2>
        <span className="w-full h-[1px] bg-white"></span>
      </div>
      <div className="grid grid-col md:grid-cols-2 gap-[24px]">
        <div className="flex flex-col gap-[24px] md:order-2">
          <h3 className="font-semibold text-[20px]">{t("Subtitle1")}</h3>
          <p>{t("Description3")}</p>
        </div>
        <div className="relative min-h-[300px] w-full md:order-1">
          <Image
            className="object-cover"
            src={"/images/about-strate-2a.jpg"}
            fill
            priority
            sizes={"100%"}
            alt="logo Znojmo"
          />
        </div>

        <div className="flex flex-col gap-[24px] md:order-3">
          <h3 className="font-semibold text-[20px]">{t("Subtitle2")}</h3>
          <p>{t("Description4")}</p>
        </div>
        <div className="relative min-h-[300px] w-full md:order-4">
          <Image
            className="object-cover"
            src={"/images/about-strate-2b.jpg"}
            fill
            priority
            sizes={"100%"}
            alt="logo Znojmo"
          />
        </div>
      </div>
    </main>
  );
}
