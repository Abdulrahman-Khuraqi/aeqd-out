import "moment-hijri";
import "moment/locale/ar";
import { useState } from "react";
import arabic from "react-date-object/calendars/arabic";
import arabicAr from "react-date-object/locales/arabic_ar";
import "react-datetime/css/react-datetime.css";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import { CardTitle, Col, Form, FormGroup, Input, Row } from "reactstrap";

const Step4 = ({ info, setInfo, nextStep, previousStep, isDevMode }) => {
  const [lesseeNameChecked, setLesseeNameChecked] = useState(true);
  const [lesseeIdNumberChecked, setLesseeIdNumberChecked] = useState(true);
  const [lesseePhoneChecked, setLesseePhoneChecked] = useState(true);
  const [lesseeBirthdayChecked, setLesseeBirthdayChecked] = useState(true);

  const gotoFive = () => {
    if (isDevMode) nextStep();
    if (
      info.lesseeName === "" ||
      !/^[\u0621-\u064A\s]+$/.test(info.lesseeName)
    ) {
      setLesseeNameChecked(false);
    } else setLesseeNameChecked(true);

    if (
      info.lesseeIdNumber === "" ||
      !/[1-2]{1}[0-9]{9}$/.test(info.lesseeIdNumber)
    ) {
      setLesseeIdNumberChecked(false);
    } else setLesseeIdNumberChecked(true);

    if (info.lesseePhone === "" || !/05[0-9]{8}$/.test(info.lesseePhone)) {
      setLesseePhoneChecked(false);
    } else setLesseePhoneChecked(true);

    if (info.lesseeBirthday === "") {
      setLesseeBirthdayChecked(false);
    } else setLesseeBirthdayChecked(true);

    if (
      info.lesseeName !== "" &&
      /^[\u0621-\u064A\s]+$/.test(info.lesseeName) &&
      info.lesseeIdNumber !== "" &&
      /[1-2]{1}[0-9]{9}$/.test(info.lesseeIdNumber) &&
      info.lesseePhone !== "" &&
      /05[0-9]{8}$/.test(info.lesseePhone) &&
      info.lesseeBirthday !== ""
    ) {
      nextStep();
    }
  };

  return (
    <div>
      <div
        className="p-4 text-center bg-gray-50  shadow-lg"
        style={{ borderRadius: "20px" }}
      >
        <CardTitle className="h4 mb-4 text-2xl font-bold" color="primary">
          معلومات المستأجر
        </CardTitle>
        <div>
          <Form className="text-right">
            <Row>
              <Col sm="12">
                <FormGroup
                  style={
                    lesseeNameChecked
                      ? { borderColor: "transparent" }
                      : {
                          border: "1px solid rgb(220, 53, 69)",
                          borderRadius: "100px",
                        }
                  }
                >
                  <Input
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lesseeName: e.target.value,
                      }))
                    }
                    value={info.lesseeName}
                    placeholder="اسم المستأجر الثلاثي"
                    type="text"
                    id="lesseeName"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup
                  style={
                    lesseeIdNumberChecked
                      ? { borderColor: "transparent" }
                      : {
                          border: "1px solid rgb(220, 53, 69)",
                          borderRadius: "100px",
                        }
                  }
                >
                  <Input
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lesseeIdNumber: e.target.value,
                      }))
                    }
                    value={info.lesseeIdNumber}
                    placeholder="رقم هوية المستأجر"
                    type="number"
                    id="lesseeIdNumber"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <FormGroup
                  style={
                    lesseePhoneChecked
                      ? { borderColor: "transparent" }
                      : {
                          border: "1px solid rgb(220, 53, 69)",
                          borderRadius: "100px",
                        }
                  }
                >
                  <Input
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lesseePhone: e.target.value,
                      }))
                    }
                    value={info.lesseePhone}
                    placeholder="رقم الجوال المستأجر"
                    type="number"
                    id="lesseePhone"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup
                  style={
                    lesseeBirthdayChecked
                      ? { borderColor: "transparent" }
                      : {
                          border: "1px solid rgb(220, 53, 69)",
                          borderRadius: "100px",
                        }
                  }
                >
                  <DatePicker
                    placeholder="تاريخ ميلاد المستأجر"
                    format="YYYY-MM-DD"
                    className="green"
                    calendar={arabic}
                    locale={arabicAr}
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lesseeBirthday: e.format("YYYY-MM-DD"),
                      }))
                    }
                    value={info.lesseeBirthday}
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
