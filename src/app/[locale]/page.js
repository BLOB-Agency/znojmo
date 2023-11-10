import { useTranslations } from "next-intl";
import Link from "next/link";
import AboutHome from "../components/(Home)/AboutHome";
import ExploreHome from "../components/(Home)/ExploreHome";

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
      <section
        className="flex flex-col items-center justify-center p-[24px] pt-[150px] min-h-screen"
        style={{
          backgroundImage: styles.backgroundImage,
          backgroundRepeat: styles.repeat,
          backgroundSize: styles.backgroudSize,
          backgroundPosition: styles.backgroundPosition,
        }}
      >
        <div className="flex flex-col gap-[25px] items-center">
          <h1 className="text-[50px] font-bold text-center">
            {t("title")}
          </h1>
          <p className="text-[25px] text-center">{t("subtitle")}</p>
          <button className="bg-primary rounded-full px-[25px] py-[10px] w-fit pointer transition-all hover:scale-105">
            <Link className="text-[14px] pointer block" href="/contact">
              {t("contactBtn")}
            </Link>
          </button>
        </div>
      </section>
      <AboutHome t={t} />
      <ExploreHome t={t} />
    </main>
  );
}
