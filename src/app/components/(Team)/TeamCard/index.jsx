import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TeamCard({
  socials,
  firstName,
  lastName,
  age,
  weight,
  position,
  number,
  image,
  t,
}) {
  return (
    <article className="flex flex-col p-[24px]">
      <div className="relative rounded-full w-[300px] h-[300px]">
        <Image
          src={image}
          alt={firstName}
          fill
          priority
          sizes="100%"
          className="object-fit"
        />
      </div>
      <div>
        <h3>
          {firstName} <strong>{lastName}</strong>
        </h3>
        <div className="grid grid-cols-3">
          <div>
            <Image src="/icons/age.svg" alt={t("Age")} width={20} height={20} />
            <span>{age}</span>
          </div>
          <div>
            <Image
              src="/icons/weight.svg"
              alt={t("Age")}
              width={20}
              height={20}
            />
            <span>{weight}</span>
          </div>
          <div>
            <Image
              src="/icons/number.svg"
              alt={t("Age")}
              width={20}
              height={20}
            />
            <span>{number}</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[24px] right-[24px] grid grid-col gap-[10px]">
        {socials.map((social, index) => (
          <Link href={social.link} key={index} className="transition-all duration-400 hover:scale-105">
            <Image src={social.icon} alt={social.name} width={20} height={20} />
          </Link>
        ))}
      </div>
    </article>
  );
}
