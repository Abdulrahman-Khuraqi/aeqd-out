import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import Image from "next/image";
import headerInfo from "@/assets/data/header.json";
import { useLanguage } from "@/contexts/LanguageContext";
import StickyMenu from "./StickyMenu";
import ButtonX from "@/components/common/Button";
import SideMenu from "./SideMenu";
import Link from "next/link";
import NavList from "./NavList";
import { Bars3Sold } from "@/components/common/Icons";
import contactInfo from "@/assets/data/contactInfo.json";
import { WhatsApp } from "./../Icons";

const HeaderV29 = ({ action }) => {
  const { formatMessage } = useIntl();
  const { isArabic, handleLanguageChange } = useLanguage(); // Get language state and toggle function
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for side menu visibility

  useEffect(() => {
    StickyMenu();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header-area ak-sticky header_v29 mx-auto">
        <div className="container rounded-full bg-opacity-50 backdrop-blur-md mx-auto">
          <div className="flex items-center justify-between">
            {/* Left side: Logo */}
            <div className="text-start md:w-1/12">
              <div className="logo-box">
                <a href={`/#home`}>
                  <Image
                    width={headerInfo.logoWidth}
                    height={headerInfo.logoHeight}
                    src={headerInfo.logo}
                    alt="logo"
                  />
                </a>
              </div>
            </div>
            {/* Center: Navigation and Language Toggle */}
            <div className="flex w-7/12 items-center justify-start">
              <NavList
                links={isArabic ? headerInfo.linksAr : headerInfo.linksEn}
                className="hidden lg:flex"
              />
            </div>
            {/* Right side: Contact Button or Mobile Menu */}
            <div className="hidden w-3/12 text-end lg:block">
              <div className="btn-box flex items-center justify-end gap-1">
                {/* Language Toggle Button */}
                <button
                  onClick={handleLanguageChange}
                  className="ml-2 rounded-full px-2 py-2 text-sm text-gray-100 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  aria-label="تغيير اللغة"
                >
                  {isArabic ? "EN" : "عربي"}
                </button>
                <ButtonX
                  variant="outline"
                  href={contactInfo.whatsapplink}
                  size="md"
                >
                  {formatMessage({ id: "contactButtonText" })}
                </ButtonX>
              </div>
            </div>
            <div className="block w-3/12 text-end lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-2xl"
                aria-label="فتح القائمة"
              >
                <Bars3Sold />
              </button>
            </div>
          </div>
        </div>
        <SideMenu
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isArabic={isArabic}
        />
      </header>
    </>
  );
};

export default HeaderV29;
