import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ContactForm from "@/app/components/(Contact)/ContactForm";

export default function Contact() {
  const t = useTranslations("Contact");
  console.log(t);
  return (
    <main className=" flex flex-col-reverse sm:grid sm:grid-cols-2 gap-[48px] items-center min-h-[80vh] mt-[100px] p-[24px] md:p-[50px] text-black ">
      <div className="relative h-[400px] sm:h-full w-full">
        <Image
          className="object-contain "
          src={"/images/cta.png"}
          priority
          fill="responsive"
          alt="Footbal Player"
        />
      </div>

      <div className="flex flex-col gap-[24px]">
        <h2 className="font-bold text-[25px]">{t("Title")}</h2>
        <ContactForm
          name={t("Form.name")}
          namePh={t("Form.namePh")}
          email={t("Form.email")}
          emailPh={t("Form.emailPh")}
          message={t("Form.message")}
          messagePh={t("Form.messagePh")}
          submitBtn={t("Form.button")}
        />
      </div>
    </main>
  );
}
