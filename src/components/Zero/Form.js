import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import Image from 'next/image';

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("الاسم مطلوب"),
  phone: yup
    .string()
    .matches(/^(\+)?[0-9]{10,15}$/, "أدخل رقم هاتف صحيح")
    .required("رقم الجوال مطلوب"),
  email: yup
    .string()
    .email("أدخل بريد إلكتروني صحيح")
    .required("البريد الإلكتروني مطلوب"),
  message: yup.string().max(500, "يجب ألا يتجاوز الرسالة 500 حرف").optional(),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Simulate form submission
      console.log(data);
      setToastMessage("تم إرسال رسالتك بنجاح 🎉");
    } catch (error) {
      setToastMessage("حدث خطأ أثناء الإرسال ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
<section id="contact-us" className="mt-20">
  <div className="mx-auto flex flex-col lg:flex-row gap-8 items-start">
    {/* قسم النموذج */}
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondary-900 flex-grow lg:w-2/3 w-full  rounded-3xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-start text-primary-500 inline rounded-bl-3xl rounded-tl-xl py-4 px-8 bg-secondary-500">تواصل معنا</h2>
      <div className="px-8 pb-4 pt-10  space-y-6">
      {toastMessage && (
        <p
          className={`p-3 rounded-xl ${
            toastMessage.includes("نجاح")
              ? "bg-green-500 font-bold text-secondary-900"
              : "bg-red-500 "
          }`}
        >
          {toastMessage}
        </p>
      )}
      {/* حقل الاسم */}
      <div className=" ">
        <label htmlFor="name" className="block mb-2 text-sm font-bold">
          الاسم 
        </label>
        <input
          id="name"
          {...register("name")}
          placeholder="محمد احمد"
          className={`w-full py-5 px-5 bg-secondary-500  border rounded-xl ${
            errors.name
              ? "border-red-500 focus:ring-red-500"
              : "border-secondary-700 focus:ring-primary-500"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
        )}
      </div>

      {/* حقل رقم الجوال */}
      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-bold">
          رقم الجوال 
        </label>
        <input
          dir="ltr"
          id="phone"
          {...register("phone")}
          placeholder="+966XXXXXXXXX"
          className={`w-full py-5 px-5 text-right bg-secondary-500  border rounded-xl ${
            errors.phone
              ? "border-red-500 focus:ring-red-500"
              : "border-secondary-700 focus:ring-primary-500"
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
        )}
      </div>

      {/* حقل البريد الإلكتروني */}
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-bold">
          البريد الإلكتروني 
        </label>
        <input
          id="email"
          {...register("email")}
          placeholder="example@domain.com"
          className={`w-full py-5 px-5 bg-secondary-500  border rounded-xl ${
            errors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-secondary-700 focus:ring-primary-500"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-2">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* حقل الرسالة */}
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-bold">
          أرسل رسالة 
          <span className="text-primary-500 px-2">
          (اختياري)

          </span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="أدخل رسالتك هنا..."
          rows={4}
          className="w-full py-5 px-5 bg-secondary-500  border border-secondary-700 rounded-3xl focus:ring-primary-500"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-2">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* زر الإرسال */}
      <button
        type="submit"
        className={`w-full py-3 text-lg font-bold rounded-3xl ${
          loading
            ? "bg-secondary-700 text-gray-400 cursor-not-allowed"
            : "bg-primary-500 text-secondary-900 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300"
        }`}
        disabled={loading}
      >
        {loading ? "جاري الإرسال..." : "إرسال رسالة"}
      </button>
      </div>
    </form>

    {/* قسم معلومات الاتصال */}
    <div className="flex-shrink-0 w-full lg:w-1/3 space-y-6">
      {/* العنوان */}
      <div className="flex items-center gap-4 bg-secondary-800 p-6 rounded-3xl">
        <span className=""><Image src='/images/icons/location_icon.webp' width={60} height={60} alt='location icon'/></span>
        <div>
          <h3 className="text-lg font-bold">جدة  -  المملكة العربية السعودية</h3>
          <p> شارع فلسطين</p>
        </div>
      </div>
      {/* العنوان */}
      <div className="flex items-center gap-4 bg-secondary-800 p-6 rounded-3xl">
        <span className=""><Image src='/images/icons/location_icon.webp' width={60} height={60} alt='location icon'/></span>
        <div>
          <h3 className="text-lg font-bold">تبوك   -  المملكة العربية السعودية</h3>
          <p>شارع المحكمة</p>
        </div>
      </div>
      {/* البريد الإلكتروني */}
      <div className="flex items-center gap-4 bg-secondary-800 p-6 rounded-3xl">
      <span className=""><Image src='/images/icons/message_icon.webp' width={60} height={60} alt='message icon'/></span>
      <div>
          <h3 className="text-lg font-bold">البريد الإلكتروني</h3>
          <p>Support@leenkom.com</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
