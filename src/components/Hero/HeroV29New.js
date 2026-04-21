import { useLanguage } from "@/contexts/LanguageContext";
import useTranslation from "@/utils/useTranslation";
import Link from "next/link";
import Image from "next/image";
import ScrollableAnchor from "react-scrollable-anchor";
import ButtonX from "@/components/common/Button";

// Data (images)
const smallImage = "/images/hero/hero_small.webp";
const bigImage = "/images/hero/hero_big.webp";

const HeroV29New = () => {
  const { isArabic, handleLanguageChange } = useLanguage(); // Get language state and toggle function
  const { t } = useTranslation(); // Get the translation function

  return (
    <ScrollableAnchor id="home">
      <section
        dir={isArabic ? "rtl" : "rtl"}
        className={`hero-area hero-5-area hero-3-area ${isArabic ? "background-new" : "background-new"} pt-[200px]`}
        id="hero"
      >
        <div className="justify-center">
          <div className="select-none">
            <div className="hero-content text-center">
              <h1 className="title text-white">{t("heroTitle")}</h1>
              <p className="mt-8 font-light text-gray-100">
                {t("heroSubtitle")}
              </p>
              <div className="hero-btns">
                <ButtonX
                  tag={Link}
                  className="btn__main btn1"
                  href="/residential"
                >
                  {t("residentialButton")}
                </ButtonX>
                <ButtonX
                  tag={Link}
                  className="btn__main btn1"
                  href="/commercial"
                >
                  {t("commercialButton")}
                </ButtonX>
              </div>
              <div className="thumb mt-10">
                <Image
                  src={bigImage}
                  alt={t("heroImageAlt")}
                  className="mx-auto hidden sm:block"
                  width={700}
                  height={586}
                  loading="eager"
                  priority={true}
                />
                <Image
                  src={smallImage}
                  alt={t("heroImageAlt")}
                  className="mx-auto block sm:hidden"
                  width={700}
                  height={586}
                  loading="eager"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default HeroV29New;
