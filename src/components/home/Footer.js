import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollableAnchor from "react-scrollable-anchor";
import {
  EnvelopeOutlineIcon,
  WhatsApp,
  PhoneOutlineIcon,
} from "@/components/common/Icons";
import contactInfo from "@/assets/data/contactInfo.json";
import useTranslation from "@/utils/useTranslation";

function Footer({ className }) {
  const { t } = useTranslation();

  return (
    <>
      <ScrollableAnchor id="footer">
        <section
          className={`footer-area footer-3-area  ${className || ""}`}
        >
          <div className="container mx-auto">
            <div className="flex-wrap md:flex">
              {/* قسم عن الشركة */}
              <div className="md:w-1/2 lg:w-5/12">
                <div className="footer-about-widget text-start">
                  <div className="logo">
                    <a href="#">
                      <Image
                        loading="lazy"
                        height="50"
                        width="101"
                        src={"/images/logo-02.webp"}
                        alt={t("footerLogoAlt")}
                      />
                    </a>
                  </div>
                  <p>{t("footerAboutText")}</p>
                </div>
              </div>
              {/* قسم الروابط (الخدمات) */}
              <div className="md:w-1/2 lg:w-2/12">
                <div className="footer-navigation text-start">
                  <h4 className="title">
                    {t("footerNavigationServicesTitle")}
                  </h4>
                  <ul>
                    <li>
                      <Link href="/residential">
                        {t("footerServiceResidential")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/commercial">
                        {t("footerServiceCommercial")}
                      </Link>
                    </li>
                    <li>
                      <a href="#Subscriptions">{t("footerServiceContracts")}</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* قسم الروابط (المميزات) */}
              <div className="md:w-1/2 lg:w-2/12">
                <div className="footer-navigation text-start">
                  <h4 className="title">
                    {t("footerNavigationFeaturesTitle")}
                  </h4>
                  <ul>
                    <li>
                      <a href="#features">{t("footerFeatureHighTrust")}</a>
                    </li>
                    <li>
                      <a href="#features">{t("footerFeatureTimeSaving")}</a>
                    </li>
                    <li>
                      <a href="#features">{t("footerFeatureStrongSupport")}</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* قسم الاتصال */}
              <div className="md:w-1/2 lg:w-3/12">
                <div className="footer-widget-info text-start">
                  <h4 className="title">{t("footerContactTitle")}</h4>
                  <ul>
                    <li>
                      <EnvelopeOutlineIcon
                        width="18"
                        height="18"
                        stroke="#5ac6ca"
                        className="me-1 inline"
                      />
                      <a href={contactInfo.emaillink}>{contactInfo.email}</a>
                    </li>
                    <li>
                      <PhoneOutlineIcon
                        width="18"
                        height="18"
                        stroke="#5ac6ca"
                        className="me-1 inline"
                      />
                      <a dir="ltr" href={contactInfo.phonelink}>
                        {contactInfo.phone}
                      </a>
                    </li>
                    <li>
                      <WhatsApp
                        width="18"
                        height="18"
                        fill="#5ac6ca"
                        className="me-1 inline"
                      />
                      <a
                        dir="ltr"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={contactInfo.whatsapplink}
                      >
                        {contactInfo.phone}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              {/* يمكنك تفعيل هذا القسم إذا رغبت بإظهار شهادات أو تراخيص إضافية */}
              {/*
              <div className="w-full text-center md:w-1/2 md:text-left">
                <div className="footer-cer d-flex align-iteme-center pt-35">
                  <div className="cer-text">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"/pdf/ejar.pdf"}
                      alt="شهادة عضوية إيجار"
                    >
                      {t("footerEjarCertificate")}
                    </a>
                    <a
                      href={"/pdf/ترخيص الهيئة العامة للعقار.pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="رخصة ممارسة نشاط عقاري"
                    >
                      {t("footerRealEstateLicense")}
                    </a>
                  </div>
                </div>
              </div>
              */}
              <div className="w-full text-center">
                <div className="footer-copyright d-flex pt-35">
                  <div className="copyright-text">
                    <p>
                      {t("footerCopyrightText")}{" "}
                      <a href="#">{t("footerCompanyName")}</a>{" "}
                      {new Date().getFullYear()} ©{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    </>
  );
}

export default Footer;
