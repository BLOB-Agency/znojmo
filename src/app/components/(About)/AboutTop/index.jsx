import React from 'react'

export default function AboutTop({t}) {
  return (
    <section className="mt-[100px] p-[24px] md:p-[50px] text-black grid gap-[24px]">
    <h2 className="font-bold text-[25px]">{t("Title")}</h2>
    <div className="grid grid-col sm:grid-cols-2 gap-[24px] ">
      <p>
       {t("Description1")}
      </p>
      <p>
      {t("Description2")}
      </p>
    </div>
  </section>
  )
}
