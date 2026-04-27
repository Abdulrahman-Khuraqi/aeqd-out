import "moment-hijri";
import "moment/locale/ar";
import { useEffect, useState } from "react";
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
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";

const Step6 = ({
  nextStep,
  previousStep,
  info,
  setInfo,
  newContract,
  currentStep,
  setNewContract,isDevMode
}) => {
  const PaymentMethodOp = [
    { value: "شهري", label: "شهري" },
    { value: "كل 3 أشهر", label: "كل 3 أشهر" },
    { value: "كل 6 أشهر", label: "كل 6 أشهر" },
    { value: "سنوي", label: "سنوي" },
  ];
  const contractDurationOp = [
    { value: "1", label: "سنة" },
    { value: "2", label: "سنتين" },
    { value: "3", label: "3 سنوات" },
    { value: "4", label: "4 سنوات" },
    { value: "5", label: "5 سنوات" },
    { value: "6", label: "6 سنوات" },
    { value: "7", label: "7 سنوات" },
    { value: "8", label: "8 سنوات" },
    { value: "9", label: "9 سنوات" },
    { value: "10", label: "10 سنوات" },
  ];
  const unitTypeOp = [
    { value: "كشك ", label: "كشك " },
    { value: "محل ", label: "محل " },
    { value: "ورشة ", label: "ورشة " },
    { value: "أرض", label: "أرض" },
    { value: "أرض مسوَرة", label: "أرض مسوَرة" },
    { value: "محطة", label: "محطة" },
    { value: "مكتب", label: "مكتب" },
    { value: "مستودع", label: "مستودع" },
    { value: "معرض", label: "معرض" },
    { value: "صراف", label: "صراف" },
    { value: "سينما", label: "سينما" },
    { value: "محطة كهرباء", label: "محطة كهرباء" },
    { value: "برج اتصالات", label: "برج اتصالات" },
    { value: "فندق", label: "فندق" },
    { value: "مواقف سيارات", label: "مواقف سيارات" },
    { value: "مجمع تجاري مفتوح بلازا", label: "مجمع تجاري مفتوح بلازا" },
    { value: "مجمع تجاري مغلق مول", label: "مجمع تجاري مغلق مول" },
    { value: "دور", label: "دور" },
    { value: "شقة", label: "شقة" },
    { value: "فيلا", label: "فيلا" },
    { value: "عمارة", label: "عمارة" },
    { value: "برج", label: "برج" },
    { value: "أخرى", label: "أخرى" },
    { value: "مصنع", label: "مصنع" },
    { value: "استراحة", label: "استراحة" },
    { value: "مزرعة", label: "مزرعة" },
  ];

  const [rentAmountChecked, setLessorNameChecked] = useState(true);
  const [paymentMethodChecked, setPaymentMethodChecked] = useState(true);
  const [startingDateCheacked, setStartingDateCheacked] = useState(true);
  const [contractDurationCheacked, setContractDurationCheacked] = useState(true);
  const [unitTypeCheacked, setUnitTypeCheacked] = useState(true);
  const [unitUseChecked, setUnitUseChecked] = useState(true);
  const [FloorNoChecked, setFloorNoChecked] = useState(true);
  const [apartmentNoCheacked, setApartmentNoCheacked] = useState(true);
  const [roomNoCheacked, setRoomNoChe] = useState(true);
  const [showAdvancedUnitOptions, setShowAdvancedUnitOptions] = useState(false);
  // const [insuranceChecked, setInsuranceChecked] = useState(true);
  // const [dailyFineChecked, setDailyFineChecked] = useState(true);
  const [waterChecked, setWaterChecked] = useState(true);
  const [electricityChecked, setElectricityChecked] = useState(true);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const gotoSeven = () => {
    if (info.rentAmount === "") {
      setLessorNameChecked(false);
    } else setLessorNameChecked(true);
    if (info.paymentMethod === "") setPaymentMethodChecked(false);
    else setPaymentMethodChecked(true);
    if (info.startingDate === "") setStartingDateCheacked(false);
    else setStartingDateCheacked(true);
    if (info.contractDuration === "") setContractDurationCheacked(false);
    else setContractDurationCheacked(true);
    if (info.unitType === "") setUnitTypeCheacked(false);
    else setUnitTypeCheacked(true);
    if ((info.unitUse || "").trim() === "") setUnitUseChecked(false);
    else setUnitUseChecked(true);
    if (info.FloorNo === "") setFloorNoChecked(false);
    else setFloorNoChecked(true);
    if (info.apartmentNo === "") setApartmentNoCheacked(false);
    else setApartmentNoCheacked(true);
    if (info.roomNo === "") setRoomNoChe(false);
    else setRoomNoChe(true);
    // if (info.insurance === '') setInsuranceChecked(false);
    // else setInsuranceChecked(true);
    // if (info.dailyFine === '') setDailyFineChecked(false);
    // else setDailyFineChecked(true);
    if (info.water === "") setWaterChecked(true);
    else setWaterChecked(true);
    if (info.electricity === "") setElectricityChecked(true);
    else setElectricityChecked(true);

    if (isDevMode) {
      nextStep();
      return;
    }

    if (
      info.rentAmount !== "" &&
      info.paymentMethod !== "" &&
      info.startingDate !== "" &&
      info.contractDuration !== "" &&
      info.unitType !== "" &&
      (info.unitUse || "").trim() !== "" &&
      info.FloorNo !== "" &&
      info.apartmentNo !== "" &&
      info.roomNo !== ""
    )
      nextStep();
  };
  const handleDuration = (e) => {
    console.log(e.value);
    setInfo((previousState) => ({
      ...previousState,
      contractDuration: e.value,
    }));
    toggle();
  };

  useEffect(() => {
    if (currentStep === 6) setNewContract(true);
    else setNewContract(false);
  }, [currentStep, setNewContract]);

  return (
    <div>
      {newContract && (
        <div
          className="p-4 text-center shadow-lg"
          style={{ borderRadius: "20px", background: "white" }}
        >
          <CardTitle className="mb-4 text-2xl font-bold" color="primary">
            معلومات العقد الجديد
          </CardTitle>
          <div>
            <Form className="text-right">
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label for="rentAmount">
                      مبلغ الإيجار السنوي (بدون ضريبة):
                    </Label>
                    <br />
                    <Input
                      placeholder="500000000"
                      type="number"
                      name="rentAmount"
                      id="rentAmount"
                      onChange={(e) =>
                        setInfo((previousState) => ({
                          ...previousState,
                          rentAmount: e.target.value,
                        }))
                      }
                      value={info.rentAmount}
                      invalid={!rentAmountChecked}
                    />
                    {!rentAmountChecked && (
                      <FormText className="text-red-500">
                        الرجاء إدخال مبلغ الإيجار{" "}
                      </FormText>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <div className="flex flex-col gap-2 md:flex-row">
                <div className="w-full md:w-1/2">
                  <FormGroup>
                    <Label>تاريخ بداية العقد:</Label>
                    <br />
                    <DatePicker
                      placeholder="تاريخ بداية العقد"
                      format="YYYY-MM-DD"
                      className="green"
                      onChange={(e) =>
                        setInfo((previousState) => ({
                          ...previousState,
                          startingDate: e.format("YYYY-MM-DD"),
                        }))
                      }
                      value={info.startingDate}
                      invalid={!startingDateCheacked}
                    />
                    {!startingDateCheacked && (
                      <FormText className="text-red-500">
                        الرجاء تحديد تاريخ بداية العقد
                      </FormText>
                    )}
                  </FormGroup>
                </div>
                <div className="w-full md:w-1/2">
                  <FormGroup>
                    <Label>مدة العقد: </Label>
                    <br />
                    <Select
                      placeholder="حدد مدة العقد"
                      options={contractDurationOp}
                      onChange={(e) => handleDuration(e)}
                    />
                    {!contractDurationCheacked && (
                      <FormText className="text-red-500">
                        الرجاء تحديد مدة العقد
                      </FormText>
                    )}
                  </FormGroup>
                </div>
              </div>
              <Row>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label>طريقة الدفع :</Label>
                    <br />
                    <Select
                      placeholder="حدد طريقة الدفع"
                      options={PaymentMethodOp}
                      onChange={(e) =>
                        setInfo((previousState) => ({
                          ...previousState,
                          paymentMethod: e.value,
                        }))
                      }
                    />
                    {!paymentMethodChecked && (
                      <FormText className="text-red-500">الرجاء تحديد طريقة الدفع</FormText>
                    )}
                  </FormGroup>
                </Col>
              </Row>

              {/* === معلومات الوحدة === */}
              <div className="mb-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="mb-3 border-r-4 border-primary-500 pr-3">
                  <span className="text-sm font-semibold text-gray-600">معلومات الوحدة</span>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <FormGroup className="mb-0">
                    <Label className="mb-1 block text-sm font-medium text-gray-600">نوع الوحدة <span className="text-red-400">*</span></Label>
                    <Select
                      placeholder="اختر نوع الوحدة"
                      options={unitTypeOp}
                      onChange={(e) => setInfo((prev) => ({ ...prev, unitType: e.value }))}
                    />
                    {!unitTypeCheacked && <FormText className="text-red-500">الرجاء تحديد نوع الوحدة</FormText>}
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <Label className="mb-1 block text-sm font-medium text-gray-600">استخدام الوحدة <span className="text-red-400">*</span></Label>
                    <Input
                      placeholder="مثال: تجاري"
                      type="text"
                      value={info.unitUse || ""}
                      onChange={(e) => setInfo((prev) => ({ ...prev, unitUse: e.target.value }))}
                      style={unitUseChecked ? {} : { border: "1px solid rgb(220, 53, 69)", borderRadius: "8px" }}
                    />
                    {!unitUseChecked && <FormText className="text-red-500">الرجاء إدخال استخدام الوحدة</FormText>}
                  </FormGroup>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                  <FormGroup className="mb-0">
                    <Label className="mb-1 block text-sm font-medium text-gray-600">رقم الطابق <span className="text-red-400">*</span></Label>
                    <Input
                      placeholder="مثال: 3"
                      type="number"
                      value={info.FloorNo}
                      maxLength="4"
                      onChange={(e) => setInfo((prev) => ({ ...prev, FloorNo: e.target.value }))}
                      style={FloorNoChecked ? {} : { border: "1px solid rgb(220, 53, 69)", borderRadius: "8px" }}
                    />
                    {!FloorNoChecked && <FormText className="text-red-500">الرجاء إدخال رقم الطابق</FormText>}
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <Label className="mb-1 block text-sm font-medium text-gray-600">رقم الوحدة <span className="text-red-400">*</span></Label>
                    <Input
                      placeholder="مثال: 12"
                      type="text"
                      maxLength="5"
                      value={info.apartmentNo}
                      onChange={(e) => setInfo((prev) => ({ ...prev, apartmentNo: e.target.value }))}
                      style={apartmentNoCheacked ? {} : { border: "1px solid rgb(220, 53, 69)", borderRadius: "8px" }}
                    />
                    {!apartmentNoCheacked && <FormText className="text-red-500">الرجاء إدخال رقم الوحدة</FormText>}
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <Label className="mb-1 block text-sm font-medium text-gray-600">المساحة (م²) <span className="text-red-400">*</span></Label>
                    <Input
                      placeholder="مثال: 120"
                      type="number"
                      id="roomNo"
                      name="roomNo"
                      value={info.roomNo}
                      onChange={(e) => setInfo((prev) => ({ ...prev, roomNo: e.target.value }))}
                      style={roomNoCheacked ? {} : { border: "1px solid rgb(220, 53, 69)", borderRadius: "8px" }}
                    />
                    {!roomNoCheacked && <FormText className="text-red-500">الرجاء إدخال المساحة</FormText>}
                  </FormGroup>
                </div>
              </div>

              {/* === خيارات إضافية === */}
              <div className="mb-3">
                <button
                  type="button"
                  onClick={() => setShowAdvancedUnitOptions((prev) => !prev)}
                  className="w-full rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}
                >
                  <div className="text-right">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 600 }}>
                      <span>خيارات إضافية</span>
                      <span style={{ fontSize: "0.75rem", padding: "4px 10px", borderRadius: "999px", background: "rgba(13,110,253,0.10)", border: "1px solid rgba(13,110,253,0.25)", color: "rgb(13,110,253)", lineHeight: 1 }}>اختياري</span>
                    </div>
                    <div className="text-muted" style={{ fontSize: "0.9rem" }}>هذه الحقول اختيارية ويمكن تركها فارغة</div>
                  </div>
                  <div aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "12px", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.06)", transform: showAdvancedUnitOptions ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 150ms ease", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
              </div>

              {showAdvancedUnitOptions && (
                <div className="mb-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="mb-3 border-b border-gray-100 pb-3">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">الأبعاد والخصائص</p>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {[
                        { id: "unitCreationDate", label: "تاريخ الإنشاء", type: "date" },
                        { id: "unitDirection", label: "اتجاه الوحدة", placeholder: "شمالي" },
                        { id: "unitFinishing", label: "التشطيب", placeholder: "سوبر لوكس" },
                        { id: "frontFacadeLength", label: "طول الواجهة (م)", type: "number", placeholder: "بالمتر" },
                        { id: "unitLength", label: "الطول (م)", type: "number", placeholder: "م" },
                        { id: "unitWidth", label: "العرض (م)", type: "number", placeholder: "م" },
                        { id: "unitHeight", label: "الارتفاع (م)", type: "number", placeholder: "م" },
                      ].map(({ id, label, type = "text", placeholder }) => (
                        <FormGroup key={id} className="mb-0">
                          <Label className="mb-1 block text-sm text-gray-500">{label}</Label>
                          <Input type={type} id={id} name={id} placeholder={placeholder}
                            onChange={(e) => setInfo((p) => ({ ...p, [id]: e.target.value }))}
                            value={info[id] || ""} />
                        </FormGroup>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3 border-b border-gray-100 pb-3">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">الخصائص</p>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        { id: "hasMezzanine", label: "تحتوي على ميزانين", value: !!info.hasMezzanine, key: "hasMezzanine" },
                        { id: "isFurnished", label: "مؤثث / مفروش", value: !!info.isFurnished, key: "isFurnished" },
                        { id: "hasUnitFacilities", label: "يوجد مرافق للوحدة", value: info.hasUnitFacilities === "يوجد",
                          onChange: (checked) => setInfo((p) => ({ ...p, hasUnitFacilities: checked ? "يوجد" : "لا يوجد" })) },
                      ].map(({ id, label, value, key, onChange }) => (
                        <FormGroup key={id} className="mb-0">
                          <Input type="checkbox" id={id} checked={value}
                            onChange={(e) => onChange ? onChange(e.target.checked) : setInfo((p) => ({ ...p, [key]: e.target.checked }))}
                            style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}
                          />
                          <Label for={id} className="w-100 bg-white shadow-sm" style={{ cursor: "pointer", userSelect: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", padding: "10px 14px", borderRadius: "100px", border: value ? "1px solid rgba(3,231,180,0.55)" : "1px solid rgba(0,0,0,0.10)", background: value ? "rgba(3,231,180,0.08)" : "white", transition: "border-color 140ms ease, background 140ms ease" }}>
                            <span className="fw-semibold text-sm">{label}</span>
                            <span aria-hidden="true" style={{ width: "22px", height: "22px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", border: value ? "1px solid rgba(3,231,180,0.75)" : "1px solid rgba(0,0,0,0.18)", background: value ? "rgba(3,231,180,0.16)" : "rgba(0,0,0,0.02)", color: value ? "rgb(0,135,110)" : "transparent", fontWeight: 900, lineHeight: 1 }}>✓</span>
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </div>

                  {info.hasUnitFacilities === "يوجد" && (
                    <div className="mb-3 border-b border-gray-100 pb-3">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">تفاصيل المرافق</p>
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {[
                          { id: "bedroomsCount", label: "غرف النوم" },
                          { id: "bathroomsCount", label: "دورات المياه" },
                          { id: "hallsCount", label: "الصالات" },
                          { id: "kitchensCount", label: "المطابخ" },
                          { id: "parkingSpotsCount", label: "المواقف" },
                          { id: "gasMeterNumber", label: "عداد الغاز", type: "text" },
                        ].map(({ id, label, type = "number" }) => (
                          <FormGroup key={id} className="mb-0">
                            <Label className="mb-1 block text-sm text-gray-500">{label}</Label>
                            <Input type={type} id={id} name={id}
                              onChange={(e) => setInfo((p) => ({ ...p, [id]: e.target.value }))}
                              value={info[id] || ""} />
                          </FormGroup>
                        ))}
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {[
                          { id: "maidRoom", label: "غرفة الخادمة" },
                          { id: "storageRoom", label: "مخزن" },
                          { id: "majlis", label: "مجلس" },
                          { id: "backyard", label: "الفناء الخلفي" },
                          { id: "centralAC", label: "تكييف مركزي" },
                          { id: "splitAC", label: "تكييف سبليت" },
                          { id: "desertAC", label: "تكييف صحراوي" },
                          { id: "windowAC", label: "تكييف شباك" },
                        ].map(({ id, label }) => (
                          <FormGroup key={id} check className="text-right mb-1">
                            <Input type="checkbox" id={id} checked={!!info[id]}
                              onChange={(e) => setInfo((p) => ({ ...p, [id]: e.target.checked }))} />
                            <Label check for={id} className="text-sm text-gray-600">{label}</Label>
                          </FormGroup>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">العدادات</p>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {[
                        { id: "electricityMeter", numberKey: "electricityMeterNumber", label: "عداد كهرباء", numberLabel: "رقم عداد الكهرباء", placeholder: "اكتب رقم عداد الكهرباء" },
                        { id: "waterMeter", numberKey: "waterMeterNumber", label: "عداد مياه", numberLabel: "رقم عداد المياه", placeholder: "اكتب رقم عداد المياه" },
                      ].map(({ id, numberKey, label, numberLabel, placeholder }) => (
                        <div key={id}>
                          <FormGroup className="mb-0">
                            <Input type="checkbox" id={id} checked={!!info[id]}
                              onChange={(e) => setInfo((p) => ({ ...p, [id]: e.target.checked, [numberKey]: e.target.checked ? p[numberKey] || "" : "" }))}
                              style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}
                            />
                            <Label for={id} className="w-100 bg-white shadow-sm" style={{ cursor: "pointer", userSelect: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", padding: "10px 14px", borderRadius: "14px", border: info[id] ? "1px solid rgba(3,231,180,0.55)" : "1px solid rgba(0,0,0,0.10)", background: info[id] ? "rgba(3,231,180,0.08)" : "white", transition: "border-color 140ms ease, background 140ms ease" }}>
                              <span className="fw-semibold text-sm">{label}</span>
                              <span aria-hidden="true" style={{ width: "22px", height: "22px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", border: info[id] ? "1px solid rgba(3,231,180,0.75)" : "1px solid rgba(0,0,0,0.18)", background: info[id] ? "rgba(3,231,180,0.16)" : "rgba(0,0,0,0.02)", color: info[id] ? "rgb(0,135,110)" : "transparent", fontWeight: 900, lineHeight: 1 }}>✓</span>
                            </Label>
                          </FormGroup>
                          {info[id] && (
                            <FormGroup className="mt-2 mb-0">
                              <Label className="mb-1 block text-sm text-gray-500">{numberLabel}</Label>
                              <Input type="text" id={numberKey} name={numberKey} placeholder={placeholder}
                                value={info[numberKey] || ""}
                                onChange={(e) => setInfo((p) => ({ ...p, [numberKey]: e.target.value }))}
                                style={{ borderRadius: "12px" }} />
                            </FormGroup>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* <Row>
                <Col>
                  <Label>
                    تكاليف اضافية{' '}
                    <span style={{ color: 'rgb(39, 158, 144)' }}>
                      (اختياري)
                    </span>
                  </Label>
                </Col>
              </Row> */}
              <div className="flex flex-col gap-2 md:flex-row">
                {/* <Col sm='12' md='6'>
                  <FormGroup>
                    <Input
                      placeholder='قيمة مبلغ الضمان'
                      onChange={(e) =>
                        setInfo((previousState) => ({
                          ...previousState,
                          insurance: e.target.value,
                        }))
                      }
                      value={info.insurance}
                      // invalid={!insuranceChecked}
                      id='insurance'
                      name='insurance'
                      type='number'
                    />
                  </FormGroup>
                </Col>
                <Col sm='12' md='6'>
                  <FormGroup>
                    <Input
                      placeholder='قيمة الغرامة اليومية'
                      onChange={(e) =>
                        setInfo((previousState) => ({
                          ...previousState,
                          dailyFine: e.target.value,
                        }))
                      }
                      value={info.dailyFine}
                      // invalid={!dailyFineChecked}
                      id='dailyFine'
                      name='dailyFine'
                      type='number'
                    />
                  </FormGroup>
                </Col> */}
              </div>
            </Form>
          </div>
          <a
            className="btn__main btn1"
            style={{ display: "inline-block" }}
            onClick={gotoSeven}
          >
            التالي
          </a>
          <a
            className="btn__main btn1"
            style={{ display: "inline-block" }}
            onClick={() => previousStep()}
          >
            السابق
          </a>
        </div>
      )}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${modal ? "block bg-black-500 bg-opacity-50" : "hidden"}`}
      >
        <div className="rounded-lg bg-white p-5 text-center shadow-lg border-2 border-gray-200">
          <div className="p-3">
            اخترت ({info.contractDuration}) سنوات فيكون السعر{" "}
            {(info.contractDuration - 1) * 400 + 399} ريال
          </div>
          <div className="flex justify-center">
            <button
              className="rounded-full bg-red-700 px-4 py-2 text-gray-50"
              onClick={toggle}
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6;
