// components/home/Header.js

import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import Image from "next/image";
import contactInfo from "../../assets/data/contactInfo.json";
import headerInfo from "@/assets/data/header.json";
import logoBlack from "/public/images/logo/logo.webp";
import Navigation from "./Navigation";
import { useLanguage } from "../../contexts/LanguageContext";
import StickyMenu from "./StickyMenu";

const Header = ({ action }) => {
  const { formatMessage } = useIntl();
  const { isArabic, handleLanguageChange } = useLanguage();
  const lang =
    formatMessage({ id: "language" }) === "language"
      ? ""
      : formatMessage({ id: "language" });

  useEffect(() => {
    StickyMenu();
  });

  return (
      <header className="header-area ak-sticky container mx-auto">
          <div className="header-nav-box rounded-2xl sm:rounded-3xl">
            <div className="flex items-center">
              <div className="w-1/2 text-start md:w-5/12 lg:w-1/4">
                <div className="logo-box">
                  <a href={`#Home`}>
                    <Image width={headerInfo.logoWidth} height={headerInfo.logoHeight} src={logoBlack} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="hidden text-center lg:block lg:w-1/2">
                <div className="header-main-menu">
                  <Navigation lang={isArabic} headerInfo={headerInfo} />
                </div>
                <span
                    className="ms-3 btn-lang  font-en cursor-pointer align-middle font-bold text-primary-50"
                    onClick={handleLanguageChange}
                  >
                    {isArabic ? "ENG" : "AR"}
                  </span>
              </div>
              <div className="w-1/2 md:w-7/12 lg:w-1/4">
                <div className="btn-box flex items-center justify-end gap-2">

                  <a
                    className="main-btn main-btn-lm border border-white font-bold text-white"
                    href={"#Contact-Us"}
                  >
                    {formatMessage({ id: "contactButtonText" })}
                  </a>
                  <div
                    onClick={() => action()}
                    className="block cursor-pointer lg:hidden"
                  >
                    <Image
                      src="/icons/menu.svg"
                      width={26}
                      height={20}
                      alt="menu button"
                      // نضيف التحويل (transform) بناءً على حالة اللغة
                      style={{
                        transform: isArabic ? "none" : "scaleX(-1)", // عكس على المحور Y إذا كانت اللغة إنجليزية
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </header>
  );
};

export default Header;
