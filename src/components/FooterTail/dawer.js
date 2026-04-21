import Image from "next/image";
import { useIntl } from "react-intl";
import contactInfo from "../../assets/data/contactInfo.json";

const Footer = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      {/* صورة الانحناء العلوي */}
      <div className="flex justify-center pt-16">
        <Image
          src="/images/footer-curve.webp"
          alt="Footer Curve"
          width={1440}
          height={250}
          className="hidden w-full xsm:block"
        />
        <Image
          src="/images/mobile-footer-curve.webp"
          alt="Footer Curve"
          width={394}
          height={54}
          className="block w-full xsm:hidden"
        />
      </div>
      <footer className="relative bg-primary-900 text-white">
   

        <div className="container mx-auto mb-24 grid grid-cols-1 gap-8 px-2 pb-12 pt-12 sm:pt-24 md:grid-cols-3 md:justify-between">
          {/* جزء نبذة عن الشركة */}
          <div className="mb-12 flex flex-1 flex-col text-center md:mb-0 md:text-start">
            <h3 className="mb-6 text-2xl font-bold text-primary-100 md:mb-8">
              {formatMessage({ id: "footerCompanyTitle" })}
            </h3>
            <p className="text-lg text-primary-200">
              {formatMessage({ id: "footerCompanyDescription" })}
            </p>
          </div>

          {/* جزء الروابط السريعة */}
          <div className="mb-12 flex flex-1 flex-col text-center md:mb-0">
            <h3 className="mb-8 text-2xl font-bold text-primary-100">
              {formatMessage({ id: "footerQuickLinksTitle" })}
            </h3>
            <ul className="space-y-6 text-base text-primary-200">
              <li>
                <a href="#Home" className="hover:text-white">
                  {formatMessage({ id: "footerQuickLinkHome" })}
                </a>
              </li>
              <li>
                <a href="#Services" className="hover:text-white">
                  {formatMessage({ id: "footerQuickLinkServices" })}
                </a>
              </li>
              <li>
                <a href="#Clients" className="hover:text-white">
                  {formatMessage({ id: "footerQuickLinkClients" })}
                </a>
              </li>
            </ul>
          </div>

          {/* جزء معلومات الاتصال */}
          <div className="flex flex-col text-center md:text-start">
            <div className="md:ms-auto md:w-[275px]">
              <h3 className="mb-8 text-2xl font-bold text-primary-100">
                {formatMessage({ id: "footerContactTitle" })}
              </h3>

              <p className="mb-2 text-lg text-primary-200">
                <span className="bg-primary-gradient-light bg-clip-text font-bold text-transparent">
                  {formatMessage({ id: "footerContactAddressLabel" })}
                </span>{" "}
                {formatMessage({ id: "footerContactAddress" })}
              </p>

              <a
                rel="noreferrer"
                target="_blank"
                href={`tel:${contactInfo.phone}`}
                className="mb-2 text-lg text-primary-200"
              >
                <span className="bg-primary-gradient-light bg-clip-text font-bold text-transparent">
                  {formatMessage({ id: "footerContactPhoneLabel" })}
                </span>{" "}
                <span dir="ltr">{contactInfo.phoneView}</span>
              </a>

              <a
                rel="noreferrer"
                target="_blank"
                href={`mailto:${contactInfo.email}`}
                className="mb-4 text-lg text-primary-200"
              >
                <span className="bg-primary-gradient-light bg-clip-text font-bold text-transparent">
                  {formatMessage({ id: "footerContactEmailLabel" })}
                </span>{" "}
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
        {/* الجزء السفلي */}
        <div className="container mx-auto mt-4 border-t border-primary-700 pt-4 text-center text-sm md:mt-8">
          <p className="pb-4 text-primary-300">
            {formatMessage({ id: "footerRightsReserved" })}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
