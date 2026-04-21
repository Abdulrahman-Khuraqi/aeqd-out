/* eslint-disable prettier/prettier */
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import {
  Button,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  FormText,
  ModalFooter,
  Row,
} from "reactstrap";

const serviceID = "service_0zlo8cf";
const PublicKey = "Pk4zYWfH1qiOhTUVu";
const templateID = "template_ozsaxfl";
const Step7 = ({
  info,
  setInfo,
  contractImage,
  commercialImage,
  goToStep,
  isDevMode,
}) => {
  const [cityChecked, setCityChecked] = useState(true);
  const [buildingNoChecked, setBuildingNoChecked] = useState(true);
  const [postalCodeChecked, setPostalCodeChecked] = useState(true);
  const [extraNoChecked, setExtraNoChecked] = useState(true);
  const [areaChecked, setAreaChecked] = useState(true);
  const [modal, setModal] = useState(isDevMode);
  const [spinnerCheck, setSpinnerCheck] = useState(false);
  const [orderCheck, setOrderCheck] = useState(false);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/linkscenter1/image/upload";
  const toggle = () => setModal(!modal);
  const notify = () => toast.success("تم ارسال الطلب");
  const notifyError = () => toast.error("خطأ في ارسال الطلب");
  const notifyErrorImage = () => toast.error("خطأ في ارسال الصورة");

  const handleSubmit = (event) => {
    event.preventDefault();
    setOrderCheck(true);

    emailjs.send(serviceID, templateID, info, PublicKey).then(
      async () => {
        toggle();
        notify();
        await timeout(1000);
        setSpinnerCheck(false);
        setOrderCheck(false);
        window.location.href = "/confirmation";
      },
      async () => {
        toggle();
        notifyError();
        await timeout(2000);
        setOrderCheck(false);
        setSpinnerCheck(false);
        goToStep(2);
      },
    );
  };
  const handleContracturl = () => {
    if (contractImage !== "")
      fetch(CLOUDINARY_URL, {
        mode: "cors",
        method: "POST",
        body: contractImage,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.secure_url !== "") {
            setInfo((previousState) => ({
              ...previousState,
              contracturl: data.secure_url,
            }));
          }
        })
        .catch((err) => {
          notifyErrorImage();
          console.error(err);
        });
    if (commercialImage !== "")
      fetch(CLOUDINARY_URL, {
        mode: "cors",
        method: "POST",
        body: commercialImage,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.secure_url !== "") {
            setInfo((previousState) => ({
              ...previousState,
              commercialurl: data.secure_url,
            }));
          }
          toggle();
        })
        .catch((err) => {
          console.error(err);
          toggle();
          notifyErrorImage();
        });
    else {
      notifyErrorImage();
      toggle();
    }
  };
  const gotoFinal = async () => {
    setSpinnerCheck(true);
    if (info.area === "") {
      setAreaChecked(false);
    } else setAreaChecked(true);
    if (info.city === "") {
      setCityChecked(false);
    } else setCityChecked(true);
    if (info.buildingNo === "" || !(info.buildingNo.length === 4))
      setBuildingNoChecked(false);
    else setBuildingNoChecked(true);
    if (info.postalCode === "" || !(info.postalCode.length === 5))
      setPostalCodeChecked(false);
    else setPostalCodeChecked(true);
    if (info.extraNo === "" || !(info.extraNo.length === 4))
      setExtraNoChecked(false);
    else setExtraNoChecked(true);
    if (
      info.extraNo !== "" &&
      info.extraNo.length === 4 &&
      info.postalCode !== "" &&
      info.postalCode.length === 5 &&
      info.buildingNo !== "" &&
      info.buildingNo.length === 4 &&
      info.extraNo !== "" &&
      info.area !== ""
    )
      await handleContracturl();
    else setSpinnerCheck(false);
  };
  return (
    <div>
      <div
        className="p-4 text-center shadow-lg"
        style={{ borderRadius: "20px", background: "white" }}
      >
        <CardTitle className="mb-4 text-2xl font-bold" color="primary">
          العنوان الوطني{" "}
        </CardTitle>
        <div>
          <Form className="text-right">
            <div>
              <div>
                <FormGroup>
                  <Input
                    placeholder="المنطقة"
                    type="text"
                    id="area"
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        area: e.target.value,
                      }))
                    }
                    value={info.area}
                    invalid={!areaChecked}
                    maxLength="15"
                  />
                  {!areaChecked && (
                    <FormText className="text-red-500">
                      الرجاء إدخال المنطقة{" "}
                    </FormText>
                  )}
                </FormGroup>
              </div>
            </div>

            <div>
              <div>
                <FormGroup>
                  <Input
                    placeholder="المدينة"
                    type="text"
                    id="city"
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        city: e.target.value,
                      }))
                    }
                    value={info.city}
                    invalid={!cityChecked}
                    maxLength="15"
                  />
                  {!cityChecked && (
                    <FormText className="text-red-500">
                      الرجاء إدخال المدينة{" "}
                    </FormText>
                  )}
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Input
                    placeholder="الحي (اختياري)"
                    type="text"
                    id="district"
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        district: e.target.value,
                      }))
                    }
                    value={info.district}
                    maxLength="10"
                  />
                </FormGroup>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <FormGroup>
                  <Input
                    placeholder="الشارع (اختياري)"
                    type="text"
                    id="street"
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        street: e.target.value,
                      }))
                    }
                    value={info.street}
                    maxLength="40"
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Input
                    placeholder="رقم المبنى"
                    type="text"
                    id="buildingNo"
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        buildingNo: e.target.value,
                      }))
                    }
                    value={info.buildingNo}
                    invalid={!buildingNoChecked}
                    maxLength="4"
                  />
                  {!buildingNoChecked && (
                    <FormText className="text-red-500">
                      الرجاء إدخال رقم المبنى{" "}
                    </FormText>
                  )}
                </FormGroup>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <FormGroup>
                  <Input
                    placeholder="الرمز البريدي"
                    type="text"
                    id="postalCode"
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        postalCode: e.target.value,
                      }))
                    }
                    value={info.postalCode}
                    invalid={!postalCodeChecked}
                    maxLength="5"
                  />
                  {!postalCodeChecked && (
                    <FormText className="text-red-500">
                      الرجاء إدخال الرمز البريدي{" "}
                    </FormText>
                  )}
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Input
                    placeholder="الرقم الإضافي"
                    type="text"
                    id="extraNo"
                    onChange={(e) =>
                      setInfo((previousState) => ({
                        ...previousState,
                        extraNo: e.target.value,
                      }))
                    }
                    value={info.extraNo}
                    invalid={!extraNoChecked}
                    maxLength="4"
                  />
                  {!extraNoChecked && (
                    <FormText className="text-red-500">
                      الرجاء إدخال الرقم الإضافي{" "}
                    </FormText>
                  )}
                </FormGroup>
              </div>
            </div>
          </Form>
        </div>
        <button
          type="button"
          className="btn__main btn1 border-0"
          style={{ display: "inline-block" }}
          onClick={() => gotoFinal()}
          disabled={spinnerCheck}
        >
          {spinnerCheck ? (
            <div>
              {/* <Spinner size="sm"></Spinner> */}
              <span> جاري التحقق</span>
            </div>
          ) : (
            "ارسال الطلب"
          )}
        </button>
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black-500 bg-opacity-50 shadow-lg ${modal ? "block" : "hidden"}`}
          onClick={toggle}
        >
          <div
            className="rounded-lg border-2 border-gray-200 bg-white p-5 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4">تم التحقق من المعلومات</div>
            <div className="flex justify-center">
              <button
                className="rounded-full bg-primary-500 px-4 py-2 text-gray-800"
                onClick={(e) => handleSubmit(e)}
                disabled={orderCheck}
              >
                ارسال الطلب
              </button>
            </div>
          </div>
        </div>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Step7;
