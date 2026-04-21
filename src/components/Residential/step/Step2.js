/* eslint-disable prettier/prettier */
import { useState } from "react";
import Select from "react-select";
import {
  Button,
  ButtonGroup,
  CardTitle,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";

const Step2 = ({ info, setInfo, previousStep, nextStep, isDevMode }) => {
  const [propertyContractChecked, setPropertyContractChecked] = useState(true);
  const [lessorChecked, setLessorChecked] = useState(true);
  const [lessorOrlesseeChecked, setLessorOrlesseeChecked] = useState(true);

  const gotoThree = () => {
    // Check if required fields are filled
    if (isDevMode) nextStep();

    if (info.propertyContract === "") {
      setPropertyContractChecked(false);
    } else {
      setPropertyContractChecked(true);
    }

    if (info.lessorOrlessee === "") {
      setLessorOrlesseeChecked(false);
    } else {
      setLessorOrlesseeChecked(true);
    }

    if (info.lessor === "") {
      setLessorChecked(false);
    } else {
      setLessorChecked(true);
    }

    if (
      info.propertyContract !== "" &&
      info.lessor !== "" &&
      info.lessorOrlessee !== ""
    ) {
      nextStep();
    }
  };

  const options0 = [
    { value: "انا المؤجر", label: "انا المؤجر" },
    { value: "انا المستأجر", label: "انا المستأجر" },
  ];

  const options = [
    { value: "صك إلكتروني", label: "صك إلكتروني" },
    { value: "صك ملكية ورقي", label: "صك ملكية ورقي" },
    { value: "حجة استحكام", label: "حجة استحكام" },
    { value: "صك السجل العقاري", label: "صك السجل العقاري" },
    { value: "أخرى", label: "أخرى" },
  ];

  return (
    <div>
      <div
        className=" p-4 text-center bg-gray-50  shadow-lg"
        style={{ borderRadius: "20px" }}
      >
        <CardTitle className="h4 mb-4 text-2xl font-bold" color="primary">
          معلومات
        </CardTitle>
        <div>
          <Form className="text-right">
            <Row>
              <Col>
                <FormGroup>
                  <Select
                    required
                    invalid={!lessorOrlesseeChecked}
                    placeholder="هل أنت المؤجر أو المستأجر ؟"
                    options={options0}
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        lessorOrlessee: e.value,
                      }))
                    }
                  />
                  {!lessorOrlesseeChecked && (
                    <FormText className="text-red-500">
                      الرجاء الاختيار
                    </FormText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Select
                    required
                    invalid={!propertyContractChecked}
                    placeholder="حدد نوع الصك"
                    options={options}
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        propertyContract: e.value,
                      }))
                    }
                  />
                  {!propertyContractChecked && (
                    <FormText className="text-red-500">
                      الرجاء اختيار نوع الصك
                    </FormText>
                  )}
                </FormGroup>
                {info.propertyContract === "صك السجل العقاري" && (
                  <>
                    <FormGroup>
                      <Label for="recordNumber">رقم السجل العقاري</Label>
                      <Input
                        type="text"
                        id="recordNumber"
                        placeholder="ادخل رقم السجل العقاري"
                        onChange={(e) =>
                          setInfo((previousState) => ({
                            ...previousState,
                            recordNumber: e.target.value,
                          }))
                        }
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="registrationDate">تاريخ التسجيل الأول</Label>
                      <Input
                        type="date"
                        id="registrationDate"
                        placeholder="اختر تاريخ التسجيل"
                        onChange={(e) =>
                          setInfo((previousState) => ({
                            ...previousState,
                            registrationDate: e.target.value,
                          }))
                        }
                      />
                    </FormGroup>
                  </>
                )}
                <FormGroup>
                  <Label>المؤجر:</Label>
                  <br />
                  <ButtonGroup size="lg" className="block">
                    <Button
                      className={`w-1/2 rounded-lg border border-gray-300 px-4 py-1 ${info.lessor === "مالك" ? "bg-primary-500" : "bg-transparent"} rounded-r-full`}
                      onClick={() =>
                        setInfo((previousState) => ({
                          ...previousState,
                          lessor: "مالك",
                        }))
                      }
                      outline
                      active={info.lessor === "مالك"}
                    >
                      مالك
                    </Button>
                    <Button
                      className={`w-1/2 rounded-lg border border-gray-300 px-4 py-1 ${info.lessor === "وكيل" ? "bg-primary-500" : "bg-transparent"} rounded-l-full`}
                      onClick={() =>
                        setInfo((previousState) => ({
                          ...previousState,
                          lessor: "وكيل",
                        }))
                      }
                      outline
                      active={info.lessor === "وكيل"}
                    >
                      وكيل
                    </Button>
                  </ButtonGroup>
                  {!lessorChecked && (
                    <FormText className="text-red-500">
                      الرجاء اختيار من المؤجر
                    </FormText>
                  )}
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <a
          className="btn__main btn1"
          style={{ display: "inline-block" }}
          onClick={gotoThree}
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

export default Step2;
