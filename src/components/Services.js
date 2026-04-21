import React from "react";
import useTranslation from "@/utils/useTranslation";
import Animated from "@/components/Animated";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("creativeDesignTitle", { defaultMessage: "التصميم الإبداعي الموجه بالسلوك" }),
      description: t("creativeDesignDescription", {
        defaultMessage: "كل تصميم يبدأ مما يريده الجمهور المستهدف...",
      }),
      buttonText: t("viewOurCreations", { defaultMessage: "شاهد إبداعاتنا" }),
      link: "#",
    },
    {
      title: t("aiCampaignsTitle", { defaultMessage: "إدارة الحملات بالذكاء الاصطناعي" }),
      description: t("aiCampaignsDescription", {
        defaultMessage: "تحقق حملاتك أفضل النتائج مع الذكاء الاصطناعي...",
      }),
      buttonText: t("learnHowWeUseAi", { defaultMessage: "اكتشف كيف نستخدم الذكاء" }),
      link: "#",
    },
    {
      title: t("webUserExperienceTitle", { defaultMessage: "المواقع الإلكترونية وتجربة المستخدم" }),
      description: t("webUserExperienceDescription", {
        defaultMessage: "نجعل من مواقع الويب تجربة مذهلة وسلسة...",
      }),
      buttonText: t("requestUXConsultation", { defaultMessage: "اطلب استشارة تجربة المستخدم" }),
      link: "#",
    },
    {
      title: t("specializedContentTitle", { defaultMessage: "المحتوى المرئي المتخصص" }),
      description: t("specializedContentDescription", {
        defaultMessage: "المحتوى الذي يلامس روح الجمهور هو المفتاح...",
      }),
      buttonText: t("getCustomVisualContent", { defaultMessage: "احصل على تجربة مرئية مخصصة" }),
      link: "#",
    },
  ];

  return (
    <div className=" py-16 mt-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        {t("ourServicesTitle", { defaultMessage: "خدماتنا" })}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Animated key={index} animationType="fade">
            <div className="bg-black-500 border border-gray-600 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <a
                href={service.link}
                className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300"
              >
                {service.buttonText}
              </a>
            </div>
          </Animated>
        ))}
      </div>
    </div>
  );
};

export default Services;
