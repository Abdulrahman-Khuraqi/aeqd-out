import ScrollableAnchor from "react-scrollable-anchor";
import useTranslation from "@/utils/useTranslation";

const WorkSteps = () => {
  const { t } = useTranslation();

  // تعريف بيانات الخطوات باستخدام مفاتيح مسطحة مباشرةً
  const stepsData = [
    {
      number: "1",
      titleKey: "step1Title",
      descriptionKey: "step1Description",
    },
    {
      number: "2",
      titleKey: "step2Title",
      descriptionKey: "step2Description",
    },
    {
      number: "3",
      titleKey: "step3Title",
      descriptionKey: "step3Description",
    },
    {
      number: "4",
      titleKey: "step4Title",
      descriptionKey: "step4Description",
    },
    {
      number: "5",
      titleKey: "step5Title",
      descriptionKey: "step5Description",
    },
    {
      number: "6",
      titleKey: "step6Title",
      descriptionKey: "step6Description",
    },
  ];

  return (
    <ScrollableAnchor id="steps">
      <section className="select-none bg-secondary-500 py-16">
        <div className="container mx-auto">
          <div className="mb-4 text-center md:mb-8">
            <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl md:mb-4 md:text-5xl">
              {t("stepsTitle")}
            </h2>
            <p className="smd:text-base e mx-auto text-sm text-gray-300">
              {t("stepsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="border-700 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-gray-500 bg-primary-500">
                    <span className="font-tektur text-2xl font-bold text-gray-700">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      {t(step.titleKey)}
                    </h3>
                    <p className="font-light leading-relaxed text-gray-500">
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default WorkSteps;
