import React from "react";
import { useTranslations } from "next-intl";
import SwiperAcademy from "@/app/components/(Academy)/SwiperAcademy";
export default function Academy() {
  const t = useTranslations("Academy");
  return (
    <main className="mt-[100px] p-[24px] md:p-[50px] text-black grid gap-[24px]">
      <div className="flex flex-col md:flex-row gap-[24px] w-fit font-bold text-[25px]">
        <h2 className="whitespace-nowrap">{t("Title")}</h2>
        <p>{t("Description1")}</p>
      </div>
      <section className="overflow-hidden">
        <SwiperAcademy />
      </section>
    </main>
  );
}
