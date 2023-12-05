import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TeamCard({ player, t }) {
  console.log(player);
  return (
    <article className="relative flex flex-col items-center gap-[10px] p-[24px] min-w-[350px]">
      <div className="relative rounded-full w-[220px] h-[220px] overflow-hidden">
        <Image
          src={`/images/players/${player.picture}`}
          alt={`${player.firstName} ${player.lastName}`}
          fill
          priority
          sizes="100%"
          className="object-cover h-full w-full  "
        />
      </div>
      <div className="grid grid-col gap-[10px] w-full">
        <h3 className="font-bold text-[24px] text-center">
          {player.firstName} <strong>{player.lastName}</strong>
        </h3>
        <div className="grid grid-cols-4 w-full justify-between">
          {player.age && (
            <div className="flex gap-[5px] items-center justify-center">
              <Image
                src="/images/age.svg"
                alt={player.age}
                width={20}
                height={20}
                priority
              />
              <span>
                {player.age} {t("age")}
              </span>
            </div>
          )}
          {player.height && (
            <div className="flex gap-[5px] items-center justify-center">
              <Image
                src="/images/height-icon.svg"
                alt={player.height}
                width={20}
                height={20}
                priority
              />
              <span>
                {player.height} {t("height")}
              </span>
            </div>
          )}
          {player.playerNumber && (
            <div className="flex gap-[5px] items-center justify-center">
              <Image
                src="/images/number.svg"
                alt={t("number")}
                width={20}
                height={20}
                priority
              />
              <span>{player.playerNumber}</span>
            </div>
          )}
          {player.position && (
            <div className="flex gap-[5px] items-center justify-center">
              <Image
                src="/images/role.svg"
                alt={player.position}
                width={20}
                height={20}
                priority
              />
              <span>
                {player.position}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-[24px] right-[24px] grid grid-col gap-[10px]">
        {player.socials.map(
          (social, index) =>
            social.link && (
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
            )
        )}
      </div>
    </article>
  );
}
