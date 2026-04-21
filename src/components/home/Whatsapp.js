import React from "react";
import contactInfo from "../../assets/data/contactInfo.json";
import style from "./whatsapp.module.css";
import { WhatsApp } from "@/components/common/Icons";
import useTranslation from "@/utils/useTranslation";

const Whatsapp = () => {
  const { t } = useTranslation();

  return (
    <div className={style.whatsapp}>
      <a
        href={contactInfo.whatsapplink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("whatsappAriaLabel")}
      >
        <WhatsApp fill="#fff" />
      </a>
      <span className={style.whatsapp_text}>{t("whatsappText")}</span>
    </div>
  );
};

export default Whatsapp;
