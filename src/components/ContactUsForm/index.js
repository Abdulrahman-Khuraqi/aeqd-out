import React from "react";
import { useForm } from "react-hook-form";
import { EnvelopeIcon, UserIcon } from "@/components/common/Icons";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      budget: "",
      serviceType: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted Successfully:", data);
    reset();
  };

  return (
    <section className="bg-dark-900 p-10 rounded-xl w-full max-w-lg mx-auto">
      <h2 className="text-center text-3xl font-bold text-white mb-2">كن جزءًا من المستقبل</h2>
      <p className="text-center text-lg text-gray-300 mb-8">
        هل أنت مستعد لتحويل طموحاتك إلى واقع؟
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-400 mb-1">الاسم</label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="name"
              type="text"
              placeholder="أحمد محمد"
              className="w-full pl-10 pr-4 py-2 rounded-md bg-dark-800 text-white outline-none"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-400 mb-1">الإيميل</label>
          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              type="email"
              placeholder="name@domain.com"
              className="w-full pl-10 pr-4 py-2 rounded-md bg-dark-800 text-white outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
        </div>

        {/* Monthly Budget Field */}
        <div>
          <label htmlFor="budget" className="block text-gray-400 mb-1">الميزانية الشهرية</label>
          <select
            id="budget"
            className="w-full pl-3 pr-4 py-2 rounded-md bg-dark-800 text-gray-400 outline-none"
            {...register("budget", { required: "Monthly budget is required" })}
          >
            <option value="" disabled>اختر الميزانية الشهرية</option>
            <option value="low">ميزانية منخفضة</option>
            <option value="medium">ميزانية متوسطة</option>
            <option value="high">ميزانية عالية</option>
          </select>
          {errors.budget && <span className="text-red-500 text-sm">{errors.budget.message}</span>}
        </div>

        {/* Service Type Field */}
        <div>
          <label htmlFor="serviceType" className="block text-gray-400 mb-1">اختر نوع الخدمة</label>
          <select
            id="serviceType"
            className="w-full pl-3 pr-4 py-2 rounded-md bg-dark-800 text-gray-400 outline-none"
            {...register("serviceType", { required: "Service type is required" })}
          >
            <option value="" disabled>اختر نوع الخدمة</option>
            <option value="ai_campaign_management">إدارة الحملات بالذكاء الاصطناعي</option>
            <option value="content_creation">إنشاء محتوى</option>
            <option value="consultation">استشارة تسويقية</option>
          </select>
          {errors.serviceType && <span className="text-red-500 text-sm">{errors.serviceType.message}</span>}
        </div>

        {/* Optional Message Field */}
        <div>
          <label htmlFor="message" className="block text-gray-400 mb-1">كيف يمكننا مساعدتك؟ (اختياري)</label>
          <textarea
            id="message"
            placeholder="كيف يمكننا مساعدتك؟ (اختياري)"
            className="w-full pl-3 pr-4 py-2 rounded-md bg-dark-800 text-white outline-none h-24"
            {...register("message")}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 rounded-md bg-teal-500 text-white font-bold flex items-center justify-center ${
            !isValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isValid}
        >
          إرسال الآن
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
