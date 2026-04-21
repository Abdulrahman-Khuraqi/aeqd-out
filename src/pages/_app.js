// import '@/styles/bootstrap.min.css';
import "@/styles/default.css";
import "@/styles/header.css";
import "@/styles/style.css";
import "@/styles/main.css";
import "@/styles/button.css";
import "@/styles/hero.css";
import "@/styles/image.css";
import "../styles/globals.css";
import "@/styles/contract.css";
import { IntlProvider } from "react-intl";
import { Suspense } from "react";
import { LanguageProvider, useLanguage } from "../contexts/LanguageContext";

// Arabic Messages
import arAll from "../locales/ar/all.json";

// English Messages
import enAll from "../locales/en/all.json";

const messages = {
  ar: {
    ...arAll,
  },
  en: {
    ...enAll,
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <LanguageConsumer Component={Component} pageProps={pageProps} />
    </LanguageProvider>
  );
}

const LanguageConsumer = ({ Component, pageProps }) => {
  const { isArabic, langUrl, handleLanguageChange } = useLanguage();
  const localeMessages = isArabic ? messages["ar"] : messages["en"];
  const locale = isArabic ? "ar" : "en";

  return (
    <IntlProvider locale={locale} messages={localeMessages} defaultLocale="ar">
      <Suspense fallback={<div>Loading...</div>}>
        <Component
          {...pageProps}
          langUrl={langUrl}
          toggleLanguage={handleLanguageChange}
        />
      </Suspense>
    </IntlProvider>
  );
};

export default MyApp;
