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
      <div className="md:col-span-2">
        <h2>{t("ExploreHome.title")}</h2>
        <p>{t("ExploreHome.description")}</p>
      </div>
      {Array.from({ length: numberOfLinks }, (_, index) => (
        <Link
          href={t(`ExploreHome.link${index}`)}
          key={index}
          className="relative md:col-span-1 min-h-[250px]"
        >
          <Image
            className="object-cover "
            src={`/images/${t(`ExploreHome.linkImg${index}`)}`}
            alt={t(`ExploreHome.linkTitle${index}`)}
            fill
            sizes="100%"
            priority
          />
          <span>{t(`ExploreHome.linkTitle${index}`)}</span>
        </Link>
      ))}
    </section>
  );
}
