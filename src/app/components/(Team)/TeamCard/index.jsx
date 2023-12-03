import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TeamCard({ player, t }) {
  console.log(player);
  return (
    <article className="relative flex flex-col items-center gap-[10px] p-[24px] min-w-[350px]">
      <div className="relative rounded-full w-[200px] h-[200px] overflow-hidden">
        <Image
          src={`/images/players/${player.picture}`}
          alt={`${player.firstName} ${player.lastName}`}
          fill
          priority
          sizes="100%"
          className="object-cover h-full w-full "
        />
      </div>
      <div className="grid grid-col gap-[10px] w-fit">
        <h3 className="font-bold text-[24px] text-center">
          {player.firstName} <strong>{player.lastName}</strong>
        </h3>
        <div className="grid grid-cols-3 w-full justify-between">
          <div className="flex gap-[10px] items-center justify-center">
            <Image
              src="/images/age.svg"
              priority
              alt={player.age}
              width={20}
              height={20}
            />
            <span>{player.age} {t("age")}</span>
          </div>
          <div className="flex gap-[10px] items-center justify-center">
            <Image
              src="/images/weight.svg"
              alt={player.weight}
              width={20}
              height={20}
              priority
            />
            <span>{player.weight} {t("weight")}</span>
          </div>
          <div className="flex gap-[10px] items-center justify-center">
            <Image
              src="/images/number.svg"
              alt={t("Age")}
              width={20}
              height={20}
              priority
            />
            <span>{t("number")} {player.number}</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[24px] right-[24px] grid grid-col gap-[10px]">
        {player.socials.map((social, index) => (
          <Link
            href={social.link}
            key={index}
            className="transition-all duration-400 hover:scale-105"
          >
            <Image
              src={"/images/" + social.icon}
              alt={social.name}
              priority
              width={20}
              height={20}
            />
          </Link>
        ))}
      </div>
    </article>
  );
}
