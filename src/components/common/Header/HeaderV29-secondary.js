//ak-components
//HeaderV28 2024-11-26 13:04:59

import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import Image from "next/image";
import headerInfo from "@/assets/data/header.json";
import { useLanguage } from "../../../contexts/LanguageContext";
import StickyMenu from "./StickyMenu";
import ButtonX from "@/components/common/Button";
import SideMenu from "./SideMenu";
import Link from "next/link";
import NavList from "./NavList";
import { Bars3Sold } from "@/components/common/Icons";
import contactInfo from "@/assets/data/contactInfo.json";
import { WhatsApp } from "../Icons";

const HeaderV29 = ({ action }) => {
  const { formatMessage } = useIntl();
  const { isArabic } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for side menu visibility

  useEffect(() => {
    StickyMenu();
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header-area ak-sticky header_v29 mx-auto bg-secondary-500 py-4">
        <div className="container rounded-full bg-opacity-50 backdrop-blur-md">
          <div className="flex items-center">
            <div className="text-start md:w-2/12">
              <div className="logo-box">
                <Link href={`/#home`}>
                  <Image
                    width={headerInfo.logoWidth}
                    height={headerInfo.logoHeight}
                    src={headerInfo.logo}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className="w-7/12 text-start">
              <NavList links={headerInfo.linksAr} className="hidden lg:flex" />
              {/* Side Menu */}
            </div>
            <div className="hidden w-3/12 text-end lg:block">
              <div className="btn-box flex items-center justify-end gap-2">
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
