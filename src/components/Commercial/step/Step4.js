import "moment-hijri";
import "moment/locale/ar";
import { useState } from "react";
import arabic from "react-date-object/calendars/arabic";
import arabicAr from "react-date-object/locales/arabic_ar";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";

import {
  CardTitle,
  Col,
  Label,
  Form,
  FormGroup,
  FormText,
  Input,
  Row,
} from "reactstrap";

const Step4 = ({
  info,
  setInfo,
  nextStep,
  previousStep,
  setCommerialImage,
  commercialImage
  ,isDevMode
}) => {
  const [lesseeNameChecked, setLesseeNameChecked] = useState(true);
  const [lesseeIdNumberChecked, setLesseeIdNumberChecked] = useState(true);
  const [lesseePhoneChecked, setLesseePhoneChecked] = useState(true);
  const [lesseeBirthdayChecked, setLesseeBirthdayChecked] = useState(true);
  const [commercialRegistrationNoChecked, setCommercialRegistrationNoChecked] =
    useState(true);
  const [commercialImageChecked, setCommercialImageChecked] = useState(true);

  const handleCommercialImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "oidj6ike");
    formData.append("api_key", "437254763994818");
    setCommerialImage(formData);
  };

  const gotoFive = () => {
    if (commercialImage === "") {
      setCommercialImageChecked(false);
    } else {
      setCommercialImageChecked(true);
    }

    if (
      info.commercialRegistrationNo === "" ||
      !/^\d{10}$/.test(info.commercialRegistrationNo)
    ) {
      setCommercialRegistrationNoChecked(false);
    } else {
      setCommercialRegistrationNoChecked(true);
    }

    if (
      info.lesseeName === "" ||
      !/^[\u0621-\u064A\s]+$/.test(info.lesseeName)
    ) {
      setLesseeNameChecked(false);
    } else {
      setLesseeNameChecked(true);
    }

    if (
      info.lesseeIdNumber === "" ||
      !/[1-2]{1}[0-9]{9}$/.test(info.lesseeIdNumber)
    ) {
      setLesseeIdNumberChecked(false);
    } else {
      setLesseeIdNumberChecked(true);
    }

    if (info.lesseePhone === "" || !/05[0-9]{8}$/.test(info.lesseePhone)) {
      setLesseePhoneChecked(false);
    } else {
      setLesseePhoneChecked(true);
    }

    if (info.lesseeBirthday === "") {
      setLesseeBirthdayChecked(false);
    } else {
      setLesseeBirthdayChecked(true);
    }

    if (isDevMode) {
      nextStep();
      return;
    }

    if (
      info.lesseeName !== "" &&
      /^[\u0621-\u064A\s]+$/.test(info.lesseeName) &&
      info.lesseeIdNumber !== "" &&
      /[1-2]{1}[0-9]{9}$/.test(info.lesseeIdNumber) &&
      info.lesseePhone !== "" &&
      /05[0-9]{8}$/.test(info.lesseePhone) &&
      info.lesseeBirthday !== "" &&
      commercialImage !== ""
    ) {
      nextStep();
    }
  };

  return (
    <div>
      <div
        className="p-4 text-center shadow-lg"
        style={{ borderRadius: "20px", background: "white" }}
      >
        <CardTitle className="mb-4 text-2xl font-bold">
          معلومات المستأجر
        </CardTitle>
        <div>
          <Form className="text-right">
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Input
                    onChange={(e) => {
                      setInfo((previousState) => ({
                        ...previousState,
                        commercialRegistrationNo: e.target.value,
                      }));
                    }}
                    placeholder="رقم السجل التجاري للمؤسسة"
                    value={info.commercialRegistrationNo}
                    style={{
                      borderColor: commercialRegistrationNoChecked ? "" : "red",
                    }}
                    type="number"
                    id="commercialRegistrationNo"
                  />
                  {!commercialRegistrationNoChecked && (
                    <FormText className="text-red-500">
                      الرجاء إدخال رقم سجل تجاري صحيح مكون من 10 أرقام.
                    </FormText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Input
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lesseeIdNumber: e.target.value,
                      }))
                    }
                    value={info.lesseeIdNumber}
                    placeholder="رقم هوية ممثل المؤسسة"
                    style={{
                      borderColor: lesseeIdNumberChecked ? "" : "red",
                    }}
                    type="number"
                    id="lesseeIdNumber"
                  />
                  {!lesseeIdNumberChecked && (
                    <FormText className="text-red-500">
                      الرجاء إدخال رقم هوية صالح مكون من 10 أرقام.
                    </FormText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Input
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lesseeName: e.target.value,
                      }))
                    }
                    value={info.lesseeName}
                    placeholder="الاسم الثلاثي لممثل المؤسسة"
                    style={{
                      borderColor: lesseeNameChecked ? "" : "red",
                    }}
                    type="text"
                    id="lesseeName"
                  />
                  {!lesseeNameChecked && (
                    <FormText className="text-red-500">
                      الرجاء إدخال اسم ثلاثي باللغة العربية.
                    </FormText>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Input
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lesseePhone: e.target.value,
                      }))
                    }
                    value={info.lesseePhone}
                    placeholder="رقم الجوال"
                    style={{
                      borderColor: lesseePhoneChecked ? "" : "red",
                    }}
                    type="number"
                    id="lesseePhone"
                  />
                  {!lesseePhoneChecked && (
                    <FormText className="text-red-500">
                      الرجاء إدخال رقم جوال يبدأ بـ 05.
                    </FormText>
                  )}
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <DatePicker
                    placeholder="تاريخ ميلاد المستأجر"
                    format="YYYY-MM-DD"
                    className="green"
                    locale={arabicAr}
                    calendar={arabic}
                    onChange={(date) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lesseeBirthday: date.format("YYYY-MM-DD"),
                      }))
                    }
                    style={{
                      borderColor: lesseeBirthdayChecked ? "" : "red",
                    }}
                    value={info.lesseeBirthday}
                  />
                  {!lesseeBirthdayChecked && (
                    <FormText className="text-red-500">
                      الرجاء اختيار تاريخ الميلاد.
                    </FormText>
                  )}
                </FormGroup>
              </Col>
              <Col xs="12">
                <FormGroup>
                  <Label
                    for="commercialImage"
                    className="btn1 btn__main m-0 text-center"
                    style={{
                      textAlign: "center",
                      display: "block",
                      borderRadius: "100px",
                    }}
                  >
                    ارفق سجل تجاري أو وكالة
                  </Label>
                  {!commercialImageChecked && (
                    <FormText className="text-red-500">
                      الرجاء ارفق الصورة
                    </FormText>
                  )}
                  <Input
                    style={{
                      visibility: "hidden",
                      height: "0",
                      marginBottom: "-20px",
                    }}
                    multiple
                    accept="image/*"
                    type="file"
                    id="commercialImage"
                    name="commercialImage"
                    onChange={handleCommercialImage}
                    placeholder="Enter your Profile image"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <a
          className="btn__main btn1"
          style={{ display: "inline-block" }}
          onClick={gotoFive}
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
    </div>
  );
};

export default Step4;
