import Image from "next/image";
import Link from "next/link";
import useTranslation from "@/utils/useTranslation";

const LicensesSection = () => {
  const { t } = useTranslation();

  // تعريف بيانات التراخيص مع مفتاح alt بدلاً من النص الثابت
  const licensesData = [
    {
      image: "/images/logo/ejar.webp",
      altKey: "license1Alt",
      description: "1116623371",
      width: 184,
      pdf: "/pdf/ejar-1.pdf",
    },
    {
      image: "/images/logo/rega.webp",
      altKey: "license2Alt",
      description: "1116623371",
      width: 300,
      pdf: "/pdf/rega-1.pdf",
    },
    {
      image: "/images/logo/sbc.webp",
      altKey: "license3Alt",
      description: "1200014131",
      width: 350,
      pdf: "/pdf/sbc.pdf",
    },
  ];

  return (
    <section className="py-16" dir="rtl">
      <div className="container mx-auto">
        <div className="mb-4 text-center md:mb-8">
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl">
            {t("licensesSectionTitle")}
          </h2>
          <p className="mx-auto max-w-4xl text-sm text-gray-500 md:text-sm">
            {t("licensesSectionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {licensesData.map((license, index) => (
            <div
              key={index}
              className="flex justify-center rounded-2xl bg-gray-50 p-6 transition-all"
            >
              <a href={license.pdf} target="_blank" rel="noopener noreferrer">
                <div className="mb-4 flex items-center justify-center p-5">
                  <Image
                    src={license.image}
                    alt={t(license.altKey)}
                    width={license.width}
                    height={85}
                    className="max-h-[70px] object-contain"
                  />
                </div>
                <p className="font-regular mx-auto max-w-[190px] rounded-lg  text-center text-base text-gray-600">
                  {license.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicensesSection;
