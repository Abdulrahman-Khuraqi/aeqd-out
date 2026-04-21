import Image from "next/image";
const ZeroCard = ({ title, description, icon }) => {
  return (
    <div className="mb-10">
      <div className="rounded-3xl bg-secondary-900">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="ml-4 max-h-20 rounded-bl-3xl text-2xl font-bold text-white px-6 py-6 md:text-3xl">
            {title}
          </h2>
          <div className="s flex max-h-20 max-w-20 items-center justify-center rounded-br-3xl bg-secondary-500 p-4">
            <img src={icon} alt="Goals Icon" className="object-contain" />
          </div>
        </div>

        <div className="flex flex-wrap gap-8 px-8 pb-8 text-white">
          <div className="min-w-[250px] flex-1">
            <h3
              datetime="P20Y"
              className="text-lg md:text-xl font-bold text-primary-500"
            >
              كيابل تتحدى الارتفاعات
            </h3>
            <p className="mt-4 text-base text-white">
طول كيابلنا وصل لـ 200 ضعف من طول برج خليفة الشامخ، لنؤكد أن طموحنا وإبداعنا لا يعرف حدوداً            </p>
          </div>

          <div className="min-w-[250px] flex-1">
            <h3  className="text-lg md:text-xl font-bold text-primary-500">
            شواحن تُغذي المدن
            </h3>
            <p className="mt-4 text-base text-white">
            شواحننا قادرة على تشغيل مدينة جدة بكامل حيويتها - حرها وبردها ورطوبتها - لمدة شهر كامل، متحدية كل التوقعات التكنولوجية            </p>
          </div>

          <div className="min-w-[250px] flex-1">
          <h3  className="text-lg md:text-xl font-bold text-primary-500">
          تغطية شاملة            </h3>
            <p className="mt-4 text-base text-white">
            نجحنا في خدمة أكثر من مليون عميل.
            </p>
          </div>
          <div className="min-w-[250px] flex-1">
          <h3  className="text-lg md:text-xl font-bold text-primary-500">
          ابتكار متواصل            </h3>
            <p className="mt-4 text-base text-white">
            صممنا وأنتجنا أكثر من 150 منتجاً متفرداً يحمل بصمة الإبداع والتميز
            </p>
          </div>
          <div>
          <h3  className="text-lg md:text-xl font-bold text-primary-500">
          اعتمادات عالمية           </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ZeroCard;
