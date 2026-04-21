// pages/index.js
import React from "react";
import useToggle from "@/Hooks/useToggle";
import Meta from "@/components/Meta";
import useTranslation from "@/utils/useTranslation";
import HeaderV28 from "@/components/common/Header/HeaderV28";
import WarrantyForm from "@/components/Zero/WarrantyForm"
import FooterV28 from "@/components/common/FooterV28";
const Home = ({ langUrl, toggleLanguage }) => {
  const [drawer, toggleMenu] = useToggle(false);
  const { t } = useTranslation();
  return (
    <>
      <Meta title={t("HeadTitle")} description={t("HeadDescription")} />
      <HeaderV28 drawer={drawer} action={toggleMenu} />




      <div className="container mx-auto">
        <div className="w-full">
            <WarrantyForm />
          <FooterV28 />
        </div>
      </div>
    </>
  );
};

export default Home;
