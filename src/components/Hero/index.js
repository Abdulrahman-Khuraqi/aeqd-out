import React from "react";
import Animated from "@/components/Animated";
import ScrollableAnchor from "react-scrollable-anchor";
import { useLanguage } from "../../contexts/LanguageContext";
import useTranslation from '@/utils/useTranslation'; // Custom hook for translation



const Hero = ({ className }) => {
  const { isArabic } = useLanguage();
  const { t } = useTranslation();

  return (
    <ScrollableAnchor id="Home">
      <div
        className="relative flex h-[700px] w-full items-center justify-center bg-cover bg-center"
      >
        <video
          autoPlay
          loop 
          muted
          className="absolute top-0 left-0 h-full w-full object-cover"
        >
          <source src="/video/heroBackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          <section className={`hero-area text-center ${className || ""}`}>
            <div className="container px-2">
              <div className="flex justify-center">
                <div className="">
                  <div className="flex flex-col space-y-12 text-center">
                    {/* العنوان على الابتوب */}
                    <div className="hidden md:!mt-0 md:block">
                      <Animated
                        animationType="title"
                        className="bg-custom-gradient bg-clip-text text-5xl font-bold uppercase !leading-normal text-transparent md:text-8xl"
                      >
                        {t("heroTitle")}
                      </Animated>
                      <Animated animationType="title">
                        <h2 className="mt-4 bg-custom-gradient bg-clip-text text-2xl !leading-normal text-transparent md:text-4xl">
                          {t("heroSubtitle")}
                        </h2>
                      </Animated>
                    </div>

                    {/*  الوصف */}
                    <Animated
                      animationType="opacity"
                      className={"mx-auto max-w-6xl"}
                    >
                      <p className="hidden text-base md:text-xl font-regular leading-relaxed text-gray-200 md:block">
                        {t("heroDescription")}
                      </p>
                    </Animated>

                    {/* الأزرار */}
                    <div className="mt-6 flex flex-col-reverse justify-center gap-3 md:flex-row">
                      <Animated animationType="button">
                        <div className="bg-black-500 rounded-full border border-gray-600">
                          <span className="text-white px-10">
                          {t("heroCallToAction", { defaultMessage: "كن قائدًا في تحولك الرقمي" })}
                          </span>
                          <a
                            className="border-3 rounded-full bg-white text-black-500 px-11 py-2.5 text-xl font-bold  transition duration-500 ease-in-out hover:-translate-y-2 hover:!border-secondary-500 hover:bg-secondary-800 hover:shadow-2xl md:text-lg"
                            href={"#Contact-Us"}
                          >
                            {t("heroButtonText")}
                          </a>
                        </div>
                      </Animated>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ScrollableAnchor>
  );
};

export default Hero;
