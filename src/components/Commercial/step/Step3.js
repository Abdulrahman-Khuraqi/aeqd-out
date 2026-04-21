import "moment-hijri";
import "moment/locale/ar";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";

import arabic from "react-date-object/calendars/arabic";
import arabicAr from "react-date-object/locales/arabic_ar";
import {
  CardTitle,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";

const Step3 = ({ nextStep, previousStep, info, setInfo ,isDevMode}) => {
  const [lessorNameChecked, setLessorNameChecked] = useState(true);
  const [lessorIdNumberChecked, setLessorIdNumberChecked] = useState(true);
  const [lessorPhoneChecked, setLessorPhoneChecked] = useState(true);
  const [lessorBirthdayChecked, setLessorBirthdayChecked] = useState(true);
  const [lessorIbanChecked, setLessorIbanChecked] = useState(true);

  const goToFour = () => {
    if(isDevMode) nextStep();

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
      setLessorPhoneChecked(false);
    } else setLessorPhoneChecked(true);

    if (info.lessorBirthday === "") {
      setLessorBirthdayChecked(false);
    } else setLessorBirthdayChecked(true);

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
      /^SA[0-9]{22}$/.test(info.lessorIban)
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
          معلومات المؤجر
        </CardTitle>
        <div>
          <Form className="text-right">
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Input
                    placeholder="اسم المؤجر الثلاثي"
                    onChange={(e) =>
                      setInfo((prev) => ({
                        ...prev,
                        lessorName: e.target.value,
                      }))
                    }
                    value={info.lessorName}
                    style={{
                      borderColor: lessorNameChecked ? "" : "red",
                    }}
                    type="text"
                  />
                  {!lessorNameChecked && (
                    <FormText className="text-red-500">
                      يرجى إدخال الاسم بشكل صحيح
                    </FormText>
                  )}
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Input
                    placeholder="رقم هوية المؤجر"
                    onChange={(e) =>
                      setInfo((prev) => ({
                        ...prev,
                        lessorIdNumber: e.target.value,
                      }))
                    }
                    value={info.lessorIdNumber}
                    style={{
                      borderColor: lessorIdNumberChecked ? "" : "red",
                    }}
                    type="number"
                  />
                  {!lessorIdNumberChecked && (
                    <FormText className="text-red-500">
                      يرجى إدخال رقم الهوية بشكل صحيح
                    </FormText>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Input
                    placeholder="رقم جوال المؤجر"
                    onChange={(e) =>
                      setInfo((prev) => ({
                        ...prev,
                        lessorPhone: e.target.value,
                      }))
                    }
                    value={info.lessorPhone}
                    style={{
                      borderColor: lessorPhoneChecked ? "" : "red",
                    }}
                    type="number"
                  />
                  {!lessorPhoneChecked && (
                    <FormText className="text-red-500">
                      يرجى إدخال رقم الجوال بشكل صحيح
                    </FormText>
                  )}
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup
                  style={{
                    borderColor: !lessorBirthdayChecked ? "" : "red",
                  }}
                >
                  <DatePicker
                    placeholder="تاريخ ميلاد المؤجر"
                    format="YYYY-MM-DD"
                    className="green"
                    calendar={arabic}
                    locale={arabicAr}
                    onChange={(date) =>
                      setInfo((prev) => ({
                        ...prev,
                        lessorBirthday: date.format("YYYY-MM-DD"),
                      }))
                    }
                    value={info.lessorBirthday}
                  />
                  {!lessorBirthdayChecked && (
                    <FormText className="text-red-500">
                      يرجى إدخال تاريخ الميلاد
                    </FormText>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Input
                    placeholder="SA0380000000608010167519"
                    onChange={(e) =>
                      setInfo((prev) => ({
                        ...prev,
                        lessorIban: e.target.value,
                      }))
                    }
                    value={info.lessorIban}
                    style={{
                      borderColor: lessorIbanChecked ? "" : "red",
                    }}
                    type="text"
                  />
                  {!lessorIbanChecked && (
                    <FormText className="text-red-500">
                      يرجى إدخال رقم آيبان صالح
                    </FormText>
                  )}
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <a className="btn__main btn1" onClick={goToFour}>
          التالي
        </a>
        <a className="btn__main btn1" onClick={() => previousStep()}>
          السابق
        </a>
      </div>
    </div>
  );
};

export default Step3;
