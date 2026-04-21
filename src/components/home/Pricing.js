import ButtonX from "@/components/common/Button";
import ScrollableAnchor from "react-scrollable-anchor";
import Link from "next/link";
import { CheckIcon } from "@/components/common/Icons";
import useTranslation from "@/utils/useTranslation";

// Arrow icon helper functions
const arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.7}
      stroke="currentColor"
      className="r ms-1 size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
};

const Pricing = ({ className }) => {
  const { t } = useTranslation();

  return (
    <ScrollableAnchor id="Certify">
      <section className={`pricing-area pt-90 pb-90 ${className || ""}`}>
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-4 text-center md:mb-8">
                <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:mb-4 md:text-5xl">
                  {t("pricingTitle")}
                </h2>
                <p>{t("pricingSubtitle")}</p>
              </div>
            </div>
          </div>
          <div className="tabed-content">
            <div>
              <div className="flex-warp justify-center gap-4 md:flex">
                {/* Residential Pricing Card */}
                <div className="wow animated fadeInUp sm:w-1/2 lg:w-1/3">
                  <div className="pricing-one__single rounded-2xl text-start">
                    <div className="pricig-heading">
                      <h3>{t("residentialTitle")}</h3>
                      <div className="price-range">
                        <span>{t("residentialPrice")}</span>
                        <p>{t("priceCurrency")}</p>
                      </div>
                    </div>
                    <div className="pricig-body">
                      <ul>
                        <li>
                          <CheckIcon
                            stroke="#31c369"
                            className="me-1 inline p-1"
                          />
                          {t("residentialFeature1")}
                        </li>
                        <li>
                          <CheckIcon
                            stroke="#31c369"
                            className="me-1 inline p-1"
                          />
                          {t("residentialFeature2")}
                        </li>
                        <li>
                          <CheckIcon
                            stroke="#31c369"
                            className="me-1 inline p-1"
                          />
                          {t("residentialFeature3")}
                        </li>
                        <li>
                          <CheckIcon
                            stroke="#31c369"
                            className="me-1 inline p-1"
                          />
                          {t("residentialFeature4")}
                        </li>
                      </ul>
                      <div className="pricing-btn r mt-35">
                        <ButtonX
                          iconAfter={arrow()}
                          className="main-btn"
                          href="/residential"
                        >
                          {t("orderNewButton")}
                        </ButtonX>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Commercial Pricing Card */}
                <div className="wow animated fadeInUp sm:w-1/2 lg:w-1/3">
                  <div className="pricing-one__single rounded-2xl text-start">
                    <div className="pricig-heading">
                      <h3>{t("commercialTitle")}</h3>
                      <div className="price-range">
                        <span>{t("commercialPrice")}</span>
                        <p>{t("priceCurrency")}</p>
                      </div>
                    </div>
                    <div className="pricig-body">
                      <ul>
                        <li>
                          <CheckIcon
                            stroke="#31c369"
                            className="me-1 inline p-1"
                          />
                          {t("commercialFeature1")}
                        </li>
                        <li>
                          <CheckIcon
                            stroke="#31c369"
                            className="me-1 inline p-1"
                          />
                          {t("commercialFeature2")}
                        </li>
                        <li>
                          <CheckIcon
                            stroke="#31c369"
                            className="me-1 inline p-1"
                          />
                          {t("commercialFeature3")}
                        </li>
                      </ul>
                      <div className="pricing-btn r mt-35">
                        <ButtonX
                          iconAfter={arrow()}
                          tag={Link}
                          className="main-btn"
                          href="/commercial"
                        >
                          {t("orderNewButton")}
                        </ButtonX>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Pricing;
