import React from "react";

const GoalsZero = () => {
  const goals = [
    {
      id: 1,
      icon: "/images/icons/goal_icon_1.webp",
      title: "خدمة عملاء متكاملة",
    },
    {
      id: 2,
      icon: "/images/icons/goal_icon_2.webp",
      title: "التوسع في الأسواق",
    },
    {
      id: 3,
      icon: "/images/icons/goal_icon_3.webp",
      title: "تقديم منتجات موثوقة",
    },
    {
      id: 4,
      icon: "/images/icons/goal_icon_4.webp",
      title: "تعزيز مكانتنا كوكيل حصري",
    },
  ];

  return (
    <section className="mt-6 xl:mt-8">
      <div className=" mx-auto rounded-3xl bg-secondary-900">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="max-h-20  ml-4 text-2xl font-bold text-primary-500  bg-secondary-500 rounded-bl-3xl md:text-3xl px-6 py-6">الأهداف</h2>
          <div className="flex max-h-20 max-w-20 items-center justify-center rounded-br-3xl p-4 bg-secondary-500">
            <img
              src="/images/icons/goals_icon.webp"
              alt="Goals Icon"
              className="object-contain"
            />
          </div>
        </div>

        <div className="py-10 px-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="flex flex-col items-center rounded-lg bg-secondary-500 px-6 py-8 text-center transition-shadow duration-300 hover:shadow-md hover:shadow-primary-500"
            >
              <img
                src={goal.icon}
                alt={goal.title}
                className="mb-4 h-16 w-16"
              />
              <p className="text-lg font-medium text-white">{goal.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsZero;
