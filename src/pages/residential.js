/* eslint-disable react/destructuring-assignment */
import { React, useEffect, useState } from "react";
import StepWizard from "react-step-wizard";

import useToggle from "@/components/Hooks/useToggle";
import contactInfo from "@/assets/data/contactInfo.json";
import Step1 from "@/components/Residential/step/Step1";
import Step2 from "@/components/Residential/step/Step2";
import Step3 from "@/components/Residential/step/Step3";
import Step4 from "@/components/Residential/step/Step4";
import Step5 from "@/components/Residential/step/Step5";
import Step6 from "@/components/Residential/step/Step6";
import Step7 from "@/components/Residential/step/Step7";
import Meta from "@/components/common/Meta";

const custom = {
  enterRight: "animate__animated animate__fadeIn ",
  enterLeft: "animate__animated animate__fadeIn ",
  exitRight: "",
  exitLeft: "",
  intro: " ",
};

const STEP_LABELS = [
  "المستندات المطلوبة",
  "نوع الصك والمؤجر",
  "بيانات المؤجر",
  "بيانات المستأجر",
  "معلومات الصك",
  "معلومات العقد",
  "العنوان الوطني",
];

const StepIndicator = ({ currentStep, totalSteps }) => {
  const label = STEP_LABELS[currentStep - 1] || "";
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div
      dir="rtl"
      className="mx-auto mb-5 w-full max-w-2xl rounded-2xl bg-white/95 p-4 shadow-md backdrop-blur"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-full bg-primary-500 px-3 py-1 text-sm font-bold text-white">
          الخطوة {currentStep} من {totalSteps}
        </span>
        <span className="text-base font-semibold text-gray-700">{label}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-primary-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

const Residential = () => {
  // eslint-disable-next-line no-unused-vars
  const [lang, setLang] = useToggle(true);
  const [newContract, setNewContract] = useState(false);
  useEffect(() => {
    const html = document.getElementsByTagName("html");

    if (lang) {
      html[0].lang = "ar";
      html[0].dir = "rtl";
      html[0].style.background = "#2b354d";
    } else {
      html[0].lang = "en";
      html[0].dir = "";
      html[0].style.background = "#2b354d";
    }
    return () => {
      html[0].lang = "en";
      html[0].dir = "";
      html[0].style.background = "#2b354d";
    };
  });
  // eslint-disable-next-line no-unused-vars
  const [stepWizard, setStepWizard] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = STEP_LABELS.length;
  const [lessor, setLessor] = useState("");
  const [contractImage, setContractImage] = useState("");
  const [isDevMode, setDevMode] = useState(true);

  const [info, setInfo] = useState({
    lessorOrlessee: "",
    lessor: "",
    propertyContract: "",
    lessorName: "",
    lessorIdNumber: "",
    lessorPhone: "",
    lessorBirthday: "",
    lessorIban: "",
    lesseeName: "",
    lesseeIdNumber: "",
    lesseePhone: "",
    lesseeBirthday: "",
    propertyContractId: "",
    propertyContractDate: "",
    propertyType: "",
    propertyUse: "",
    buildingFloorsNo: "",
    rentAmount: "",
    paymentMethod: "",
    startingDate: "",
    contractDuration: "",
    unitType: "",
    FloorNo: "",
    apartmentNo: "",
    roomNo: "",
    space: "",
    insurance: "",
    dailyFine: "",
    water: "",
    waterNo: "",
    electricity: "",
    electricityNo: "",
    city: "",
    buildingNo: "",
    postalCode: "",
    extraNo: "",
    contracturl: "",
    brokerAssistantId: "",
    area: "",
    // Unit details (required)
    unitUse: "",

    // Unit details (advanced / optional)
    unitCreationDate: "",
    unitDirection: "",
    unitFinishing: "",
    frontFacadeLength: "",
    unitLength: "",
    unitWidth: "",
    unitHeight: "",
    hasMezzanine: false,
    isFurnished: false,

    // Unit facilities (advanced / optional)
    hasUnitFacilities: "",
    bedroomsCount: "",
    bathroomsCount: "",
    hallsCount: "",
    maidRoom: false,
    kitchensCount: "",
    storageRoom: false,
    majlis: false,
    backyard: false,
    centralAC: false,
    splitAC: false,
    desertAC: false,
    windowAC: false,
    kitchenCabinetsInstalled: false,
    additionalServices: "",
    electricityMeter: false,
    gasMeterNumber: "",
    waterMeter: false,
    parkingSpotsCount: "",
  });
  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const handleName = () => {
    console.log("step change");

    console.log("info:", info);
  };

  return (
    <>
      <Meta title={" عقد سكني | عقد إيجار إلكتروني موثق"} />
      <div className="contract flex items-center justify-center">
        <div className="contract__container container flex justify-center text-center">
          {/* <HeaderHomeRtl className="appie-header-area-rtl " /> */}
          {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
          <div className="flex-column min-vh-100 justify-content-center align-items-center">
            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
            <StepWizard
              instance={assignStepWizard}
              onStepChange={({ activeStep }) => { handleName(); setCurrentStep(activeStep); }}
              transitions={custom}
              className="contract__content"
            >
              <Step1 info={info} setInfo={setInfo} isDevMode={isDevMode}  />
              {/* <SendEmail info={info} setInfo={setInfo} /> */}
              <Step2 info={info} setInfo={setInfo} isDevMode={isDevMode}  />
              <Step3
                lessor={lessor}
                setLessor={setLessor}
                info={info}
                setInfo={setInfo}
                contractImage={contractImage}
                setContractImage={setContractImage}
                isDevMode={isDevMode}
              />
              <Step4
                contractImage={contractImage}
                setContractImage={setContractImage}
                info={info}
                setInfo={setInfo}
                isDevMode={isDevMode}
              />
              <Step5
                contractImage={contractImage}
                setContractImage={setContractImage}
                info={info}
                setInfo={setInfo}
                newContract={newContract}
                setNewContract={setNewContract}
                isDevMode={isDevMode}
              />
              <Step6
                contractImage={contractImage}
                setContractImage={setContractImage}
                info={info}
                setInfo={setInfo}
                newContract={newContract}
                setNewContract={setNewContract}
                isDevMode={isDevMode}
              />
              <Step7
                info={info}
                contractImage={contractImage}
                setContractImage={setContractImage}
                setInfo={setInfo}
                isDevMode={isDevMode}
              />

              {/* <One userCallback={assignUser} />
                        <Two user={user} userCallback={assignUser} />
                        <Three user={user} completeCallback={handleComplete} /> */}
            </StepWizard>
            <div className="mt-3" style={{ color: "white" }}>
              واجهتك مشكلة ؟
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#03e7b4",
                  paddingRight: "6px",
                  textDecoration: "underline",
                }}
                href={contactInfo.whatsapplink}
              >
                {"  "}
                {"  "} كلمنا على واتساب{"  "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Residential;
