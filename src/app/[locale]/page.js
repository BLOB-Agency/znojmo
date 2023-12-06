import { useTranslations } from "next-intl";
import Link from "next/link";
import AboutHome from "../components/(Home)/AboutHome";
import ExploreHome from "../components/(Home)/ExploreHome";
import Cta from "../components/(Home)/Cta";
import PartnerBanner from "../components/(Home)/PartnerBanner";

export default function Home() {
  const t = useTranslations("Index");

  const styles = {
    backgroundImage:
      "linear-gradient(#00000052, #00000052),url(/images/accueil-hero.jpg);",
    backgroundPosition: "65%",
    repeat: "no-repeat",
    backgroudSize: "cover",
  };
  return (
    <main className=" flex flex-col gap-[50px] ">
      <section className="flex flex-col items-center justify-center p-[24px] pt-[150px] min-h-screen">
        <video
          src="/images/home-video.mov"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        ></video>
        <div className="flex flex-col gap-[25px] items-center z-2 absolute">
          <h1 className="text-[50px] font-bold text-center">{t("title")}</h1>
          <p className="text-[25px] text-center">{t("subtitle")}</p>
          <button className="bg-primary rounded-full px-[25px] py-[10px] w-fit pointer transition-all hover:scale-105">
            <Link className="text-[16px] pointer block " href="/contact">
              {t("contactBtn")}
            </Link>
          </button>
        </div>
        <PartnerBanner />
      </section>
      <AboutHome t={t} />
      <ExploreHome t={t} />
      <Cta t={t} />
    </main>
  );
}
