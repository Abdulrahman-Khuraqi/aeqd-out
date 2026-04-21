// components/WhatDifferent.js
import React from "react";
import Animated from "@/components/Animated";

const WhatDifferent = () => {
  return (
    <section className="bg-dark-900 mt-20">
      <div className="">
        <h2 className="mb-12 text-4xl font-bold text-white">
          ما الذي يجعلنا مختلفين؟{" "}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:flex-nowrap">
          <Animated animationType="slideUp">
            <div className="flex-1 rounded-2xl bg-black-500 p-8 shadow-lg border border-gray-600 ">
              <div className="mb-4">
                <img
                  src="/icons/science.svg"
                  alt="Science Icon"
                  className="mx-auto h-12 w-12"
                />
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-white">
                نتائج تتحدث عن نفسها{" "}
              </h3>
              <p className="text-gray-400">
                استراتيجياتنا مُصممة لتحقيق النمو المستدام وزيادة الإيرادات بشكل
                ملحوظ.{" "}
              </p>
            </div>
          </Animated>

          <Animated animationType="slideUp" delay={0.2}>
            <div className="flex-1 rounded-2xl bg-black-500 p-8 shadow-2xl border border-gray-600 ">
              <div className="mb-4">
                <img
                  src="/icons/personalization.svg"
                  alt="Personalization Icon"
                  className="mx-auto h-12 w-12"
                />
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-white">
                التخصيص الذكي{" "}
              </h3>
              <p className="text-gray-400">
                نبتكر تجارب فريدة لكل عميل، مع رسائل وحملات موجهة بدقة حسب
                احتياجاته{" "}
              </p>
            </div>
          </Animated>

          <Animated animationType="slideUp" delay={0.4}>
            <div className="flex-1 rounded-2xl bg-black-500 p-8 shadow-lg border border-gray-600 ">
              <div className="mb-4">
                <img
                  src="/icons/results.svg"
                  alt="Results Icon"
                  className="mx-auto h-12 w-12"
                />
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-white">
                علمٌ وراء كل خطوة{" "}
              </h3>
              <p className="text-gray-400">
                باستخدام الاقتصاد السلوكي وتحليل البيانات، نعمل على فهم عملائك
                بشكل أعمق{" "}
              </p>
            </div>
          </Animated>
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-black-500 border border-gray-600 py-12 ">
        <div className="w-10/12 mx-auto">

        <h2 className="mb-4 text-3xl font-bold text-white">مهمتنا</h2>
        <p className="mb-8 text-lg text-gray-400">
          نحن هنا لنحدث فرقًا. هدفنا هو مساعدة الشركات على تخطي العقبات وتحقيق
          التحول الرقمي الفعلي عبر تسويق مبتكر يقوده الذكاء الاصطناعي.{" "}
        </p>
        <a
          href="#"
          className="rounded-full bg-teal-500 px-6 py-3 text-white transition duration-300 hover:bg-teal-700"
        >
          تعرف على رحلتنا{" "}
        </a>
        </div>

      </div>
    </section>
  );
};

export default WhatDifferent;
