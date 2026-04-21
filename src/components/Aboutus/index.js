import React from "react";
import Image from "next/image";
import ScrollableAnchor from "react-scrollable-anchor";
import { useIntl } from "react-intl";

const AboutUs = () => {
  const { formatMessage } = useIntl();

  return (
    <ScrollableAnchor id="About-Us">
      <section className="px-2 pt-16">
        {/* العنوان "من نحن" */}
        <div className="mb-4 text-center">
          <span className="rounded-full border bg-primary-100 px-4 py-1 font-semibold text-primary-700">
            {formatMessage({ id: "aboutUsTitle" })}
          </span>
        </div>

        <div className="container mx-auto text-center">
          <h2 className="mb-4 bg-primary-gradient bg-clip-text text-3xl font-bold text-transparent md:text-5xl md:leading-tight">
            {formatMessage({ id: "aboutUsHeading" })}
          </h2>
          <p className="mb-8 text-base text-gray-500 sm:text-lg">
            {formatMessage({ id: "aboutUsDescription" })}
            <span className="hidden xsm:block">
              {formatMessage({ id: "aboutUsDescriptionSpan" })}
            </span>
          </p>

          {/* البنر الرئيسي */}
          {/* <div
            className="relative mb-8 h-[350px] rounded-3xl bg-cover bg-center md:h-[425px]"
            style={{
              backgroundImage: 'url("/images/aboutus-background-logo.webp")',
            }}
          >
            <div className="flex h-full items-center justify-center rounded-3xl">
              <div>
                <Image
                  src="/images/about-logo.webp"
                  width="378"
                  height="128"
                  alt="dawaer"
                  className="w-[220px] md:w-[378px]"
                />
              </div>
            </div>
          </div> */}
          <div className="hidden md:block">
            <Image
              src={"/images/aboutus-background-logo1.webp"}
              width={1320}
              height={350}
              alt="aboutus"
              className="mb-8 h-[250px] rounded-3xl bg-cover object-cover md:h-[500px]"
            />
          </div>
          <div className="block md:hidden">
            <Image
              src={"/images/aboutus-background-logo1-phone.webp"}
              width={1320}
              height={350}
              alt="aboutus"
              className="mb-8 rounded-3xl md:h-[350px]"
            />
          </div>
          {/* الرسالة والرؤية */}
          <div className="grid grid-cols-1 gap-8 text-start md:grid-cols-2">
            <div
              className="relative rounded-3xl bg-cover bg-center px-2 py-12 shadow-lg md:px-8"
              style={{
                backgroundImage: 'url("/images/message-background.webp")',
              }}
            >
              <div className="rounded-3xl p-4">
                <h3 className="mb-6 text-3xl font-bold leading-tight text-secondary-100">
                  {formatMessage({ id: "aboutUsMissionTitle" })}
                </h3>
                <p className="text-lg text-primary-200">
                  {formatMessage({ id: "aboutUsMissionDescription" })}
                </p>
              </div>
            </div>
            <div
              className="relative rounded-3xl bg-cover bg-center px-2 py-12 shadow-lg md:px-8"
              style={{
                backgroundImage: 'url("/images/vision-background.webp")',
              }}
            >
              <div className="rounded-3xl p-4">
                <h3 className="mb-6 text-3xl font-bold leading-tight text-secondary-100">
                  {formatMessage({ id: "aboutUsVisionTitle" })}
                </h3>
                <p className="text-lg text-primary-200">
                  {formatMessage({ id: "aboutUsVisionDescription" })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default AboutUs;
