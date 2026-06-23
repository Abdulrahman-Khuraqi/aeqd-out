import { useRouter } from "next/router";
import useToggle from "../Hooks/useToggle";
import React, { createContext, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { push, pathname, asPath, query } = useRouter();
  const langFromPath = query.lang || (pathname.startsWith("/en") ? "en" : "ar"); // الحصول على اللغة من المعلمة أو المسار
  const isPathnameEnglish = langFromPath === "en";
  const [isArabic, toggleLanguage] = useToggle(!isPathnameEnglish);

  useEffect(() => {
    const html = document.querySelector("html");
    if (isArabic) {
      html.lang = "ar";
      html.dir = "rtl";
    } else {
      html.lang = "en";
      html.dir = "ltr";
    }
  }, [isArabic]);

  const handleLanguageChange = async () => {
    const newLocale = isArabic ? "en" : "ar";
    let newPathname = pathname;
    let newAsPath = asPath;

    if (newLocale === "en") {
      newPathname = pathname.startsWith("/en") ? pathname : `/en${pathname}`;
      newAsPath = asPath.startsWith("/en") ? asPath : `/en${asPath}`;
    } else {
      newPathname = pathname.replace(/^\/en/, "") || "/";
      newAsPath = asPath.replace(/^\/en/, "") || "/";
    }

    await push({ pathname: newPathname, query }, newAsPath, {
      locale: newLocale,
    });
    toggleLanguage();
  };

  return (
    <LanguageContext.Provider
      value={{ isArabic, handleLanguageChange, langUrl: isArabic ? "" : "en" }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
