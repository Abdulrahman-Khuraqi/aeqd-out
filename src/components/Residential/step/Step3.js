import "moment-hijri";
import "moment/locale/ar";
import { useState } from "react";

import arabic from "react-date-object/calendars/arabic";
import arabicAr from "react-date-object/locales/arabic_ar";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";

import { CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const Step3 = ({ nextStep, previousStep, info, setInfo, isDevMode }) => {
  const [lessorNameChecked, setLessorNameChecked] = useState(true);
  const [lessorIdNumberChecked, setLessorIdNumberChecked] = useState(true);
  const [lessorPhoneCheacked, setLessorPhoneCheacked] = useState(true);
  const [lessorBirthdayCheacked, setLessorBirthdayCheacked] = useState(true);
  const [lessorIbanChecked, setLessorIbanChecked] = useState(true);

  const goToFour = () => {
    if (isDevMode) nextStep();

    if (
      info.lessorName === "" ||
      !/^[\u0621-\u064A\s]+$/.test(info.lessorName)
    ) {
      setLessorNameChecked(false);
    } else setLessorNameChecked(true);

    if (
      info.lessorIdNumber === "" ||
      !/[1-2]{1}[0-9]{9}$/.test(info.lessorIdNumber)
    ) {
      setLessorIdNumberChecked(false);
    } else setLessorIdNumberChecked(true);

    if (info.lessorPhone === "" || !/05[0-9]{8}$/.test(info.lessorPhone)) {
      setLessorPhoneCheacked(false);
    } else setLessorPhoneCheacked(true);

    if (info.lessorBirthday === "") {
      setLessorBirthdayCheacked(false);
    } else setLessorBirthdayCheacked(true);

    if (
      info.lessorIban === "" ||
      (!/^SA[0-9]{22}$/.test(info.lessorIban) &&
        !/^sa[0-9]{22}$/.test(info.lessorIban))
    ) {
      setLessorIbanChecked(false);
    } else setLessorIbanChecked(true);

    if (
      info.lessorName !== "" &&
      /^[\u0621-\u064A\s]+$/.test(info.lessorName) &&
      info.lessorIdNumber !== "" &&
      /[1-2]{1}[0-9]{9}$/.test(info.lessorIdNumber) &&
      info.lessorPhone !== "" &&
      /05[0-9]{8}$/.test(info.lessorPhone) &&
      info.lessorBirthday !== "" &&
      info.lessorIban !== "" &&
      (/^SA[0-9]{22}$/.test(info.lessorIban) ||
        /^sa[0-9]{22}$/.test(info.lessorIban))
    ) {
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
          معلومات المؤجر
        </CardTitle>
        <div>
          <Form className="text-right">
            <Row>
              <Col sm="12">
                <FormGroup
                  style={
                    lessorNameChecked
                      ? { borderColor: "transparent" }
                      : {
                          border: "1px solid rgb(220, 53, 69)",
                          borderRadius: "100px",
                        }
                  }
                >
                  <Input
                    placeholder="اسم المؤجر الثلاثي"
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lessorName: e.target.value,
                      }))
                    }
                    value={info.lessorName}
                    type="text"
                    name="lessorName"
                    id="lessorName"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup
                  style={
                    lessorIdNumberChecked
                      ? { borderColor: "transparent" }
                      : {
                          border: "1px solid rgb(220, 53, 69)",
                          borderRadius: "100px",
                        }
                  }
                >
                  <Input
                    placeholder="رقم هوية المؤجر"
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lessorIdNumber: e.target.value,
                      }))
                    }
                    value={info.lessorIdNumber}
                    type="number"
                    id="lessorIdNumber"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <FormGroup
                  style={
                    lessorPhoneCheacked
                      ? { borderColor: "transparent" }
                      : {
                          border: "1px solid rgb(220, 53, 69)",
                          borderRadius: "100px",
                        }
                  }
                >
                  <Input
                    placeholder="رقم جوال المؤجر"
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lessorPhone: e.target.value,
                      }))
                    }
                    value={info.lessorPhone}
                    type="number"
                    id="lessorPhone"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup
                  style={
                    lessorBirthdayCheacked
                      ? { borderColor: "transparent" }
                      : {
                          border: "1px solid rgb(220, 53, 69)",
                          borderRadius: "100px",
                        }
                  }
                >
                  <DatePicker
                    placeholder="تاريخ ميلاد المؤجر"
                    format="YYYY-MM-DD"
                    className="green"
                    locale={arabicAr}
                    calendar={arabic}
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lessorBirthday: e.format("YYYY-MM-DD"),
                      }))
                    }
                    value={info.lessorBirthday}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup
                  style={
                    lessorIbanChecked
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
                        lessorIban: e.target.value,
                      }))
                    }
                    value={info.lessorIban}
                    maxLength="24"
                    type="text"
                    placeholder="SA0380000000608010167519"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <a
          className="btn__main btn1"
          style={{ display: "inline-block" }}
          onClick={goToFour}
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

export default Step3;
