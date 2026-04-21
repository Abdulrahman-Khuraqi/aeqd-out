import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Image from "next/image";
import ScrollableAnchor from "react-scrollable-anchor";
import contactInfo from "../../assets/data/contactInfo.json";

const spinner = (
  <svg
    className="h-5 w-5 animate-spin text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v8H4z"
    ></path>
  </svg>
);
const arrowLeft = (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5001 7.00012C15.5001 7.16588 15.4342 7.32485 15.317 7.44206C15.1998 7.55927 15.0409 7.62512 14.8751 7.62512H7.3751V12.6251C7.37548 12.7485 7.33934 12.8693 7.27121 12.9721C7.20309 13.075 7.10604 13.1554 6.99229 13.2032C6.91519 13.2339 6.83305 13.2498 6.7501 13.2501C6.58413 13.2494 6.42476 13.1851 6.30479 13.0704L0.679785 7.44543C0.562422 7.32694 0.496582 7.1669 0.496582 7.00012C0.496582 6.83334 0.562422 6.67331 0.679785 6.55481L6.30479 0.92981C6.39515 0.845023 6.50768 0.787553 6.62934 0.764049C6.75101 0.740546 6.87684 0.751969 6.99229 0.796997C7.10604 0.844811 7.20309 0.925225 7.27121 1.02811C7.33934 1.13099 7.37548 1.25173 7.3751 1.37512V6.37512H14.8751C15.0409 6.37512 15.1998 6.44097 15.317 6.55818C15.4342 6.67539 15.5001 6.83436 15.5001 7.00012Z"
      fill="white"
    />
  </svg>
);
const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false); // حالة التحميل
  const [errorMessage, setErrorMessage] = useState(""); // رسالة الخطأ
  const [showErrorModal, setShowErrorModal] = useState(false); // إظهار Modal الخطأ

  const onSubmit = (data) => {
    // محاكاة عملية إرسال البيانات
    setLoading(true); // تفعيل حالة التحميل
    setErrorMessage("");

    const isSuccessful = Math.random() > 0.9; // نسبة نجاح 80%

    setTimeout(() => {
      if (isSuccessful) {
        router.push("/confirmation");
      } else {
        setErrorMessage("فشل إرسال الرسالة. حاول مرة أخرى.");
        setShowErrorModal(true); // إظهار الـModal عند الخطأ
      }
      setLoading(false); // إيقاف التحميل
    }, 2000);
  };

  return (
    <ScrollableAnchor id="Contact-Us">
      <section className="py-16 md:px-2">
        <div className="container mx-auto">
          <div className="xsm:rounded-3xl grid grid-cols-1 gap-8 bg-gradient-to-r from-primary-900 to-primary-700 md:grid-cols-2">
            {/* نموذج التواصل */}
            <div className="rounded-lg px-5 py-10 md:px-8 md:py-16 lg:px-10 lg:py-20">
              <h2 className="mb-4 text-3xl font-bold text-primary-100 md:mb-6 md:text-4xl lg:text-6xl">
                تواصل معنا
              </h2>
              <p className="mb-6 text-base text-primary-200 md:text-lg">
                نحن هنا لمساعدتك! إذا كنت بحاجة إلى استشارة تقنية أو ترغب في
                معرفة المزيد عن خدماتنا، لا تتردد في التواصل معنا.
              </p>
              <form className="md:text-start" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <input
                    placeholder="الاسم"
                    type="text"
                    className={`h-[60px] w-full rounded-lg border border-primary-500 bg-primary-800 p-3 text-primary-50 placeholder:text-primary-100 focus:outline-none ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    {...register("name", { required: "الاسم مطلوب" })}
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="mb-4">
                  <input
                    placeholder="الإيميل"
                    type="email"
                    className={`h-[60px] w-full rounded-lg border border-primary-500 bg-primary-800 p-3 text-primary-50 placeholder:text-primary-100 focus:outline-none ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    {...register("email", {
                      required: "الإيميل مطلوب",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "الإيميل غير صالح",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="mb-4">
                  <input
                    placeholder="الرقم"
                    type="text"
                    className={`h-[60px] w-full rounded-lg border border-primary-500 bg-primary-800 p-3 text-primary-50 placeholder:text-primary-100 focus:outline-none ${
                      errors.phoneNumber ? "border-red-500" : ""
                    }`}
                    {...register("phoneNumber", {
                      required: "الرقم مطلوب",
                      pattern: {
                        value: /^[0-9]+$/i,
                        message: "يرجى إدخال رقم صحيح",
                      },
                      minLength: {
                        value: 8,
                        message: "الرقم يجب أن يحتوي على 8 أرقام على الأقل",
                      },
                    })}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500">{errors.phoneNumber.message}</p>
                  )}
                </div>

                <div className="mb-4">
                  <textarea
                    placeholder="رسالتك"
                    className={`h-[180px] w-full rounded-lg border border-primary-500 bg-primary-800 p-3 text-primary-50 placeholder:text-primary-100 focus:outline-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    {...register("message", { required: "الرسالة مطلوبة" })}
                  />
                  {errors.message && (
                    <p className="text-red-500">{errors.message.message}</p>
                  )}
                </div>
                <div className="text-center md:text-start">
                  <button
                    type="submit"
                    onClick={(e) => {
                      if (loading) {
                        e.preventDefault(); // Prevent form submission if loading
                      }
                    }}
                    disabled={loading} // تعطيل الزر عند التحميل
                    className={`mt-4 inline-flex items-center gap-2 rounded-full bg-primary-gradient-light px-6 py-3 font-bold text-white transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl ${
                      loading
                        ? "cursor-not-allowed bg-gray-700 opacity-50 hover:translate-y-0 hover:shadow-none"
                        : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        جاري الإرسال
                        {spinner}
                      </>
                    ) : (
                      <>
                        أرسل رسالتك الآن
                        {arrowLeft}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* معلومات التواصل */}
            <div className="xsm:rounded-b-3xl flex flex-col justify-center bg-primary-900 px-6 py-12 text-center text-white bg-blend-overlay md:rounded-l-3xl md:px-8 md:text-start lg:px-14">
              <h2 className="mb-4 text-3xl font-bold text-primary-50 md:text-4xl">
                معلومات التواصل
              </h2>
              <p className="mb-6 text-base text-primary-200">
                يمكنك التواصل معنا ومتابعتنا على حساباتنا.
              </p>
              <Image
                src={"/images/bar.webp"}
                alt="divider"
                width={418}
                height={1}
                className="mb-6 mt-2 hidden md:block"
              />
              <Image
                src={"/images/mobile-divider.webp"}
                alt="divider"
                width={418}
                height={1}
                className="mb-6 mt-2 block md:hidden"
              />
              <div className="mb-4">
                <p className="flex items-center justify-center py-2 font-en font-bold text-primary-100 md:justify-start">
                  <span className="me-2">
                    <svg
                      width="24"
                      height="17"
                      viewBox="0 0 24 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.9764 11.0951C23.9764 10.3566 23.9764 9.61806 23.9764 8.87952C23.9764 8.30284 23.9764 7.72955 23.9764 7.15287C23.9764 6.7111 23.9764 6.26595 23.9764 5.82417C23.9764 5.62183 23.9798 5.41612 23.9832 5.21378C23.9832 5.05865 23.919 5.04516 23.8075 5.12609C23.6689 5.22389 23.5304 5.32506 23.3885 5.42286L20.182 7.55418C18.9825 8.35343 17.7796 9.15605 16.5801 9.9553C16.4618 10.0295 16.3436 10.1003 16.2253 10.1745C15.2556 10.7849 14.3534 11.4998 13.3229 12.0091C12.9985 12.1069 12.6741 12.1945 12.3363 12.2316C11.772 12.2417 11.2077 12.2215 10.6705 12.0158C10.3427 11.8371 10.0184 11.6583 9.69061 11.4796C9.47436 11.3346 9.25812 11.1862 9.03849 11.0412C8.65668 10.7613 8.25798 10.4982 7.85251 10.2521C7.37272 9.90808 6.8794 9.58096 6.37258 9.26734C5.84885 8.87952 5.29134 8.53891 4.74397 8.18481L2.46662 6.66388C1.70638 6.15129 0.946137 5.63869 0.185895 5.12947C5.76463e-05 5.00469 0.00681535 5.15645 0.00681535 5.27111C0.00681535 6.42445 0.00681535 7.57779 0.00681535 8.73113C0.00681535 9.91145 0.00681535 11.0951 0.00681535 12.2755C0.00681535 13.1118 0.00681535 13.9482 0.00681535 14.7879H0.0101942C-0.0472463 15.5939 0.260229 16.2245 0.942758 16.6663C1.35498 16.9563 1.8314 16.9934 2.30781 16.9934C8.79522 16.9968 15.286 17.0001 21.7734 17.0001C21.8883 17.0001 22.0032 17.0102 22.1147 16.963C23.108 16.9158 23.9392 16.0963 23.9764 15.1116C23.9933 14.6934 23.9764 14.2753 23.9764 13.8571C23.9764 12.9364 23.9764 12.0192 23.9764 11.0985V11.0951ZM11.7551 16.9394C11.7551 16.9394 11.772 16.9462 11.7787 16.9495H11.7517C11.7517 16.9495 11.7551 16.9428 11.7551 16.9394ZM13.2283 16.9495C13.2283 16.9428 13.2316 16.9394 13.235 16.9361C13.2418 16.9428 13.2519 16.9462 13.2621 16.9495H13.2317H13.2283ZM17.5532 16.9495C17.5532 16.9495 17.5667 16.9428 17.5769 16.9428C17.5769 16.9428 17.5735 16.9495 17.5701 16.9495H17.5532Z"
                        fill="url(#paint0_linear_2334_9903)"
                      />
                      <path
                        d="M0.844558 3.51411C1.40545 3.88844 1.96296 4.2594 2.52385 4.63373C2.8516 4.84956 3.18273 5.06539 3.51047 5.28122C3.72672 5.45321 3.9531 5.60833 4.19638 5.73311C4.42276 5.92534 4.67618 6.08384 4.93973 6.22547C5.11881 6.38397 5.31816 6.51212 5.53103 6.62004C5.77431 6.82912 6.04799 6.991 6.32168 7.15624C6.69335 7.41591 7.06165 7.67221 7.4536 7.89816C7.81513 8.18144 8.20708 8.4175 8.59565 8.66368C8.86258 8.86602 9.14302 9.04813 9.43361 9.21337C9.59917 9.35164 9.77825 9.46967 9.97084 9.57084C10.1837 9.75969 10.4304 9.89796 10.6669 10.0497C10.9913 10.2892 11.3325 10.4814 11.7481 10.5016C12.2651 10.6062 12.7212 10.451 13.1436 10.1745C14.2924 9.41909 15.4378 8.65356 16.5799 7.88804C16.6475 7.8442 16.7049 7.78687 16.7691 7.73291C17.0732 7.54069 17.3807 7.35184 17.6814 7.15287C19.6411 5.85114 21.5975 4.5393 23.5674 3.25106C23.8883 3.04198 24.037 2.82278 23.9965 2.4417C23.9559 2.05388 24.0404 1.65257 23.8478 1.28499C23.7059 0.806112 23.3511 0.512718 22.9558 0.249675C22.8781 0.205835 22.8037 0.158622 22.7226 0.121526C22.3341 -0.0437191 21.9286 -0.0032509 21.5231 0.000121444C21.094 0.000121444 20.6683 0.000121444 20.2392 0.000121444C19.9283 0.000121444 19.6141 0.000121444 19.3032 0.000121444C18.8268 0.000121444 18.3504 0.000121444 17.874 0.000121444C17.232 0.000121444 16.5934 0.000121444 15.9514 0.000121444C15.3094 0.000121444 14.6674 0.000121444 14.0255 0.000121444C13.549 0.000121444 13.0726 0.000121444 12.5962 0.000121444C12.2347 0.000121444 11.8731 0.000121444 11.5116 0.000121444C11.0994 0.000121444 10.6905 0.000121444 10.2783 0.000121444C9.8661 0.000121444 9.45726 0.000121444 9.04504 0.000121444C8.50104 0.000121444 7.96043 0.000121444 7.41643 0.000121444C6.46359 0.000121444 5.51076 0.000121444 4.55454 0.000121444C3.73348 0.000121444 2.90904 0.0338449 2.09136 -0.0099956C0.979713 -0.0572085 -0.0339436 0.880304 -0.00015507 2.07411C0.0268758 3.02849 -0.00015503 3.02849 0.844558 3.51411Z"
                        fill="url(#paint1_linear_2334_9903)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2334_9903"
                          x1="11.9937"
                          y1="17.001"
                          x2="11.9937"
                          y2="5.07729"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3777BB" />
                          <stop offset="1" stop-color="#9DD9F2" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_2334_9903"
                          x1="12.001"
                          y1="10.5344"
                          x2="12.001"
                          y2="-0.0117035"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3777BB" />
                          <stop offset="1" stop-color="#9DD9F2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>{" "}
                  info@aidaksa.com
                </p>
                <p className="flex items-center justify-center py-2 text-lg font-bold text-primary-100 md:justify-start">
                  <span className="me-2">
                    <svg
                      width="23"
                      height="21"
                      viewBox="0 0 23 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.52841 20.3654C8.18722 20.3316 9.77212 19.9066 11.2462 19.2031C16.0162 16.9291 19.6727 13.6822 22.0208 9.33721C22.6769 8.12412 23.0667 6.831 22.9877 5.47022C22.868 3.38566 21.7188 1.87269 19.5822 1.00685C18.3528 0.508536 17.1374 0.661862 16.0417 1.39016C15.3218 1.86818 14.6886 2.42286 14.2096 3.10381C13.3292 4.35748 13.4031 5.62017 14.4338 6.78703C14.7243 7.11623 15.0275 7.43754 15.3346 7.75546C15.7869 8.22446 15.8315 8.71714 15.5079 9.25942C14.3383 11.2143 12.6489 12.7059 10.4397 13.7397C9.82563 14.0272 9.2676 13.9719 8.74142 13.574C8.38214 13.3023 8.01904 13.034 7.64702 12.7769C6.34368 11.8761 4.92057 11.8051 3.51786 12.5728C2.6222 13.0621 1.88454 13.7081 1.34179 14.4973C0.54297 15.6597 0.672922 16.8412 1.47684 17.9528C2.64004 19.5616 4.33197 20.3542 6.52841 20.3643V20.3654Z"
                        fill="url(#paint0_linear_2334_9903)"
                      />
                      <path
                        d="M9.74109 0C4.87425 0.0259302 0.573087 3.46901 0.064745 7.74975C-0.00277915 8.31458 -0.0359042 8.87602 0.0583748 9.43859C0.147558 9.97298 0.627871 10.3394 1.18463 10.3078C1.79489 10.274 2.22297 9.85911 2.22424 9.28527C2.22807 7.93126 2.54148 6.63926 3.24603 5.43294C4.32386 3.58739 6.12536 2.62459 8.34729 2.18377C9.02125 2.04961 9.70414 1.98084 10.3972 1.97746C11.0559 1.97408 11.5273 1.60542 11.5706 1.07667C11.6127 0.554681 11.2011 0.134161 10.5425 0.0496056C10.2787 0.0157836 10.0086 0.0157836 9.74109 0Z"
                        fill="url(#paint1_linear_2334_9903)"
                      />
                      <path
                        d="M9.8782 3.98199C6.68927 4.10263 4.28898 6.41605 4.50302 9.08912C4.55143 9.69904 4.98843 10.0891 5.61271 10.079C6.251 10.0688 6.67526 9.64943 6.67908 9.0226C6.69182 7.13871 8.05504 5.9324 10.1827 5.92225C10.8911 5.91887 11.3637 5.54457 11.3765 4.97862C11.3892 4.42957 10.9471 4.04062 10.2579 3.99778C10.105 3.98763 9.95209 3.98538 9.8782 3.98199Z"
                        fill="url(#paint2_linear_2334_9903)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2334_9903"
                          x1="11.901"
                          y1="20.3654"
                          x2="11.901"
                          y2="0.716614"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3777BB" />
                          <stop offset="1" stop-color="#9DD9F2" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_2334_9903"
                          x1="5.78678"
                          y1="10.3097"
                          x2="5.78678"
                          y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3777BB" />
                          <stop offset="1" stop-color="#9DD9F2" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_2334_9903"
                          x1="7.93324"
                          y1="10.0792"
                          x2="7.93324"
                          y2="3.98199"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3777BB" />
                          <stop offset="1" stop-color="#9DD9F2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>{" "}
                  <span dir="ltr"> +966 58 888 8888</span>
                </p>
              </div>
              <Image
                src={"/images/bar.webp"}
                alt="divider"
                width={418}
                height={1}
                className="mb-2 mt-6 hidden md:block"
              />
              <Image
                src={"/images/mobile-divider.webp"}
                alt="divider"
                width={418}
                height={1}
                className="mb-2 mt-6 block md:hidden"
              />
              <div>
                <p className="text-lg font-bold text-primary-50">
                  تابعنا للحصول على كل جديد!
                </p>
                <div className="mt-4 flex justify-center md:justify-start">
                  <a href={contactInfo.instagram} className="">
                    <Image
                      src={"/icons/instagram-icon.webp"}
                      width={35}
                      height={35}
                      alt="instagram icon"
                      className="mx-1"
                    />
                  </a>
                  <a href={contactInfo.x} className="">
                    <Image
                      src={"/icons/x-icon.webp"}
                      width={35}
                      height={35}
                      className="mx-1"
                      alt="x icon"
                    />
                  </a>
                  <a href={contactInfo.facebook} className="">
                    <Image
                      src={"/icons/facebook-icon.webp"}
                      width={35}
                      height={35}
                      alt="facebook icon"
                      className="mx-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal لرسالة الخطأ */}
        {showErrorModal && (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <h2 className="text-xl font-bold text-red-500">خطأ</h2>
                <p className="mt-4">{errorMessage}</p>
                <p className="mt-4">
                  يمكنك التواصل عبر الواتساب لحل المشكلة مباشرة.
                </p>
                <button
                  className="me-2 mt-6 rounded-full bg-red-500 px-4 py-2 text-white"
                  onClick={() => setShowErrorModal(false)}
                >
                  إغلاق
                </button>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={contactInfo.whatsapplink}
                  className="mt-2 inline-block rounded-full bg-green-500 px-4 py-2 text-white"
                >
                  تواصل عبر الواتساب
                </a>
              </div>
            </div>
            {/* تأثير البلور */}
          </>
        )}
      </section>
    </ScrollableAnchor>
  );
};

export default ContactUsForm;
