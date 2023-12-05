import React from "react";
import { useTranslations } from "next-intl";
import players from "/public/datas/players.json";
import TeamCard from "@/app/components/(Team)/TeamCard";
export default function Team() {
  const t = useTranslations("Team");
  // let's fetch the datas from datas/player.json

  return (
    <main className="mt-[100px] p-[24px] md:p-[50px] text-black grid gap-[24px]">
      <div className='flex flex-col md:flex-row gap-[24px] w-fit font-bold text-[25px]'>
        <h2 className="whitespace-nowrap">{t("Title")}</h2>
        <p>{t("Description1")}</p>
      </div>
      <section className="grid md:grid-cols-2 xl:grid-cols-3 xl-grid-cols-4 ">
        {players &&
          players.map((player, index) => (
            <TeamCard key={index} player={player} t={t} />
          ))}
      </section>
    </main>
  );
}
