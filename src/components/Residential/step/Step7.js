/* eslint-disable prettier/prettier */
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Oval } from "react-loader-spinner";

import {
  Button,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";

const serviceID = "service_0zlo8cf";
const PublicKey = "Pk4zYWfH1qiOhTUVu";
const templateID = "template_zx8nrqo";
const Step7 = ({ info, setInfo, contractImage, goToStep, isDevMode }) => {
  const [cityChecked, setCityChecked] = useState(true);
  const [buildingNoChecked, setBuildingNoChecked] = useState(true);
  const [postalCodeChecked, setPostalCodeChecked] = useState(true);
  const [extraNoChecked, setExtraNoChecked] = useState(true);
  const [areaChecked, setAreaChecked] = useState(true);
  const [modal, setModal] = useState(false);
  const [spinnerCheck, setSpinnerCheck] = useState(false);
  const [orderCheck, setOrderCheck] = useState(false);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/linkscenter1/image/upload";
  const toggle = () => setModal(!modal);
  const notify = async () => toast.success("تم ارسال الطلب");
  const notifyError = () => toast.error("خطأ في ارسال الطلب");
  const notifyErrorImage = () => toast.error("خطأ في ارسال الصورة");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setOrderCheck(true);

    emailjs.send(serviceID, templateID, info, PublicKey).then(
      async () => {
        toggle();
        notify();
        await timeout(1000);
        setOrderCheck(false);
        setSpinnerCheck(false);
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
          toggle();
        })
        .catch((err) => {
          console.error(err);
          toggle();
          notifyErrorImage();
        });
    else toggle();
  };
  const gotoFinal = async () => {
    if (isDevMode) setModal(true);

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
      info.city !== "" &&
      info.area !== ""
    )
      await handleContracturl();
    else setSpinnerCheck(false);
  };

  return (
    <div className={`${modal ? "bg-black-500 bg-opacity-50 " : ""}`}>
      <div
        className={`bg-gray-50 p-4 text-center shadow-lg  `}
        style={{ borderRadius: "20px" }}
      >
        <CardTitle className="h4 mb-4 text-2xl font-bold">
          العنوان الوطني{" "}
        </CardTitle>
        <div>
          <Form className="text-right">
            <Row>
              <Col>
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
                </FormGroup>
              </Col>
            </Row>
            <div className="flex w-full gap-x-2">
              <div className="w-1/2">
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
                </FormGroup>
              </div>
              <div className="w-1/2">
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
            <div className="flex w-full gap-x-2">
              <div className="inline-block w-1/2">
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

              <div className="inline-block w-1/2">
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
                    minLength="4"
                  />
                </FormGroup>
              </div>
            </div>
            <div className="flex w-full gap-x-2">
              <div className="w-1/2">
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
                    minLength="5"
                  />
                </FormGroup>
              </div>
              <div className="w-1/2">
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
                    minLength="4"
                  />
                </FormGroup>
              </div>
            </div>
          </Form>
        </div>
        <Button
          className="btn__main btn1 inline-block border-0"
          onClick={() => gotoFinal()}
          disabled={spinnerCheck}
        >
          {spinnerCheck ? (
            <div className="flex flex-row gap-1">
              <Oval
                height={20}
                width={20}
                color="#4f46e5"
                ariaLabel="loading"
                secondaryColor="#000"
                strokeWidth={4}
                strokeWidthSecondary={2}
              />
              <span> جاري التحقق</span>
            </div>
          ) : (
            "ارسال الطلب"
          )}
        </Button>
        {/* <Modal
          className='text-center p-5'
          centered
          backdrop={false}
          isOpen={modal}
          toggle={toggle}
        >
          <ModalBody>تم التحقق من المعلومات</ModalBody>
          <ModalFooter className='justify-content-center'>
            <Button
              type='submit'
              className='rounded-pill'
              color='secondary'
              onClick={(e) => handleSubmit(e)}
              disabled={orderCheck}
            >
              ارسال الطلب
            </Button>
          </ModalFooter>
        </Modal> */}
        {modal && (
          <div
            className={`bg-black fixed inset-0 z-50 flex items-center justify-center shadow-2xl ${modal ? "block  bg-black-500 bg-opacity-50" : "hidden"}`}
          >
            {" "}
            <div className="rounded-lg border-2 border-gray-300 bg-white p-5 text-center shadow-lg">
              <div className="mb-8 text-2xl font-semibold">
                تم التحقق من المعلومات
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded-full bg-primary-500 px-6 py-3 text-lg disabled:opacity-50"
                  onClick={(e) => handleSubmit(e)}
                  disabled={orderCheck}
                >
                  ارسال الطلب
                </button>
              </div>
            </div>
          </div>
        )}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Step7;
