// import axios from "axios"; // deed verification
import { useEffect, useId, useMemo, useRef, useState } from "react";
import arabic from "react-date-object/calendars/arabic";
import arabicAr from "react-date-object/locales/arabic_ar";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import Select from "react-select";
import {
  Button,
  CardTitle,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";

const Step5 = ({ nextStep, previousStep, info, setInfo, isDevMode }) => {
  const options2 = [
    { value: "عمارة", label: "عمارة" },
    { value: "فيلا", label: "فيلا" },
    { value: "مجمع تجاري مفتوح بلازا", label: "مجمع تجاري مفتوح بلازا" },
    { value: "أرض", label: "أرض" },
    { value: "أرض مجمع تجاري مغلق مول", label: "أرض مجمع تجاري مغلق مول" },
    { value: "برج", label: "برج" },
    { value: "مصنع", label: "مصنع" },
    { value: "استراحة", label: "استراحة" },
    { value: "مزرعة", label: "مزرعة" },
    { value: "أخرى", label: "أخرى" },
  ];
  // const [data, setData] = useState(null); // deed verification modal
  // const [modal, setModal] = useState(false); // deed verification modal
  const [propertyContractIdChecked, setPropertyContractChecked] =
    useState(true);
  const [propertyTypeChecked, setPropertyTypeChecked] = useState(true);
  // const [contractImageChecked, setcontractImageChecked] = useState(true);
  // const [spinnerCheck, setSpinnerCheck] = useState(false); // deed verification

  const [propertyContractDateChecked, setPropertyContractDateChecked] =
    useState(true);
  const [deedImageChecked, setDeedImageChecked] = useState(true);
  const [legalDocumentTypeChecked, setLegalDocumentTypeChecked] =
    useState(true);


  const isElectronicDeed = info.propertyContract === "صك إلكتروني";
  const paperDeedTypes = ["صك ملكية ورقي", "حجة استحكام", "أخرى"];
  const needsDeedImage = paperDeedTypes.includes(info.propertyContract);
  const isOtherDeed = info.propertyContract === "أخرى";
  const deedImageInputId = useId();
  const deedImageInputRef = useRef(null);
  const [isDeedDragActive, setIsDeedDragActive] = useState(false);

  const deedPreviewUrl = useMemo(() => {
    if (!info?.deedImage || typeof info.deedImage === "string") return "";
    if (!(info.deedImage instanceof File)) return "";
    return URL.createObjectURL(info.deedImage);
  }, [info?.deedImage]);

  useEffect(() => {
    return () => {
      if (deedPreviewUrl) URL.revokeObjectURL(deedPreviewUrl);
    };
  }, [deedPreviewUrl]);

  const deedNumberLabel = isElectronicDeed
    ? "رقم الصك الإلكتروني"
    : "رقم وثيقة الملكية";

  const deedImageLabel =
    info.propertyContract === "حجة استحكام"
      ? "ارفق صورة الحجة"
      : info.propertyContract === "أخرى"
        ? "ارفق صورة الوثيقة"
        : "ارفق صورة الصك";

  const handleDeedImage = (e) => {
    const file = e.target.files[0];
    setInfo((previousState) => ({
      ...previousState,
      deedImage: file || "",
    }));
  };

  const setDeedFile = (file) => {
    if (!file) return;
    if (!file.type?.startsWith("image/")) return;
    setInfo((previousState) => ({
      ...previousState,
      deedImage: file,
    }));
  };

  const openDeedFilePicker = () => {
    deedImageInputRef.current?.click?.();
  };

  const clearDeedImage = () => {
    setInfo((previousState) => ({
      ...previousState,
      deedImage: "",
    }));
  };

  // const toggle = () => setModal(!modal); // deed verification modal
  // const next = () => {
  //   nextStep();
  //   setSpinnerCheck(false);
  //   toggle();
  // };
  // const cancel = () => {
  //   toggle();
  //   setSpinnerCheck(false);
  // };

  const gotoSix = () => {
    const dateOk = info.propertyContractDate !== "";
    setPropertyContractDateChecked(dateOk);

    const deedNumberOk = isElectronicDeed
      ? info.propertyContractId !== "" &&
        /[0-9]{12}$/.test(info.propertyContractId)
      : info.propertyContractId !== "";
    setPropertyContractChecked(deedNumberOk);

    const propertyTypeOk =
      info.propertyType !== "" &&
      /^[\u0621-\u064A\s]+$/.test(info.propertyType);
    setPropertyTypeChecked(propertyTypeOk);

    const deedImageOk = needsDeedImage ? !!info.deedImage : true;
    setDeedImageChecked(deedImageOk);

    const legalTypeOk = isOtherDeed ? !!info.legalDocumentType : true;
    setLegalDocumentTypeChecked(legalTypeOk);

    if (isDevMode) {
      nextStep();
      return;
    }

    if (
      dateOk &&
      deedNumberOk &&
      propertyTypeOk &&
      deedImageOk &&
      legalTypeOk
    ) {
      // Wathq deed verification — temporarily disabled (re-enable when API is ready)
      // if (isElectronicDeed) {
      //   deedStatus();
      // } else {
      //   nextStep();
      // }
      nextStep();
    }
  };

  return (
    <div>
      <div
        className="bg-gray-50 p-4 text-center shadow-lg"
        style={{ borderRadius: "20px" }}
      >
        <CardTitle className="h4 mb-4 text-2xl font-bold">
          معلومات الصك
        </CardTitle>
        <div>
          <Form className="text-right">
            <Row>
              {/* {info.propertyContract === 'صك بخط اليد' && (
                <Col xs={12}>
                  <FormGroup>
                    <Label
                      style={{
                        textAlign: 'center',
                        display: 'block',
                        borderRadius: '100px',
                      }}
                      className='btn btn-primary'
                      for='ContractImage'
                    >
                      ارفق صورة الصك
                    </Label>
                    {!contractImageChecked && (
                      <FormText className='text-red-500'>الرجاء ارفاق الصورة</FormText>
                    )}
                    <Input
                      style={{
                        visibility: 'hidden',
                        height: '0',
                        marginBottom: '-20px',
                      }}
                      multiple
                      accept='image/*'
                      type='file'
                      id='ContractImage'
                      name='ContractImage'
                      placeholder='Enter your Profile image'
                      onChange={handleContract}
                    ></Input>
                  </FormGroup>
                </Col>
              )} */}
              {isOtherDeed && (
                <Col xs={12}>
                  <FormGroup>
                    <Label>اسم نوع الوثيقة القانونية</Label>
                    <br />
                    <Input
                      placeholder="ادخل اسم نوع الوثيقة القانونية"
                      type="text"
                      id="legalDocumentType"
                      name="legalDocumentType"
                      onChange={(e) =>
                        setInfo((previousState) => ({
                          ...previousState,
                          legalDocumentType: e.target.value,
                        }))
                      }
                      value={info.legalDocumentType || ""}
                      invalid={!legalDocumentTypeChecked}
                      style={
                        legalDocumentTypeChecked
                          ? {}
                          : {
                              border: "1px solid rgb(220, 53, 69)",
                              borderRadius: "8px",
                              padding: "4px",
                            }
                      }
                    />
                    {!legalDocumentTypeChecked && (
                      <FormText className="text-red-500">
                        الرجاء ادخال اسم نوع الوثيقة القانونية
                      </FormText>
                    )}
                  </FormGroup>
                </Col>
              )}
              <Col xs={12}>
                <FormGroup>
                  <Label>{deedNumberLabel}</Label>
                  <br />
                  <Input
                    placeholder={deedNumberLabel}
                    type="text"
                    id="propertyContractId"
                    name="propertyContractId"
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        propertyContractId: e.target.value,
                      }))
                    }
                    value={info.propertyContractId}
                    invalid={!propertyContractIdChecked}
                    style={
                      propertyContractIdChecked
                        ? {}
                        : {
                            border: "1px solid rgb(220, 53, 69)",
                            borderRadius: "8px",
                            padding: "4px",
                          }
                    }
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup
                  style={
                    propertyContractDateChecked
                      ? { borderColor: "transparent" }
                      : {
                          border: " 1px solid rgb(220, 53, 69)",
                          borderRadius: "100px",
                        }
                  }
                >
                  <DatePicker
                    required
                    id="propertyContractDate"
                    placeholder="تاريخ الإصدار"
                    format="YYYY-MM-DD"
                    className="green"
                    locale={arabicAr}
                    calendar={arabic}
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        propertyContractDate: e.format("YYYY-MM-DD"),
                      }))
                    }
                    invalid={!propertyContractDateChecked}
                    value={info.propertyContractDate}
                  />
                </FormGroup>
                <FormGroup>
                  <Select
                    placeholder="حدد نوع العقار"
                    options={options2}
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        propertyType: e.value,
                      }))
                    }
                    style={
                      propertyTypeChecked
                        ? {}
                        : {
                            border: "1px solid rgb(220, 53, 69) !",
                            borderRadius: "8px",
                            padding: "4px",
                          }
                    }
                  />
                  {!propertyTypeChecked && (
                    <FormText className="text-red-500">
                      الرجاء اختيار نوع العقار
                    </FormText>
                  )}
                </FormGroup>

                <Row>
                  <Col xs={12} md={6}>
                    <FormGroup>
                      <Label>عدد أدوار المبنى</Label>
                      <Input
                        type="number"
                        min="0"
                        placeholder="عدد أدوار المبنى"
                        id="buildingFloorsNo"
                        name="buildingFloorsNo"
                        value={info.buildingFloorsNo || ""}
                        onChange={(e) =>
                          setInfo((previousState) => ({
                            ...previousState,
                            buildingFloorsNo: e.target.value,
                          }))
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={6}>
                    <FormGroup>
                      <Label>عدد الوحدات في كل طابق</Label>
                      <Input
                        type="number"
                        min="0"
                        placeholder="عدد الوحدات في كل طابق"
                        id="unitsPerFloor"
                        name="unitsPerFloor"
                        value={info.unitsPerFloor || ""}
                        onChange={(e) =>
                          setInfo((previousState) => ({
                            ...previousState,
                            unitsPerFloor: e.target.value,
                          }))
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>

                {needsDeedImage && (
                  <FormGroup className="mt-3">
                    <div
                      role="button"
                      tabIndex={0}
                      className="w-100  bg-white p-3 shadow-sm"
                      onClick={openDeedFilePicker}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") openDeedFilePicker();
                      }}
                      onDragEnter={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDeedDragActive(true);
                      }}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDeedDragActive(true);
                      }}
                      onDragLeave={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDeedDragActive(false);
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDeedDragActive(false);
                        const file = e.dataTransfer?.files?.[0];
                        setDeedFile(file);
                      }}
                      style={{
                        cursor: "pointer",
                        outline: "none",
                        borderRadius: "16px",
                        border: !deedImageChecked
                          ? "1px solid rgb(220, 53, 69)"
                          : isDeedDragActive
                            ? "2px dashed rgba(3,231,180,0.9)"
                            : "1px dashed rgba(0,0,0,0.25)",
                        background: isDeedDragActive ? "rgba(3,231,180,0.06)" : "white",
                        transition: "border-color 120ms ease, background 120ms ease",
                      }}
                    >
                      <div
                        className="align-items-start justify-content-between"
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: "12px",
                        }}
                      >
                        <div className="text-right">
                          <div
                            className="fw-bold"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "12px",
                            }}
                          >
                            <span
                              aria-hidden="true"
                              style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "12px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: isDeedDragActive
                                  ? "rgba(3,231,180,0.12)"
                                  : "rgba(0,0,0,0.04)",
                                border: "1px solid rgba(0,0,0,0.06)",
                              }}
                            >
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 16V4"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                                <path
                                  d="M7 9L12 4L17 9"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4 20H20"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </span>
                            <span>{deedImageLabel}</span>
                          </div>
                        </div>

                        <div
                          className="d-flex flex-column align-items-end gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {info?.deedImage && (
                            <Button
                              type="button"
                              color="link"
                              className="p-0 text-danger"
                              onClick={clearDeedImage}
                            >
                              إزالة
                            </Button>
                          )}
                        </div>
                      </div>

                      {info?.deedImage?.name && (
                        <div className="mt-2 text-muted" style={{ fontSize: "0.9rem" }}>
                          <span className="fw-semibold">{info.deedImage.name}</span>
                        </div>
                      )}

                      {deedPreviewUrl && (
                        <div className="mt-3" onClick={(e) => e.stopPropagation()}>
                          <img
                            src={deedPreviewUrl}
                            alt={deedImageLabel}
                            className="w-100"
                            style={{
                              maxHeight: "240px",
                              objectFit: "contain",
                              borderRadius: "12px",
                              border: "1px solid rgba(0,0,0,0.08)",
                              background: "rgba(0,0,0,0.02)",
                            }}
                          />
                        </div>
                      )}
                    </div>
                    {!deedImageChecked && (
                      <FormText className="text-red-500">الرجاء ارفاق الصورة</FormText>
                    )}
                    <Input
                      innerRef={deedImageInputRef}
                      style={{
                        position: "absolute",
                        width: "1px",
                        height: "1px",
                        padding: 0,
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        border: 0,
                        opacity: 0,
                      }}
                      accept="image/*"
                      type="file"
                      id={deedImageInputId}
                      name="deedImage"
                      onChange={handleDeedImage}
                    />
                  </FormGroup>
                )}

              </Col>
            </Row>
          </Form>
        </div>
        <button
          type="submit"
          className="btn__main btn1 border-0"
          style={{ display: "inline-block" }}
          onClick={gotoSix}
        >
          التالي
        </button>
        <button
          type="button"
          className="btn__main btn1 inline-block border-0"
          onClick={() => previousStep()}
        >
          السابق
        </button>

        {/* Wathq deed verification modal — temporarily disabled (re-enable when API is ready)
        <Modal
          className="fixed inset-0 z-50 flex items-center justify-center bg-black-500 bg-opacity-50 backdrop-blur-sm"
          isOpen={modal}
          toggle={toggle}
        >
          <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-lg">
            {data?.deedStatus === "Active" ? (
              <>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">
                    تم التحقق من رقم الصك
                  </p>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  <button
                  className="rounded-full bg-primary-500 px-4 py-2 text-gray-900 hover:bg-green-600"
                    onClick={() => next()}
                  >
                    التالي
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <p className="font-semibold text-red-700">
                    الرجاء التحقق من رقم الصك
                  </p>
                  {data && <p className="mt-2 text-gray-600">{data}</p>}
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  <button
                    className="rounded-full bg-red-700 px-4 py-2 text-white hover:bg-red-600"
                    onClick={() => cancel()}
                  >
                    الغاء
                  </button>
                </div>
              </>
            )}
          </div>
        </Modal>
        */}
      </div>
    </div>
  );
};

export default Step5;
