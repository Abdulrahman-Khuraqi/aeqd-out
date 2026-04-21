import React from 'react';
import { useForm } from 'react-hook-form';
import ButtonX from '@/components/common/Button';

const WarrantyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("تم إرسال النموذج بنجاح!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center mt-[150px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondary-900  text-white p-8 rounded-xl w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-primary-500">
          نموذج تسجيل العميل في خدمة الضمان
        </h2>
        <p className="text-secondary-100">
          يسمح هذا النموذج بتسجيل بيانات المستخدم في ضمان شركة لينكوم لمنتجات AVOO
        </p>

        {/* اسم العميل */}
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            1. اسم العميل <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            {...register("name", { required: "هذا الحقل مطلوب" })}
            placeholder="أدخل اسمك"
            className={`w-full py-3 px-4 rounded-lg bg-secondary-700 border ${
              errors.name ? "border-red-500" : "border-secondary-600"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* رقم الجوال */}
        <div>
          <label htmlFor="phone" className="block mb-2 font-semibold">
            2. رقم الجوال <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            {...register("phone", {
              required: "هذا الحقل مطلوب",
              pattern: {
                value: /^\+966\d{9}$/,
                message: "يجب إدخال رقم هاتف بصيغة +966XXXXXXXXX",
              },
            })}
            placeholder="+966XXXXXXXXX"
            className={`w-full py-3 px-4 rounded-lg bg-secondary-700 border ${
              errors.phone ? "border-red-500" : "border-secondary-600"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

{/* المدينة */}
<div>
  <label htmlFor="city" className="block mb-2 font-semibold">
    3. المدينة <span className="text-red-500">*</span>
  </label>
  <input
    id="city"
    {...register("city", { required: "هذا الحقل مطلوب" })}
    placeholder="أدخل مدينتك"
    className={`w-full py-3 px-4 rounded-lg bg-secondary-700 border ${
      errors.city ? "border-red-500" : "border-secondary-600"
    }`}
  />
  {errors.city && (
    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
  )}
</div>

        {/* نوع المنتج */}
        <div>
          <label htmlFor="productType" className="block mb-2 font-semibold">
            4. ما نوع المنتج الذي تم شراؤه؟ <span className="text-red-500">*</span>
          </label>
          <input
            id="productType"
            {...register("productType", { required: "هذا الحقل مطلوب" })}
            placeholder="أدخل نوع المنتج"
            className={`w-full py-3 px-4 rounded-lg bg-secondary-700 border ${
              errors.productType ? "border-red-500" : "border-secondary-600"
            }`}
          />
          {errors.productType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.productType.message}
            </p>
          )}
        </div>

        {/* مكان شراء المنتج */}
        <div>
          <label htmlFor="purchasePlace" className="block mb-2 font-semibold">
            5. مكان شراء المنتج (اسم المحل){" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            id="purchasePlace"
            {...register("purchasePlace", { required: "هذا الحقل مطلوب" })}
            placeholder="أدخل اسم المحل"
            className={`w-full py-3 px-4 rounded-lg bg-secondary-700 border ${
              errors.purchasePlace ? "border-red-500" : "border-secondary-600"
            }`}
          />
          {errors.purchasePlace && (
            <p className="text-red-500 text-sm mt-1">
              {errors.purchasePlace.message}
            </p>
          )}
        </div>

        {/* زر الإرسال */}
<ButtonX className='w-full'>
إرسال
    </ButtonX>

        <p className="text-sm text-secondary-100 mt-4">
          لا تتردد إذا كان لديك سؤال.{" "}
          <a href="#" className="text-primary-500 underline">
            الإبلاغ عن مشكلة
          </a>
        </p>
      </form>
    </div>
  );
};

export default WarrantyForm;
