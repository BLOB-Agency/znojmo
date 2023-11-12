import React from "react";
import { useTranslations } from "next-intl";
import AboutTop from "@/app/components/(About)/AboutTop";
import AboutMain from "@/app/components/(About)/AboutMain";
import AboutBottom from "@/app/components/(About)/AboutBottom";
export default function About() {
  const t = useTranslations("About");
  return (
    <>
      <AboutTop t={t} />
      <AboutMain t={t} />
      <AboutBottom t={t} />
    </>
  );
}
