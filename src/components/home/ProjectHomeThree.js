import React from "react";
import contactInfo from "@/assets/data/contactInfo.json";
import ButtonX from "@/components/common/Button";
import ScrollableAnchor from "react-scrollable-anchor";
import useTranslation from "@/utils/useTranslation";

function ProjectHomeThree({ className }) {
  const { t } = useTranslation();

  return (
    <ScrollableAnchor id="contactus">
      <section className={`project-3-area pb-16 ${className}`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div className="w-full">
              <div className="project-3-box flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0 md:text-start">
                <h3 className="text-lg font-semibold !leading-relaxed text-white md:text-4xl">
                  {t("projectHomeThreeTitle")} <br />
                  <span>{t("projectHomeThreeSubtitle")}</span>
                </h3>
                <ButtonX
                  size="lg"
                  variant="primary"
                  rel={true}
                  href={contactInfo.whatsapplink}
                >
                  {t("projectHomeThreeButton")}
                </ButtonX>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}

export default ProjectHomeThree;
