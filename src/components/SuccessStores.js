// components/SuccessStories.js
import React from "react";
import useTranslation from "@/utils/useTranslation";
import Animated from "@/components/Animated";

const SuccessStories = () => {
  const { t } = useTranslation();

  const stories = [
    {
      text: t("successStory1", {
        defaultMessage:
          "قمنا بتحليل سلوك الجمهور المستهدف في قطاع التكنولوجيا، ما أدى إلى تحسن معدل التفاعل بنسبة 200% ورفع معدل التحويلات إلى مستويات غير مسبوقة.",
      }),
    },
    {
      text: t("successStory2", {
        defaultMessage:
          "بفضل استخدام تقنياتنا المتطورة في الذكاء الاصطناعي، استطعنا تحسين عائد الاستثمار بنسبة 150% لأحد أكبر عملائنا في قطاع التجزئة خلال ستة أشهر فقط.",
      }),
    },
    {
      text: t("successStory3", {
        defaultMessage:
          "قمنا بتحليل سلوك الجمهور المستهدف في قطاع التكنولوجيا، ما أدى إلى تحسن معدل التفاعل بنسبة 200% ورفع معدل التحويلات إلى مستويات غير مسبوقة.",
      }),
    },
  ];

  return (
    <section className="bg-black-500 mt-20">
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        {t("successStoriesTitle", { defaultMessage: "قصص النجاح" })}
      </h2>
      <div className="flex flex-col md:flex-row gap-8  justify-center px-4">
        {stories.map((story, index) => (
          <Animated key={index} animationType="fade">
            <div className="bg-dark-700 border border-gray-600 p-6 rounded-2xl  text-white text-center shadow-lg w-full">
              <p className="text-lg text-white">{story.text}</p>
            </div>
          </Animated>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
