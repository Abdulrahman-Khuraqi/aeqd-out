
//ak-components
//HeaderV28 2024-11-26 13:04:59

import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import Image from "next/image";
import headerInfo from "@/assets/data/header.json";
import { useLanguage } from "../../../contexts/LanguageContext";
import StickyMenu from "./StickyMenu";
import { Bars3Sold } from "../Icons";
import ButtonX from "@/components/common/Button";
import SideMenu from "./SideMenu";
import Link from "next/link";

const HeaderV28 = ({ action }) => {
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
      <header className="header-area ak-sticky header_v28 container mx-auto">
        <div className="bg-secondary-800 bg-opacity-50 backdrop-blur-md rounded-full px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-start w-3/12">
              <div className="cursor-pointer" onClick={toggleMenu}>
                <Bars3Sold fill="white" width="40" height="40" />
              </div>
            </div>
            <div className="md:w-6/12 text-end md:text-center">
              <div className="logo-box">
                <Link href={`/#Home`}>
                  <Image
                    width={headerInfo.logoWidth}
                    height={headerInfo.logoHeight}
                    src={headerInfo.logo}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className="w-3/12 text-end md:block hidden">
              <div className="btn-box flex items-center justify-end gap-2">
                <ButtonX className='' href={'/#contact-us'} size="lg">
                  {formatMessage({ id: "contactButtonText" })}
                </ButtonX>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Side Menu */}
      <SideMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isArabic={isArabic}
      />
    </>
  );
};

export default HeaderV28;
