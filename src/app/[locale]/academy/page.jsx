import React from "react";
import { useTranslations } from "next-intl";
import SwiperAcademy from "@/app/components/(Academy)/SwiperAcademy";
export default function Academy() {
  const t = useTranslations("Academy");
  return (
    <main className="mt-[100px] p-[24px] md:p-[50px] text-black grid gap-[48px]">
      <div className="flex flex-col md:flex-row gap-[24px] w-fit font-bold text-[25px]">
        <h2 className="whitespace-nowrap">{t("Title")}</h2>
        <p>{t("Description1")}</p>
      </div>
      <section className="overflow-hidden grid gap-[48px]">
        <SwiperAcademy />
        <div>
          <h3 className="font-bold text-[24px]">
            Our Academy based on two fundamental aspect: Analysis and Resolution
            of practical case ans constant work on the pitch. You will be
            immersed in the reality of professional football under the guidance
            of leading professionals.
          </h3>
          <div className="grid md:grid-cols-2 gap-[10px] mt-[10px]">
            <p>
              Our unique learning environment provides players with the
              opportunity to train daily in state-of-the-art facilities, guided
              by UEFA Pro and UEFA A coaches. As we maintain professional
              standards, we expect total commitment and support for the project
              from our players.
              <br />
              They are encouraged to take charge of their personal development,
              understanding that their future success hinges on a positive
              attitude, diligent work, and a strong mentality. Our academy
              integrates a modern coaching philosophy with traditional values,
              aiming to educate young players in new styles and mindsets of
              football. This approach ensures a comprehensive development
              experience, enhancing our footballers' technical, tactical,
              mental, and personal growth.
            </p>
            <p>
              Professional immersion is a key aspect of our program, featuring
              guidance from some of the most diverse and experienced experts in
              football. Our coaching team and tutors work tirelessly, providing
              24-hour mental and physical support to optimize our athletes'
              performance. In competitive settings such as league matches,
              national cups, or fixtures against professional clubs, our players
              are tested at the highest levels.
              <br />
              These matches are filmed, and each player receives a promotional
              clip at the end of the season. Originating as a modest amateur
              football club, Znojmo has evolved into a modern and professional
              football club, earning respect and recognition for its
              professionalism from the Czech Football Federation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
