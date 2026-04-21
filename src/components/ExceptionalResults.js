// components/ExceptionalResults.js
import React from "react";
import useTranslation from "@/utils/useTranslation";
import Animated from "@/components/Animated";

const ExceptionalResults = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-dark-800 px-4 mt-20">
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-4xl font-bold text-white mb-6">
          {t("exceptionalResultsTitle", { defaultMessage: "كيف نحقق لك نتائج مذهلة؟" })}
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          {t("exceptionalResultsDescription", {
            defaultMessage:
              "اكتشف كيف نستخدم الذكاء الاصطناعي لتحليل سلوك العملاء في الوقت الفعلي وإعداد استراتيجيات تركز على تحقيق أعلى العوائد الاستثمارية",
          })}
        </p>
        <Animated animationType="zoomIn">
          <a
            href="#"
            className="inline-block bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition duration-300 text-lg font-semibold"
          >
            {t("tryAiToolButton", { defaultMessage: "جرب أداة الذكاء الاصطناعي الآن" })}
          </a>
        </Animated>
      </div>
    </section>
  );
};

export default ExceptionalResults;
