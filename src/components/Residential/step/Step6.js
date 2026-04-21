import "moment-hijri";
import "moment/locale/ar";
import { useEffect, useState } from "react";
import arabic from "react-date-object/calendars/arabic";
import arabicAr from "react-date-object/locales/arabic_ar";
import "react-datetime/css/react-datetime.css";
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
  setNewContract,
  isDevMode,
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

  // const waterOp = [
  //   { value: 'مبلغ ثابت', label: 'مبلغ ثابت' },
  //   { value: 'حسب العدد', label: 'حسب العدد' },
  // ];
  // const electricityOp = [
  //   { value: 'مبلغ ثابت', label: 'مبلغ ثابت' },
  //   { value: 'حسب العدد', label: 'حسب العدد' },
  // ];
  const unitTypeOp = [
    { value: "دور", label: "دور" },
    { value: "شقة ", label: "شقة " },
    { value: "فيلا ", label: "فيلا " },
    { value: "عمارة", label: "عمارة" },
    { value: "برج", label: "برج" },
    { value: "شقة ثنائية الدور(دوبلكس) ", label: "شقة ثنائية الدور(دوبلكس) " },
    { value: "شقة صغيرة (استوديو) ", label: "شقة صغيرة (استوديو) " },
    { value: "شقة ملحق ", label: "شقة ملحق " },
    { value: "شقة وملحق علوي ", label: "شقة وملحق علوي " },
    { value: "دور وملحق علوي ", label: "دور وملحق علوي " },
    { value: "فيلا سطح ", label: "فيلا سطح " },
    { value: "غرفة سائق ", label: "غرفة سائق " },
    { value: "أخرى", label: "أخرى" },
    { value: "استراحة ", label: "استراحة " },
    { value: "مزرعة", label: "مزرعة" },
  ];
  const [unitTypeCheacked, setUnitTypeCheacked] = useState(true);
  const [unitUseChecked, setUnitUseChecked] = useState(true);
  const [FloorNoChecked, setFloorNoChecked] = useState(true);
  const [apartmentNoCheacked, setApartmentNoCheacked] = useState(true);
  const [roomNoCheacked, setRoomNoChe] = useState(true);
  const [spaceChecked, setSpaceChecked] = useState(true);
  const [showAdvancedUnitOptions, setShowAdvancedUnitOptions] = useState(false);
  const [rentAmountChecked, setRentAmountChecked] = useState(true);
  const [paymentMethodChecked, setPaymentMethodChecked] = useState(true);
  const [startingDateCheacked, setStartingDateCheacked] = useState(true);
  const [contractDurationCheacked, setContractDurationCheacked] =
    useState(true);
  // const [dailyFineChecked, setDailyFineChecked] = useState(true);
  // const [waterChecked, setWaterChecked] = useState(true);
  // const [electricityChecked, setElectricityChecked] = useState(true);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const gotoSeven = () => {
    if (isDevMode) nextStep();

    const unitTypeOk = info.unitType !== "";
    setUnitTypeCheacked(unitTypeOk);

    const unitUseOk = (info.unitUse || "").trim() !== "";
    setUnitUseChecked(unitUseOk);

    const floorOk = (info.FloorNo || "").toString().trim() !== "";
    setFloorNoChecked(floorOk);

    const apartmentOk = (info.apartmentNo || "").toString().trim() !== "";
    setApartmentNoCheacked(apartmentOk);

    const roomsOk = (info.roomNo || "").toString().trim() !== "";
    setRoomNoChe(roomsOk);

    const spaceOk = (info.space || "").toString().trim() !== "";
    setSpaceChecked(spaceOk);

    if (info.rentAmount === "") {
      setRentAmountChecked(false);
    } else setRentAmountChecked(true);
    if (info.paymentMethod === "") setPaymentMethodChecked(false);
    else setPaymentMethodChecked(true);
    if (info.startingDate === "") setStartingDateCheacked(false);
    else setStartingDateCheacked(true);
    if (info.contractDuration === "") setContractDurationCheacked(false);
    else setContractDurationCheacked(true);

    if (
      unitTypeOk &&
      unitUseOk &&
      floorOk &&
      apartmentOk &&
      roomsOk &&
      spaceOk &&
      info.rentAmount !== "" &&
      info.paymentMethod !== "" &&
      info.startingDate !== "" &&
      info.contractDuration !== ""
    )
      nextStep();
  };
  useEffect(() => {
    if (currentStep === 6) setNewContract(true);
    else setNewContract(false);
  });
  const handleDuration = (e) => {
    console.log(e.value);
    setInfo((previousState) => ({
      ...previousState,
      contractDuration: e.value,
    }));
    toggle();
  };
  return (
    <div>
      {newContract && (
        <div
          className={`bg-gray-50 p-4 text-center ${modal ? "bg-black-500 bg-opacity-50 backdrop-blur-sm" : ""} `}
          style={{ borderRadius: "20px" }}
        >
          <CardTitle className="h4 mb-4 text-2xl font-bold" color="primary">
            معلومات العقد الجديد
          </CardTitle>
          <div>
            <Form className="text-right">
              <Row className="gy-2">
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label>مبلغ الإيجار السنوي:</Label>
                    <br />
                    <Input
                      placeholder="5000000"
                      type="text"
                      id="name"
                      onChange={(e) =>
                        setInfo((previousState) => ({
                          ...previousState,
                          rentAmount: e.target.value,
                        }))
                      }
                      value={info.rentAmount}
                      invalid={!rentAmountChecked}
                      style={
                        rentAmountChecked
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
                      <FormText className="text-red-500">
                        الرجاء تحديد طريقة الدفع
                      </FormText>
                    )}{" "}
                  </FormGroup>
                </Col>
              </Row>
              <Row className="gy-2">
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label>تاريخ بداية العقد:</Label>
                    <br />
                    <DatePicker
                      placeholder="تاريخ بداية العقد"
                      format="YYYY-MM-DD"
                      className="green"
                      calendar={arabic}
                      locale={arabicAr}
                      onChange={(e) =>
                        setInfo((previousState) => ({
                          ...previousState,
                          startingDate: e.format("YYYY-MM-DD"),
                        }))
                      }
                      id="startingDate"
                      invalid={!startingDateCheacked}
                      value={info.startingDate}
                    />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
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
                </Col>
              </Row>
              <Row>
                <Col>
                  <div
                    className="mb-3 bg-white p-3 shadow-sm"
                    style={{ borderRadius: "16px", border: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <div className="mb-3 flex items-center gap-2 border-r-4 border-primary-500 pr-3">
                      <span className="text-sm font-semibold text-gray-600">معلومات الوحدة</span>
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <FormGroup className="mb-0">
                        <Label className="mb-1 block text-sm font-medium text-gray-600">نوع الوحدة</Label>
                        <Select
                          placeholder="اختر نوع الوحدة"
                          options={unitTypeOp}
                          onChange={(e) =>
                            setInfo((previousState) => ({
                              ...previousState,
                              unitType: e.value,
                            }))
                          }
                        />
                        {!unitTypeCheacked && (
                          <FormText className="text-red-500">الرجاء تحديد نوع الوحدة</FormText>
                        )}
                      </FormGroup>

                      <FormGroup className="mb-0">
                        <Label className="mb-1 block text-sm font-medium text-gray-600">استخدام الوحدة</Label>
                        <Input
                          placeholder="مثال: سكني"
                          type="text"
                          id="unitUse"
                          name="unitUse"
                          onChange={(e) =>
                            setInfo((previousState) => ({
                              ...previousState,
                              unitUse: e.target.value,
                            }))
                          }
                          value={info.unitUse || ""}
                          style={unitUseChecked ? {} : { border: "1px solid rgb(220, 53, 69)", borderRadius: "8px" }}
                        />
                        {!unitUseChecked && (
                          <FormText className="text-red-500">الرجاء إدخال استخدام الوحدة</FormText>
                        )}
                      </FormGroup>
                    </div>

                    <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                      <FormGroup className="mb-0">
                        <Label className="mb-1 block text-sm font-medium text-gray-600">رقم الطابق</Label>
                        <Input
                          placeholder="مثال: 3"
                          type="number"
                          onChange={(e) =>
                            setInfo((previousState) => ({
                              ...previousState,
                              FloorNo: e.target.value,
                            }))
                          }
                          value={info.FloorNo}
                          maxLength="4"
                          style={FloorNoChecked ? {} : { border: "1px solid rgb(220, 53, 69)", borderRadius: "8px" }}
                        />
                      </FormGroup>
                      <FormGroup className="mb-0">
                        <Label className="mb-1 block text-sm font-medium text-gray-600">رقم الوحدة</Label>
                        <Input
                          placeholder="مثال: 12"
                          type="text"
                          maxLength="5"
                          onChange={(e) =>
                            setInfo((previousState) => ({
                              ...previousState,
                              apartmentNo: e.target.value,
                            }))
                          }
                          value={info.apartmentNo}
                          style={apartmentNoCheacked ? {} : { border: "1px solid rgb(220, 53, 69)", borderRadius: "8px" }}
                        />
                      </FormGroup>
                      <FormGroup className="mb-0">
                        <Label className="mb-1 block text-sm font-medium text-gray-600">عدد الغرف</Label>
                        <Input
                          placeholder="مثال: 4"
                          type="number"
                          maxLength="3"
                          onChange={(e) =>
                            setInfo((previousState) => ({
                              ...previousState,
                              roomNo: e.target.value,
                            }))
                          }
                          value={info.roomNo}
                          style={roomNoCheacked ? {} : { border: "1px solid rgb(220, 53, 69)", borderRadius: "8px" }}
                        />
                      </FormGroup>
                      <FormGroup className="mb-0">
                        <Label className="mb-1 block text-sm font-medium text-gray-600">المساحة (م²)</Label>
                        <Input
                          placeholder="مثال: 120"
                          type="number"
                          id="space"
                          name="space"
                          onChange={(e) =>
                            setInfo((previousState) => ({
                              ...previousState,
                              space: e.target.value,
                            }))
                          }
                          value={info.space}
                          style={spaceChecked ? {} : { border: "1px solid rgb(220, 53, 69)", borderRadius: "8px" }}
                        />
                      </FormGroup>
                    </div>
                  </div>

                  <div className="mb-3">
                    <button
                      type="button"
                      onClick={() => setShowAdvancedUnitOptions((previous) => !previous)}
                      className="w-100 bg-white p-3 text-right shadow-sm"
                      style={{
                        width: "100%",
                        borderRadius: "16px",
                        border: "1px solid rgba(0,0,0,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                      }}
                    >
                      <div>
                        <div className="fw-bold d-flex align-items-center" style={{ gap: "10px" }}>
                          <span>خيارات إضافية</span>
                          <span
                            className="fw-semibold"
                            style={{
                              fontSize: "0.75rem",
                              padding: "4px 10px",
                              marginInline: "6px",
                              borderRadius: "999px",
                              background: "rgba(13,110,253,0.10)",
                              border: "1px solid rgba(13,110,253,0.25)",
                              color: "rgb(13,110,253)",
                              lineHeight: 1,
                              flexShrink: 0,
                            }}
                          >
                            اختياري
                          </span>
                        </div>
                        <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                          هذه الحقول اختيارية ويمكن تركها فارغة
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "12px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(0,0,0,0.04)",
                          border: "1px solid rgba(0,0,0,0.06)",
                          transform: showAdvancedUnitOptions ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 150ms ease",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                  </div>

                  {showAdvancedUnitOptions && (
                    <div
                      className="mb-3 bg-white p-3 shadow-sm"
                      style={{ borderRadius: "16px", border: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      <div className="mb-3 border-b border-gray-100 pb-3">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">الأبعاد والخصائص</p>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                          <FormGroup className="mb-0">
                            <Label className="mb-1 block text-sm text-gray-500" for="unitCreationDate">تاريخ الإنشاء</Label>
                            <Input type="date" id="unitCreationDate" name="unitCreationDate"
                              onChange={(e) => setInfo((p) => ({ ...p, unitCreationDate: e.target.value }))}
                              value={info.unitCreationDate || ""} />
                          </FormGroup>
                          <FormGroup className="mb-0">
                            <Label className="mb-1 block text-sm text-gray-500" for="unitDirection">اتجاه الوحدة</Label>
                            <Input type="text" id="unitDirection" name="unitDirection" placeholder="شمالي"
                              onChange={(e) => setInfo((p) => ({ ...p, unitDirection: e.target.value }))}
                              value={info.unitDirection || ""} />
                          </FormGroup>
                          <FormGroup className="mb-0">
                            <Label className="mb-1 block text-sm text-gray-500" for="unitFinishing">التشطيب</Label>
                            <Input type="text" id="unitFinishing" name="unitFinishing" placeholder="سوبر لوكس"
                              onChange={(e) => setInfo((p) => ({ ...p, unitFinishing: e.target.value }))}
                              value={info.unitFinishing || ""} />
                          </FormGroup>
                          <FormGroup className="mb-0">
                            <Label className="mb-1 block text-sm text-gray-500" for="frontFacadeLength">طول الواجهة (م)</Label>
                            <Input type="number" id="frontFacadeLength" name="frontFacadeLength" placeholder="بالمتر"
                              onChange={(e) => setInfo((p) => ({ ...p, frontFacadeLength: e.target.value }))}
                              value={info.frontFacadeLength || ""} />
                          </FormGroup>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                          <FormGroup className="mb-0">
                            <Label className="mb-1 block text-sm text-gray-500" for="unitLength">الطول (م)</Label>
                            <Input type="number" id="unitLength" name="unitLength" placeholder="م"
                              onChange={(e) => setInfo((p) => ({ ...p, unitLength: e.target.value }))}
                              value={info.unitLength || ""} />
                          </FormGroup>
                          <FormGroup className="mb-0">
                            <Label className="mb-1 block text-sm text-gray-500" for="unitWidth">العرض (م)</Label>
                            <Input type="number" id="unitWidth" name="unitWidth" placeholder="م"
                              onChange={(e) => setInfo((p) => ({ ...p, unitWidth: e.target.value }))}
                              value={info.unitWidth || ""} />
                          </FormGroup>
                          <FormGroup className="mb-0">
                            <Label className="mb-1 block text-sm text-gray-500" for="unitHeight">الارتفاع (م)</Label>
                            <Input type="number" id="unitHeight" name="unitHeight" placeholder="م"
                              onChange={(e) => setInfo((p) => ({ ...p, unitHeight: e.target.value }))}
                              value={info.unitHeight || ""} />
                          </FormGroup>
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
                              <Label for={id} className="w-100 bg-white shadow-sm" style={{
                                cursor: "pointer", userSelect: "none", display: "flex", alignItems: "center",
                                justifyContent: "space-between", gap: "10px", padding: "10px 14px",
                                borderRadius: "100px",
                                border: value ? "1px solid rgba(3,231,180,0.55)" : "1px solid rgba(0,0,0,0.10)",
                                background: value ? "rgba(3,231,180,0.08)" : "white",
                                transition: "border-color 140ms ease, background 140ms ease",
                              }}>
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
                                <Label className="mb-1 block text-sm text-gray-500" for={id}>{label}</Label>
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
                              { id: "kitchenCabinetsInstalled", label: "خزائن المطبخ مركبة" },
                            ].map(({ id, label }) => (
                              <FormGroup key={id} check className="text-right mb-1">
                                <Input type="checkbox" id={id} checked={!!info[id]}
                                  onChange={(e) => setInfo((p) => ({ ...p, [id]: e.target.checked }))} />
                                <Label check for={id} className="text-sm text-gray-600">{label}</Label>
                              </FormGroup>
                            ))}
                          </div>
                          <div className="mt-3">
                            <p className="mb-2 text-xs text-gray-400">التكييف</p>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                { id: "centralAC", label: "مركزي" },
                                { id: "splitAC", label: "سبليت" },
                                { id: "desertAC", label: "صحراوي" },
                                { id: "windowAC", label: "شباك" },
                              ].map(({ id, label }) => (
                                <FormGroup key={id} check className="text-right mb-1">
                                  <Input type="checkbox" id={id} checked={!!info[id]}
                                    onChange={(e) => setInfo((p) => ({ ...p, [id]: e.target.checked }))} />
                                  <Label check for={id} className="text-sm text-gray-600">{label}</Label>
                                </FormGroup>
                              ))}
                            </div>
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
                              <FormGroup className="text-right mb-0">
                                <Input type="checkbox" id={id} checked={!!info[id]}
                                  onChange={(e) => setInfo((p) => ({ ...p, [id]: e.target.checked, [numberKey]: e.target.checked ? p[numberKey] || "" : "" }))}
                                  style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}
                                />
                                <Label for={id} className="w-100 bg-white shadow-sm" style={{
                                  cursor: "pointer", userSelect: "none", display: "flex", alignItems: "center",
                                  justifyContent: "space-between", gap: "10px", padding: "10px 14px",
                                  borderRadius: "14px",
                                  border: info[id] ? "1px solid rgba(3,231,180,0.55)" : "1px solid rgba(0,0,0,0.10)",
                                  background: info[id] ? "rgba(3,231,180,0.08)" : "white",
                                  transition: "border-color 140ms ease, background 140ms ease",
                                }}>
                                  <span className="fw-semibold text-sm">{label}</span>
                                  <span aria-hidden="true" style={{ width: "22px", height: "22px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", border: info[id] ? "1px solid rgba(3,231,180,0.75)" : "1px solid rgba(0,0,0,0.18)", background: info[id] ? "rgba(3,231,180,0.16)" : "rgba(0,0,0,0.02)", color: info[id] ? "rgb(0,135,110)" : "transparent", fontWeight: 900, lineHeight: 1 }}>✓</span>
                                </Label>
                              </FormGroup>
                              {info[id] && (
                                <FormGroup className="mt-2 text-right mb-0">
                                  <Label className="mb-1 block text-sm text-gray-500" for={numberKey}>{numberLabel}</Label>
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
                </Col>
              </Row>
              {/* <Row>
                <Col>
                  <Label>تكاليف اضافية <span style={{color: 'rgb(39, 158, 144)'}}>(اختياري)</span></Label>
                </Col>
              </Row> */}
              {/* <Row>
                 <Col sm='12' md='6'>
                  <FormGroup>
                    <Input
                      placeholder='قيمة مبلغ الضمان'
                      onChange={(e) =>
                        setInfo((previousState) => ({
                          ...previousState,
                          insurance: e.target.value,
                        }))
                      }
                      maxLength='10'
                      type='number'
                      value={info.insurance}
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
                      maxLength='7'
                      type='number'
                      value={info.dailyFine}
                      // invalid={!dailyFineChecked}
                    />
                  </FormGroup>
                </Col>
              </Row> */}
              {/* <Row>
                <Col>
                  <Label>الماء:</Label>
                </Col>
              </Row>
              <Row>
                <Col sm='12' md='6'>
                  <FormGroup>
                    <Select
                      placeholder='طريقة دفع الماء'
                      onChange={(e) =>
                        setInfo((previousState) => ({
                          ...previousState,
                          water: e.value,
                        }))
                      }
                      options={waterOp}
                    />
                  </FormGroup>
                </Col>
                <Col sm='12' md='6'>
                  <FormGroup>
                    {info.water === 'مبلغ ثابت' ? (
                      <Input
                        placeholder='ادخل المبلغ'
                        disabled={info.water === ''}
                        onChange={(e) =>
                          setInfo((previousState) => ({
                            ...previousState,
                            waterNo: e.target.value,
                          }))
                        }
                        maxLength='10'
                        invalid={!waterChecked}
                        type='number'
                      />
                    ) : (
                      <Input
                        type='number'
                        placeholder=' ادخل رقم العدد'
                        disabled={info.water === ''}
                        onChange={(e) =>
                          setInfo((previousState) => ({
                            ...previousState,
                            waterNo: e.target.value,
                          }))
                        }
                      />
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>الكهرباء:</Label>
                </Col>
              </Row>
              <Row>
                <Col sm='12' md='6'>
                  <FormGroup>
                    <Select
                      placeholder='طريقة دفع الكهرباء'
                      options={electricityOp}
                      onChange={(e) =>
                        setInfo((previousState) => ({
                          ...previousState,
                          electricity: e.value,
                        }))
                      }
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    {info.electricity === 'مبلغ ثابت' ? (
                      <Input
                        type='number'
                        invalid={!electricityChecked}
                        disabled={info.electricity === ''}
                        placeholder='ادخل المبلغ'
                        onChange={(e) =>
                          setInfo((previousState) => ({
                            ...previousState,
                            electricityNo: e.target.value,
                          }))
                        }
                        maxLength='10'
                      />
                    ) : (
                      <Input
                        type='number'
                        disabled={info.electricity === ''}
                        placeholder='ادخل رقم العدد '
                        onChange={(e) =>
                          setInfo((previousState) => ({
                            ...previousState,
                            electricityNo: e.target.value,
                          }))
                        }
                        maxLength='20'
                      />
                    )}
                  </FormGroup>{' '}
                </Col>
              </Row> */}
            </Form>
          </div>
          <a className="btn__main btn1 inline-block" onClick={gotoSeven}>
            التالي
          </a>
          <a
            className="btn__main btn1 inline-block"
            onClick={() => previousStep()}
          >
            السابق
          </a>
        </div>
      )}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black-500 bg-opacity-50 backdrop-blur-sm ${modal ? "block   " : "hidden"}`}
        >
        <div className="rounded-lg border-2 border-gray-300 bg-white p-5 text-center shadow-lg">
          <div className="p-3">
            اخترت ({info.contractDuration}) سنوات فيكون السعر{" "}
            {info.contractDuration * 125 + 124} ريال
          </div>
          <div className="flex justify-center">
            <button
              className="mt-5 rounded-full bg-red-600 px-4 py-2 text-white shadow-lg hover:bg-gray-400"
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
