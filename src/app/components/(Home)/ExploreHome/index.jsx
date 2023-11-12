import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ExploreHome({ t }) {
  const numberOfLinks = 6; // The fixed number of links you have

  const styles = {
    backgroundImage:
      "linear-gradient(#00000052, #00000052), url(/images/exploreHome.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <section
      className="grid grid-col gap-[10px] p-[24px] md:p-[50px] md:grid-row md:grid-cols-4"
      style={styles}
    >
      <div className="md:col-span-2 flex flex-col justify-center">
        <h2 className="font-bold">{t("ExploreHome.title")}</h2>
        <p>{t("ExploreHome.description")}</p>
      </div>
      {Array.from({ length: numberOfLinks }, (_, index) => (
        <Link
          href={t(`ExploreHome.link${index}`)}
          key={index}
          className="relative md:col-span-1 min-h-[250px] overflow-hidden"
        >
          <Image
            className="object-cover brightness-[75%]  w-full h-full scale-[130%] hover:scale-100 transition-all duration-300 ease-in-out"
            src={`/images/${t(`ExploreHome.linkImg${index}`)}`}
            alt={t(`ExploreHome.linkTitle${index}`)}
            fill
            sizes="100%"
            priority
          />
          <span className="absolute bottom-[10px] left-[10px] font-bold">{t(`ExploreHome.linkTitle${index}`)}</span>
          <Image src={"/images/arrow-upright.svg"} width={15} height={15} alt="arrow" className="absolute top-[10px] right-[10px]" />
        </Link>
      ))}
    </section>
  );
}
