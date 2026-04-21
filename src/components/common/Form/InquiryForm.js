//ak-components
//InquiryForm v0.1 2024-11-17 13:25:17

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ArrowLeftIconHero, WhatsApp } from "@/components/common/Icons";
import { useState } from "react";
import Button from '@/components/common/Button';

const schema = yup.object().shape({
  name: yup.string().required("🖐 الاسم مطلوب"),
  email: yup
    .string()
    .email("👀 أدخل بريد إلكتروني صالح")
    .required("✋ البريد الإلكتروني مطلوب"),
  service: yup.string().required("✋ يرجى اختيار خدمة"),
});

export default function InquiryForm() {
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
      console.log(data);
      setToastMessage("تم إرسال النموذج بنجاح ");
    } catch (error) {
      setToastMessage("حدث خطأ أثناء الإرسال ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-gab-top">
      <div className="text-white rounded-md max-w-2xl mx-auto bg-neutral-950 p-10 ">
        <h2 className="text-5xl font-bold mb-4 text-center">أرسل استفسارك</h2>
        <p className="mb-4 text-xl text-center text-neutral-300">
          تواصل معي مباشرة عبر واتساب أو من خلال النموذج أدناه لطلب خدماتي أو
          للاستفسار.
        </p>

        <button className="border border-white bg-neutral-950 gap-x-2 text-white py-2 px-4 rounded-lg mb-4 flex items-center justify-center hover:bg-green-600 mx-auto transition-all">
          <WhatsApp width="20" height="20" fill="#fff" />
          <span className="ml-2">تواصل معي عبر واتساب</span>
        </button>

        <Button
      variant="outline" // أو أي نوع آخر تفضله
      className="mb-4 mx-auto" // أي إضافات خاصة تحتاجها
      iconBefore={<WhatsApp width="20" height="20" fill="#fff" />}
    >
      تواصل معي عبر واتساب
    </Button>
        <hr className="my-8 border-neutral-500" />

        {toastMessage && (
          <div className="bg-green-500 text-black p-3 rounded mb-4">
            {toastMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <div>
            <label className="block mb-2" htmlFor="name">
              الاسم
            </label>
            <input
              {...register("name")}
              id="name"
              className={`w-full p-3 bg-neutral-950 text-white rounded transition-all focus:ring-2 focus:ring-blue-500 ${
                errors.name
                  ? "border !border-red-500"
                  : "border !border-neutral-600"
              }`}
              placeholder="أحمد محمد"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2" htmlFor="email">
              البريد الإلكتروني
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              className={`w-full p-3 bg-neutral-950 text-start text-white rounded transition-all focus:ring-2 focus:ring-blue-500 ${
                errors.email
                  ? "border !border-red-500"
                  : "border !border-neutral-600"
              }`}
              placeholder="name@domain.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2" htmlFor="service">
              الخدمة التي تريدها
            </label>
            <select
              {...register("service")}
              id="service"
              className={`w-full p-3 bg-neutral-950 text-white rounded transition-all focus:ring-2 focus:ring-blue-500 ${
                errors.service
                  ? "border !border-red-500"
                  : "border !border-neutral-600"
              }`}
            >
              <option value="">اختر خدمة...</option>
              <option value="website-design">تصميم موقع</option>
              <option value="seo">تحسين محركات البحث (SEO)</option>
              <option value="marketing">التسويق الإلكتروني</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">
                {errors.service.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-3 px-4 rounded-lg hover:bg-blue-700 flex justify-center items-center transition-all"
            disabled={loading}
          >
            {loading ? (
              <span>جاري الإرسال...</span>
            ) : (
              <span className="flex items-center gap-x-2 font-bold">
                إرسال الآن
                <ArrowLeftIconHero fill="#000" width="2.5" />
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
