/* eslint-disable prettier/prettier */
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import {
  CardTitle,
  Form,
  FormGroup,
  Input,
  FormText,
} from "reactstrap";

const Step7 = ({ info, setInfo, isDevMode }) => {
  const [cityChecked, setCityChecked] = useState(true);
  const [buildingNoChecked, setBuildingNoChecked] = useState(true);
  const [postalCodeChecked, setPostalCodeChecked] = useState(true);
  const [extraNoChecked, setExtraNoChecked] = useState(true);
  const [areaChecked, setAreaChecked] = useState(true);
  const [modal, setModal] = useState(false);
  const [spinnerCheck, setSpinnerCheck] = useState(false);
  const [orderCheck, setOrderCheck] = useState(false);

  const toggle = () => setModal(!modal);
  const notify = () => toast.success("تم ارسال الطلب");

  const handleSubmit = (event) => {
    event.preventDefault();
    setOrderCheck(true);
    toggle();
    notify();
    setOrderCheck(false);
    setSpinnerCheck(false);
    window.location.href = "/confirmation";
  };

  const handleContracturl = async () => {
    toggle();
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

    if (isDevMode) {
      await handleContracturl();
      return;
    }

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
