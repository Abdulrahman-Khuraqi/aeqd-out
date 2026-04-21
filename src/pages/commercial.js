/* eslint-disable react/destructuring-assignment */

import { React, useEffect, useState } from "react";
import StepWizard from "react-step-wizard";

import useToggle from "@/components/Hooks/useToggle";
import Step1 from "@/components/Commercial/step/Step1";
import Step2 from "@/components/Commercial/step/Step2";
import Step3 from "@/components/Commercial/step/Step3";
import Step4 from "@/components/Commercial/step/Step4";
import Step5 from "@/components/Commercial/step/Step5";
import Step6 from "@/components/Commercial/step/Step6";
import Step7 from "@/components/Commercial/step/Step7";
import Meta from "@/components/common/Meta";
import contactInfo from "@/assets/data/contactInfo.json";

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

const Contract = () => {
  // eslint-disable-next-line no-unused-vars
  const [lang, setLang] = useToggle(true);
  const [newContract, setNewContract] = useState(false);
  useEffect(() => {
    const html = document.getElementsByTagName("html");

    if (lang) {
      html[0].lang = "ar";
      html[0].dir = "rtl";
    } else {
      html[0].lang = "en";
      html[0].dir = "";
    }
    return () => {
      html[0].lang = "en";
      html[0].dir = "";
    };
  });
  // eslint-disable-next-line no-unused-vars
  const [stepWizard, setStepWizard] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = STEP_LABELS.length;
  const [lessor, setLessor] = useState("");
  const [contractImage, setContractImage] = useState("");
  const [commercialImage, setCommerialImage] = useState("");
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
    insurance: "",
    dailyFine: "",
    water: "",
    electricity: "",
    city: "",
    buildingNo: "",
    postalCode: "",
    extraNo: "",
    contracturl: "",
    commercialRegistrationNo: "",
    commercialurl: "",
    brokerAssistantId: "",
    area: "",
    street: "",
    district: "",
    deedIssueDate: "",
    deedDocumentNumber: "",
    deedTypeName: "",
    recordNumber: "",
    registrationDate: "",
  });
  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  // const assignUser = (val) => {
  //     console.log('parent receive user callback');
  //     console.log(val);
  //     setUser((e) => ({
  //         ...e,
  //         ...val,
  //     }));
  // };

  // const handleComplete = () => {
  //     alert('You r done. TQ');
  // };

  return (
    <>
      <Meta title={" عقد تجاري | عقد إيجار إلكتروني موثق"} />
      <div className="contract flex items-center justify-center">
        <div className="contract__container container flex justify-center text-center">
          {/* <HeaderHomeRtl className="appie-header-area-rtl " /> */}
          {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
          <div className="flex-column min-vh-100 justify-content-center align-items-center">
            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
            <StepWizard
              instance={assignStepWizard}
              transitions={custom}
              onStepChange={({ activeStep }) => setCurrentStep(activeStep)}
              className="contract__content"
            >
              <Step1 info={info} setInfo={setInfo} />
              {/* <SendEmail info={info} setInfo={setInfo} /> */}
              <Step2 info={info} setInfo={setInfo} isDevMode={isDevMode} />
              <Step3
                lessor={lessor}
                setLessor={setLessor}
                info={info}
                setInfo={setInfo}
                isDevMode={isDevMode}
              />
              <Step4
                info={info}
                setInfo={setInfo}
                contractImage={contractImage}
                setContractImage={setContractImage}
                commercialImage={commercialImage}
                setCommerialImage={setCommerialImage}
                isDevMode={isDevMode}
              />
              <Step5
                info={info}
                setInfo={setInfo}
                newContract={newContract}
                setNewContract={setNewContract}
                contractImage={contractImage}
                setContractImage={setContractImage}
                isDevMode={isDevMode}
              />
              <Step6
                info={info}
                setInfo={setInfo}
                newContract={newContract}
                setNewContract={setNewContract}
                contractImage={contractImage}
                setContractImage={setContractImage}
                isDevMode={isDevMode}
              />
              <Step7
                contractImage={contractImage}
                setContractImage={setContractImage}
                info={info}
                setInfo={setInfo}
                commercialImage={commercialImage}
                setCommerialImage={setCommerialImage}
                isDevMode={isDevMode}
              />
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

export default Contract;
