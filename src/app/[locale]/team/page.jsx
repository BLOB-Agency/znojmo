import React from "react";
import { useTranslations } from "next-intl";
export default function Team() {
  const t = useTranslations("Team");
  return (
    <main className="mt-[100px] p-[24px] md:p-[50px] text-black grid gap-[24px]">
      <div className='flex flex-col md:flex-row gap-[24px] "w-fit whitespace-nowrap font-bold text-[25px]'>
        <h2>{t("Title")}</h2>
        <p>{t("Description1")}</p>
      </div>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4">
        {/* Map through team datas using TeamCard Component */}

      </section>
    </main>
  );
}
