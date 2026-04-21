import React from "react";
import useTranslation from "@/utils/useTranslation";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Animated from "@/components/Animated";

const AdvancedSolutions = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      title: t("aiPersonalizationTitle", { defaultMessage: "الشخصنة اللحظية باستخدام الذكاء الاصطناعي" }),
      description: t("aiPersonalizationDescription", {
        defaultMessage: "بفضل الذكاء الاصطناعي المتقدم، نقوم بتخصيص التجربة لكل عميل بشكل فوري. هذا لا يعني مجرد تخصيص الرسالة، بل يعني تقديم تجربة مصممة بالكامل حسب اهتمامات العميل وسلوكه في الوقت الحقيقي",
      }),
      animationSrc: "https://lottie.host/279b8a8c-25d8-4456-80db-e61cd7d076dd/0IHTQL6lv5.lottie",
    },
    {
      title: t("behavioralAnalysisTitle", { defaultMessage: "التحليل السلوكي العميق" }),
      description: t("behavioralAnalysisDescription", {
        defaultMessage: "نستخدم الاقتصاد السلوكي لفهم الطريقة التي يتخذ بها العملاء قراراتهم. نحلل العوامل النفسية ونخلق حلولًا تسويقية تستجيب لها بطرق ذكية. نحن لا نرسل رسائل عشوائية، بل نوجه رسائل مدروسة تدفع العميل للتفاعل في اللحظة المناسبة.",
      }),
      animationSrc: "https://lottie.host/279b8a8c-25d8-4456-80db-e61cd7d076dd/0IHTQL6lv5.lottie",
    },
  ];

  return (
    <div className="py-16 mt-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        {t("ourAdvancedSolutionsTitle", { defaultMessage: "حلولنا المتقدمة" })}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((solution, index) => (
          <Animated key={index} animationType="fade">
            <div className="bg-black-500 p-6 border border-gray-600 rounded-2xl shadow-lg flex flex-col ">
              <div>
                <DotLottieReact
                  src={solution.animationSrc}
                  autoplay
                  loop
                  className="h-full w-full"
                />
              </div>
              <div className=" pl-4">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-400">
                  {solution.description}
                </p>
              </div>
            </div>
          </Animated>
        ))}
      </div>
    </div>
  );
};

export default AdvancedSolutions;
