// components/WhyChooseKMI.js
import Image from "next/image";
import useTranslation from "@/utils/useTranslation";
import Animated from "@/components/Animated";

const WhyChooseKMI = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: "/images/all/unique-experience-icon.webp ", // Updated to .webp
      title: t("uniqueUserExperienceTitle", {
        defaultMessage: "تجربة مستخدم فريدة",
      }),
      description: t("uniqueUserExperienceDesc", {
        defaultMessage:
          "مواقعنا ليست مجرد مواقع، بل أدوات تسويقية متقدمة تعمل على رفع معدلات التحويل وتعزيز الأداء.",
      }),
    },
    {
      icon: "./images/all/measurable-results-icon.webp", // Updated to .webp
      title: t("measurableResultsTitle", {
        defaultMessage: "نتائج قابلة للقياس",
      }),
      description: t("measurableResultsDesc", {
        defaultMessage:
          "نحن نضمن لك نتائج حقيقية ملموسة تزيد من أرباحك وتحدث ولاء عملائك.",
      }),
    },
    {
      icon: "/images/all/ai-core-icon.webp", // Updated to .webp
      title: t("aiCoreOfWorkTitle", {
        defaultMessage: "الذكاء في جوهر عملنا",
      }),
      description: t("aiCoreOfWorkDesc", {
        defaultMessage:
          "نستخدم الذكاء الاصطناعي لتحليل سلوك العملاء وضمان نجاح الحملات التسويقية.",
      }),
    },
  ];

  return (
    <section className=" mt-20">
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        {t("whyChooseKMITitle", { defaultMessage: "لماذا تختار KMI؟" })}
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center px-4">
        {features.map((feature, index) => (
          <Animated key={index} animationType="fade">
            <div className="bg-dark-700 border border-gray-600 p-6 rounded-xl  text-white shadow-lg w-full ">
              <Image src={feature.icon} alt={feature.title} width={60} height={60} />
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-sm text-white">{feature.description}</p>
            </div>
          </Animated>
        ))}
      </div>

      <div className=" mt-12 p-8 rounded-2xl bg-black-500 border border-gray-600 flex flex-col md:flex-row gap-8 text-white">
      <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            {t("valueTitle", { defaultMessage: "القيمة التي نقدمها" })}
          </h3>
          <p className="mb-4 text-white">
            {t("valueDescription", {
              defaultMessage:
                "نحن لا نقدم حلولاً برفع التحويلات في KMI، بل نساعدك على قيادة التحول التسويقي. باستخدام الذكاء الاصطناعي والابتكار، حملاتنا ليست فقط عن التسويق، بل عن بناء علاقات مستدامة مع عملائك، وتحقيق النمو المتصاعد في سوقك.",
            })}
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-md">
            {t("bookConsultation", { defaultMessage: "احجز استشارة" })}
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/all/ai-value.webp" // Updated to .webp
            alt={t("valueImageAlt", { defaultMessage: "AI Image" })}
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseKMI;
