import React from "react";
import Image from "next/image";
import ScrollableAnchor from "react-scrollable-anchor";
import { useIntl } from "react-intl";

const arrowLeft = (
  <svg
    width="16"
    height="13"
    viewBox="0 0 16 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5001 6.3642C15.5001 6.52996 15.4342 6.68893 15.317 6.80614C15.1998 6.92335 15.0409 6.9892 14.8751 6.9892H7.3751V11.9892C7.37548 12.1126 7.33934 12.2333 7.27121 12.3362C7.20309 12.4391 7.10604 12.5195 6.99229 12.5673C6.91519 12.5979 6.83305 12.6138 6.7501 12.6142C6.58413 12.6135 6.42476 12.5492 6.30479 12.4345L0.679785 6.80951C0.562422 6.69101 0.496582 6.53098 0.496582 6.3642C0.496582 6.19742 0.562422 6.03738 0.679785 5.91888L6.30479 0.293885C6.39515 0.209097 6.50768 0.151628 6.62934 0.128124C6.75101 0.104621 6.87684 0.116044 6.99229 0.161072C7.10604 0.208886 7.20309 0.2893 7.27121 0.392181C7.33934 0.495062 7.37548 0.615806 7.3751 0.739197V5.7392H14.8751C15.0409 5.7392 15.1998 5.80505 15.317 5.92226C15.4342 6.03947 15.5001 6.19844 15.5001 6.3642Z"
      fill="white"
    />
  </svg>
);

const Services = () => {
  const { formatMessage } = useIntl();

  return (
    <ScrollableAnchor id="Services">
      <section className="px-2 pt-16">
        {/* العنوان "خدماتنا التقنية المتكاملة" */}
        <div className="mb-4 text-center">
          <span className="rounded-full border bg-primary-100 px-4 py-1 font-semibold text-primary-700">
            {formatMessage({ id: "servicesTitle" })}
          </span>
        </div>

        <div className="container mx-auto text-center">
          <h2 className="mb-3 bg-primary-gradient bg-clip-text text-3xl font-bold text-transparent sm:mb-4 md:text-5xl md:leading-tight">
            {formatMessage({ id: "servicesHeading" })}
          </h2>
          <p className="w-m-[360px] mx-auto mb-8 text-base text-gray-500 sm:w-full sm:text-lg">
            {formatMessage({ id: "servicesDescription" })}
          </p>

          {/* البنية التحتية الرقمية والأمن السيبراني */}
          <div className="mb-6 flex flex-col items-center justify-center gap-6 rounded-3xl bg-primary-50 pb-16 md:mb-12 md:px-20 md:py-10 lg:flex-row">
            <div className="mt-8 md:mt-0 lg:w-7/12">
              <Image
                src="/images/digital-infrastructure-cybersecurity.webp" // ضع هنا مسار الصورة المرفوعة لخادمك
                width={575}
                height={610}
                alt={formatMessage({ id: "infrastructureAltText" })}
                className="p-5 pb-0 md:p-0"
              />
            </div>
            <div className="flex flex-col justify-center lg:block lg:w-5/12 lg:text-start">
              <h3 className="bg-primary-gradient bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl md:leading-snug">
                {formatMessage({ id: "infrastructureTitle" })}
              </h3>
              <h3 className="mb-4 bg-primary-gradient-light bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl md:leading-snug">
                {formatMessage({ id: "cybersecurityTitle" })}
              </h3>

              <ul className="py-6 text-lg text-gray-600 md:list-inside md:list-disc">
                <li className="mb-3">
                  {formatMessage({ id: "infrastructureService1" })}
                </li>
                <li className="mb-3">
                  {formatMessage({ id: "infrastructureService2" })}
                </li>
                <li className="mb-3">
                  {formatMessage({ id: "infrastructureService3" })}
                </li>
              </ul>
              <a
                href="#Contact-Us"
                className="mt-6 inline-flex transform items-center justify-center gap-2 rounded-full bg-primary-gradient px-8 py-3 font-semibold text-white shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
              >
                {formatMessage({ id: "requestConsultation" })}
                {arrowLeft}
              </a>
            </div>
          </div>

          {/* باقي الخدمات */}
          <div className="grid grid-cols-1 gap-6 text-start md:gap-8 lg:grid-cols-3">
            {/* التحول الرقمي والذكاء الاصطناعي */}
            <div className="flex flex-col rounded-3xl bg-primary-50 px-10 py-12">
              <Image
                src="/images/digital-transformation-artificial-intelligence.webp" // ضع هنا مسار الصورة المرفوعة
                width={70}
                height={83}
                alt={formatMessage({ id: "digitalTransformationAltText" })}
              />
              <h4 className="mb-4 mt-4 text-2xl font-bold text-primary-500">
                {formatMessage({ id: "digitalTransformationTitle" })}
              </h4>
              <p className="text-gray-600">
                {formatMessage({ id: "digitalTransformationDescription" })
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            </div>
            {/* خدمات الأمن والمراقبة */}
            <div className="flex flex-col rounded-3xl bg-primary-50 px-10 py-12">
              <Image
                src="/images/security-and-surveillance-services.webp" // ضع هنا مسار الصورة المرفوعة
                width={83}
                height={83}
                alt={formatMessage({ id: "securityAltText" })}
              />
              <h4 className="mb-4 mt-4 text-2xl font-bold text-primary-500">
                {formatMessage({ id: "securityTitle" })}
              </h4>
              <p className="text-gray-600">
                {formatMessage({ id: "securityDescription" })
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            </div>
            {/* إدارة الأعمال */}
            <div className="flex flex-col rounded-3xl bg-primary-50 px-10 py-12">
              <Image
                src="/images/business-management-solutions.webp" // ضع هنا مسار الصورة المرفوعة
                width={101}
                height={83}
                alt={formatMessage({ id: "businessManagementAltText" })}
              />
              <h4 className="mb-4 mt-4 text-2xl font-bold text-primary-500">
                {formatMessage({ id: "businessManagementTitle" })}
              </h4>
              <p className="text-gray-600">
                {formatMessage({ id: "businessManagementDescription" })
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Services;
