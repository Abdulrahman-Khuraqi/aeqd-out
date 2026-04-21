import React from "react";
import Animated from "@/components/Animated";
import Image from 'next/image';
import globalImage from "/public/images/globe.webp";

const MakingChange = () => {
  return (
    <div className="border border-gray-500 rounded-2xl mt-20" style={{ backgroundImage: "url('/images/all/background-right.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top right" }}>
      <div className="flex items-center justify-center py-16 relative">

        <div className="w-6/12">
          <Animated animationType="slideRight" className='justify-start'>
            <h2 className="text-4xl font-bold text-white mb-8">
              إحداث تغيير حقيقي
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              استراتيجياتنا تضمن ليس فقط نتائج أفضل بل تجربة عمل مختلفة شاملة، وتخصيص مصمم بعناية لتلبية احتياجاتك وتحقيق أهدافك.
            </p>
            <a
              href="#"
              className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-700 transition duration-300"
            >
              كيف نفعل ذلك
            </a>
          </Animated>
        </div>
        <div className="w-4/12 flex justify-end items-center relative">
           <div className="absolute -translate-y-10">
            <Image src={globalImage} alt="Globe" width={360} height={360} />
          </div> 
        </div>
      </div>
    </div>
  );
};

export default MakingChange;
