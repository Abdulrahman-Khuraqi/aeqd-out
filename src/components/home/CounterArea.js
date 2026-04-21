import Image from "next/image";
import ScrollableAnchor from "react-scrollable-anchor";
import { useLanguage } from "@/contexts/LanguageContext";
import useTranslation from "@/utils/useTranslation";

const CounterArea = ({ style }) => {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <ScrollableAnchor id="services">
      <section className="select-none pb-16" style={style}>
        <div className="container mx-auto">
          {/* Section Title */}
          <div className="flex justify-center">
            <div className="w-full text-center">
              <div className="mb-4 text-center md:mb-8">
                <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:mb-4 md:text-5xl">
                  {t("counterAreaTitle")}
                </h2>
                <p className="smd:text-base text-sm text-gray-600">
                  {t("counterAreaSubtitle")}
                </p>
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="flex flex-col gap-x-4 gap-y-8 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-start justify-start rounded-2xl bg-white px-6 py-8 text-start shadow-lg md:flex md:flex-row">
                <div className="relative mb-4 me-4 max-w-[120px] rounded-xl bg-primary-500 md:mb-0 md:rounded-2xl">
                  <Image
                    src="/images/contract.webp"
                    alt={t("residentialServiceImageAlt")}
                    width={100}
                    height={100}
                    className="h-20 w-20 object-cover p-4 md:h-24 md:w-24 lg:mb-0"
                    sizes="(max-width: 768px) 70px, (max-width: 1024px) 100px"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {t("residentialServiceTitle")}
                  </h3>
                  <ul className="space-y-2 text-gray-600 marker:text-gray-500">
                    <li>{t("residentialServiceBullet1")}</li>
                    <li>
                      {t("residentialServiceBullet2Start")}
                      <span className="px-2 font-bold text-red-600" dir="ltr">
                        +965,402
                      </span>
                      {t("residentialServiceBullet2End")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-start justify-start rounded-2xl bg-white px-6 py-8 text-start shadow-lg md:flex md:flex-row">
                <div className="relative mb-4 me-4 max-w-[120px] rounded-xl bg-primary-500 md:mb-0 md:rounded-2xl">
                  <Image
                    src="/images/contract1.webp"
                    alt={t("commercialServiceImageAlt")}
                    width={100}
                    height={100}
                    className="h-20 w-20 object-cover p-4 md:h-24 md:w-24 lg:mb-0"
                    sizes="(max-width: 768px) 70px, (max-width: 1024px) 100px"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {t("commercialServiceTitle")}
                  </h3>
                  <ul className="space-y-2 text-gray-600 marker:text-gray-500">
                    <li>{t("commercialServiceBullet1")}</li>
                    <li>
                      {t("commercialServiceBullet2Start")}
                      <span className="px-2 font-bold text-red-600" dir="ltr">
                        +772,135
                      </span>
                      {t("commercialServiceBullet2End")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default CounterArea;
