import axios from "axios";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

import arabic from "react-date-object/calendars/arabic";
import arabicAr from "react-date-object/locales/arabic_ar";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import Select from "react-select";
import {
  Button,
  CardTitle,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";

const API_KEY = "03pTDFns1QKYULtHvyL9j86KHWracTXK";
const API_URL = "https://api.wathq.sa/moj/real-estate/deed/";

const DEED_TYPES_WITH_DOCS = ["صك ملكية ورقي", "حجة استحكام", "أخرى"];

const Step5 = ({
  nextStep,
  previousStep,
  info,
  setInfo,
  isDevMode,
  contractImage,
  setContractImage,
}) => {
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);
  const [propertyContractIdChecked, setPropertyContractChecked] = useState(true);
  const [propertyContractDateChecked, setPropertyContractDateChecked] = useState(true);
  const [deedIssueDateChecked, setDeedIssueDateChecked] = useState(true);
  const [deedDocumentNumberChecked, setDeedDocumentNumberChecked] = useState(true);
  const [deedImageChecked, setDeedImageChecked] = useState(true);
  const [deedTypeNameChecked, setDeedTypeNameChecked] = useState(true);
  const [recordNumberChecked, setRecordNumberChecked] = useState(true);
  const [registrationDateChecked, setRegistrationDateChecked] = useState(true);
  const [spinnerCheck, setSpinnerCheck] = useState(false);
  const [isDeedDragActive, setIsDeedDragActive] = useState(false);

  const deedImageInputId = useId();
  const deedImageInputRef = useRef(null);

  const toggle = () => setModal(!modal);

  const deedType = info.propertyContract;
  const isElectronic = deedType === "صك إلكتروني";
  const isRegistry = deedType === "صك السجل العقاري";
  const needsDocs = DEED_TYPES_WITH_DOCS.includes(deedType);
  const isOtherDeed = deedType === "أخرى";

  const deedImagePreviewUrl = useMemo(() => {
    if (!info?.deedImage || typeof info.deedImage === "string") return "";
    if (!(info.deedImage instanceof File)) return "";
    return URL.createObjectURL(info.deedImage);
  }, [info?.deedImage]);

  useEffect(() => {
    return () => {
      if (deedImagePreviewUrl) URL.revokeObjectURL(deedImagePreviewUrl);
    };
  }, [deedImagePreviewUrl]);

  const handleDeedImage = (e) => {
    const file = e.target.files[0];
    setInfo((prev) => ({
      ...prev,
      deedImage: file || "",
    }));
  };

  const setDeedFile = (file) => {
    if (!file) return;
    if (!file.type?.startsWith("image/")) return;
    setInfo((prev) => ({
      ...prev,
      deedImage: file,
    }));
  };

  const openDeedFilePicker = () => {
    deedImageInputRef.current?.click?.();
  };

  const clearDeedImage = () => {
    setInfo((prev) => ({
      ...prev,
      deedImage: "",
    }));
  };

  const next = () => {
    setSpinnerCheck(false);
    toggle();
    nextStep();
  };

  const cancel = () => {
    toggle();
    setSpinnerCheck(false);
  };

  const deedStatus = async () => {
    try {
      setData("");
      setSpinnerCheck(true);
      const response = await axios.get(
        `${API_URL}${info.propertyContractId}/${info.lessorIdNumber}/National_ID`,
        { headers: { apikey: API_KEY } },
      );
      setData(response.data);
      toggle();
    } catch (error) {
      setData(error?.response?.data?.message || "حدث خطأ");
      setSpinnerCheck(false);
      toggle();
    }
  };

  const gotoSix = () => {
    if (isDevMode) {
      nextStep();
      return;
    }

    let deedValid = true;

    if (isElectronic) {
      if (
        info.propertyContractId === "" ||
        !/[0-9]{12}$/.test(info.propertyContractId)
      ) {
        setPropertyContractChecked(false);
        deedValid = false;
      } else setPropertyContractChecked(true);

      if (info.propertyContractDate === "") {
        setPropertyContractDateChecked(false);
        deedValid = false;
      } else setPropertyContractDateChecked(true);
    } else if (isRegistry) {
      if (info.recordNumber === "") {
        setRecordNumberChecked(false);
        deedValid = false;
      } else setRecordNumberChecked(true);

      if (info.registrationDate === "") {
        setRegistrationDateChecked(false);
        deedValid = false;
      } else setRegistrationDateChecked(true);
    } else if (needsDocs) {
      if (info.deedDocumentNumber === "") {
        setDeedDocumentNumberChecked(false);
        deedValid = false;
      } else setDeedDocumentNumberChecked(true);

      if (info.deedIssueDate === "") {
        setDeedIssueDateChecked(false);
        deedValid = false;
      } else setDeedIssueDateChecked(true);

      if (!info.deedImage) {
        setDeedImageChecked(false);
        deedValid = false;
      } else setDeedImageChecked(true);

      if (isOtherDeed) {
        if (info.deedTypeName === "") {
          setDeedTypeNameChecked(false);
          deedValid = false;
        } else setDeedTypeNameChecked(true);
      }
    } else {
      deedValid = false;
    }

    if (!deedValid) return;

    if (isElectronic) {
      deedStatus();
    } else {
      nextStep();
    }
  };

  const deedImageLabel =
    deedType === "حجة استحكام"
      ? "ارفق صورة الحجة"
      : deedType === "أخرى"
        ? "ارفق صورة الوثيقة"
        : "ارفق صورة الصك";

  return (
    <div>
      <div
        className="bg-gray-50 p-4 text-center shadow-lg"
        style={{ borderRadius: "20px" }}
      >
        <CardTitle className="mb-4 text-2xl font-bold">معلومات الصك</CardTitle>
        <div>
          <Form className="text-right" dir="rtl">

            {/* === بيانات الصك === */}
            <div className="mb-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="mb-3 border-r-4 border-primary-500 pr-3">
                <span className="text-sm font-semibold text-gray-600">بيانات الصك</span>
              </div>

              {!deedType && (
                <p className="text-sm text-red-500">
                  الرجاء اختيار نوع الصك من الخطوة السابقة
                </p>
              )}

              {/* صك إلكتروني */}
              {isElectronic && (
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <FormGroup className="mb-0">
                    <label className="mb-1 block text-sm font-medium text-gray-600">
                      رقم الصك الإلكتروني <span className="text-red-400">*</span>
                    </label>
                    <Input
                      placeholder="أدخل رقم الصك"
                      type="number"
                      id="propertyContractId"
                      onChange={(e) =>
                        setInfo((prev) => ({ ...prev, propertyContractId: e.target.value }))
                      }
                      value={info.propertyContractId}
                      invalid={!propertyContractIdChecked}
                    />
                    {!propertyContractIdChecked && (
                      <FormText className="text-red-500">الرجاء إدخال رقم الصك (12 رقم)</FormText>
                    )}
                  </FormGroup>

                  <FormGroup className="mb-0">
                    <label className="mb-1 block text-sm font-medium text-gray-600">
                      تاريخ الصك <span className="text-red-400">*</span>
                    </label>
                    <DatePicker
                      placeholder="اختر التاريخ"
                      format="YYYY-MM-DD"
                      className="green"
                      locale={arabicAr}
                      calendar={arabic}
                      onChange={(e) =>
                        setInfo((prev) => ({
                          ...prev,
                          propertyContractDate: e.format("YYYY-MM-DD"),
                        }))
                      }
                      value={info.propertyContractDate}
                    />
                    {!propertyContractDateChecked && (
                      <FormText className="text-red-500">الرجاء تحديد تاريخ الصك</FormText>
                    )}
                  </FormGroup>
                </div>
              )}

              {/* صك السجل العقاري */}
              {isRegistry && (
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <FormGroup className="mb-0">
                    <label className="mb-1 block text-sm font-medium text-gray-600">
                      رقم السجل العقاري <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="ادخل رقم السجل العقاري"
                      value={info.recordNumber || ""}
                      invalid={!recordNumberChecked}
                      onChange={(e) =>
                        setInfo((prev) => ({ ...prev, recordNumber: e.target.value }))
                      }
                    />
                    {!recordNumberChecked && (
                      <FormText className="text-red-500">الرجاء إدخال رقم السجل العقاري</FormText>
                    )}
                  </FormGroup>

                  <FormGroup className="mb-0">
                    <label className="mb-1 block text-sm font-medium text-gray-600">
                      تاريخ التسجيل الأول <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="date"
                      value={info.registrationDate || ""}
                      invalid={!registrationDateChecked}
                      onChange={(e) =>
                        setInfo((prev) => ({ ...prev, registrationDate: e.target.value }))
                      }
                    />
                    {!registrationDateChecked && (
                      <FormText className="text-red-500">الرجاء تحديد تاريخ التسجيل</FormText>
                    )}
                  </FormGroup>
                </div>
              )}

              {/* صك ملكية ورقي | حجة استحكام | أخرى */}
              {needsDocs && (
                <div className="space-y-3">
                  {isOtherDeed && (
                    <FormGroup className="mb-0">
                      <label className="mb-1 block text-sm font-medium text-gray-600">
                        اسم نوع الوثيقة القانونية <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="مثال: صك استرداد"
                        value={info.deedTypeName || ""}
                        invalid={!deedTypeNameChecked}
                        onChange={(e) =>
                          setInfo((prev) => ({ ...prev, deedTypeName: e.target.value }))
                        }
                      />
                      {!deedTypeNameChecked && (
                        <FormText className="text-red-500">
                          الرجاء إدخال اسم نوع الوثيقة
                        </FormText>
                      )}
                    </FormGroup>
                  )}

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <FormGroup className="mb-0">
                      <label className="mb-1 block text-sm font-medium text-gray-600">
                        رقم وثيقة الملكية <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="أدخل رقم الوثيقة"
                        value={info.deedDocumentNumber || ""}
                        invalid={!deedDocumentNumberChecked}
                        onChange={(e) =>
                          setInfo((prev) => ({
                            ...prev,
                            deedDocumentNumber: e.target.value,
                          }))
                        }
                      />
                      {!deedDocumentNumberChecked && (
                        <FormText className="text-red-500">
                          الرجاء إدخال رقم وثيقة الملكية
                        </FormText>
                      )}
                    </FormGroup>

                    <FormGroup className="mb-0">
                      <label className="mb-1 block text-sm font-medium text-gray-600">
                        تاريخ الإصدار <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="date"
                        value={info.deedIssueDate || ""}
                        invalid={!deedIssueDateChecked}
                        onChange={(e) =>
                          setInfo((prev) => ({ ...prev, deedIssueDate: e.target.value }))
                        }
                      />
                      {!deedIssueDateChecked && (
                        <FormText className="text-red-500">
                          الرجاء تحديد تاريخ الإصدار
                        </FormText>
                      )}
                    </FormGroup>
                  </div>

                  {/* صورة الصك مع Drag & Drop */}
                  <FormGroup className="mt-3">
                    <div
                      role="button"
                      tabIndex={0}
                      className="w-100 bg-white p-3 shadow-sm"
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
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: "12px",
                        }}
                      >
                        <div style={{ textAlign: "right", flex: 1 }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
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
                                flexShrink: 0,
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
                            <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>
                              {deedImageLabel}
                            </span>
                          </div>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            gap: "8px",
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {info?.deedImage && (
                            <Button
                              type="button"
                              color="link"
                              className="p-0 text-danger"
                              onClick={clearDeedImage}
                              style={{ fontSize: "0.85rem" }}
                            >
                              إزالة
                            </Button>
                          )}
                        </div>
                      </div>

                      {info?.deedImage?.name && (
                        <div style={{ marginTop: "12px", fontSize: "0.9rem", color: "#666" }}>
                          <span style={{ fontWeight: 500 }}>{info.deedImage.name}</span>
                        </div>
                      )}

                      {deedImagePreviewUrl && (
                        <div style={{ marginTop: "12px" }} onClick={(e) => e.stopPropagation()}>
                          <img
                            src={deedImagePreviewUrl}
                            alt={deedImageLabel}
                            style={{
                              width: "100%",
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
                      <FormText className="text-red-500 mt-2">الرجاء رفع صورة الوثيقة</FormText>
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
                </div>
              )}
            </div>

          </Form>
        </div>

        <div className="mt-4 flex justify-center gap-3">
          <button
            type="submit"
            className="btn__main btn1 border-0"
            onClick={gotoSix}
            disabled={spinnerCheck}
          >
            {spinnerCheck ? <span>جاري التحقق...</span> : "التالي"}
          </button>
          <button
            type="button"
            className="btn__main btn1 border-0"
            onClick={() => previousStep()}
          >
            السابق
          </button>
        </div>

        {/* Verification modal (electronic deed only) */}
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black-500 bg-opacity-50 ${modal ? "block" : "hidden"}`}
        >
          <div className="mx-4 max-w-sm rounded-xl bg-white p-5 text-center shadow-xl">
            {data?.deedStatus === "Active" ? (
              <>
                <div className="mb-2 flex justify-center">
                  <CheckCircleIcon className="h-12 w-12 text-green-500" />
                </div>
                <p className="mb-4 font-semibold text-gray-900">تم التحقق من رقم الصك</p>
                <button
                  className="rounded-full bg-primary-500 px-6 py-2 text-gray-900 hover:bg-gray-300"
                  onClick={next}
                >
                  التالي
                </button>
              </>
            ) : (
              <>
                <div className="mb-2 flex justify-center">
                  <XCircleIcon className="h-12 w-12 text-red-500" />
                </div>
                <p className="mb-2 font-semibold text-red-500">الرجاء التحقق من رقم الصك</p>
                <p className="mb-4 text-sm text-gray-500">{data}</p>
                <button
                  className="rounded-full bg-red-500 px-6 py-2 text-white hover:bg-red-600"
                  onClick={cancel}
                >
                  إغلاق
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
