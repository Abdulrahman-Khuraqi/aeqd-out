import Image from "next/image";
import ScrollableAnchor from "react-scrollable-anchor";
import useTranslation from "@/utils/useTranslation";

const Features = ({ className }) => {
  const { t } = useTranslation();

  return (
    <ScrollableAnchor id="features">
      <section className={`service-area pt-50 pb-70 select-none ${className}`}>
        <div className="container mx-auto select-none">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="mb-4 text-center md:mb-8">
                <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:mb-4 md:text-5xl">
                  {t("featuresTitle")}
                </h2>
                <p className="smd:text-base text-sm text-gray-600">
                  {t("featuresSubtitle")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3">
            {/* First Card */}
            <div className="single-service rounded-2xl text-start">
              <div className="icon relative rounded-2xl">
                <Image
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                  src={"/images/icon/1.webp"}
                  width={40}
                  height={40}
                  alt={t("feature1IconAlt")}
                />
                <span className="rounded-lg bg-gray-50">1</span>
              </div>
              <h3 className="title">{t("feature1Title")}</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 marker:text-gray-500">
                <li>
                  <span className="block rounded-lg bg-gray-50 p-2">
                    {t("feature1Bullet1")}
                  </span>
                </li>
                <li>
                  <span className="block rounded-lg bg-gray-50 p-2">
                    {t("feature1Bullet2")}
                  </span>
                </li>
                <li>
                  <span className="block rounded-lg bg-gray-50 p-2">
                    {t("feature1Bullet3")}
                  </span>
                </li>
              </ul>
            </div>
            {/* Second Card */}
            <div className="single-service mt-30 item-2 rounded-2xl text-start md:mt-0">
              <div className="icon relative rounded-2xl">
                <Image
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                  src={"/images/icon/2.webp"}
                  width={40}
                  height={40}
                  alt={t("feature2IconAlt")}
                />
                <span className="rounded-lg bg-gray-50">2</span>
              </div>
              <h3 className="title">{t("feature2Title")}</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 marker:text-gray-500">
                <li>
                  <span className="block rounded-lg bg-gray-50 p-2">
                    {t("feature2Bullet1")}
                  </span>
                </li>
                <li>
                  <span className="block rounded-lg bg-gray-50 p-2">
                    {t("feature2Bullet2")}
                  </span>
                </li>
                <li>
                  <span className="block rounded-lg bg-gray-50 p-2">
                    {t("feature2Bullet3")}
                  </span>
                </li>
              </ul>
            </div>
            {/* Third Card */}
            <div className="single-service mt-30 item-3 rounded-2xl text-start md:mt-0">
              <div className="icon relative rounded-2xl">
                <Image
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                  src={"/images/icon/3.webp"}
                  width={40}
                  height={40}
                  alt={t("feature3IconAlt")}
                />
                <span className="rounded-lg bg-gray-50">3</span>
              </div>
              <h3 className="title">{t("feature3Title")}</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 marker:text-gray-500">
                <li>
                  <span className="block rounded-lg bg-gray-50 p-2">
                    {t("feature3Bullet1")}
                  </span>
                </li>
                <li>
                  <span className="block rounded-lg bg-gray-50 p-2">
                    {t("feature3Bullet2")}
                  </span>
                </li>
                <li>
                  <span className="block rounded-lg bg-gray-50 p-2">
                    {t("feature3Bullet3")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="icon mt-50 flex justify-center">
          <Image
            src={"/images/arrow.webp"}
            width={95}
            height={95}
            alt={t("featuresArrowAlt")}
          />
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Features;
