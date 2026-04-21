import React from "react";
import Animated from "@/components/Animated";
import Image from 'next/image';
import logoImage from "/public/images/logo.svg";

const MakingChange = () => {
  return (
    <div className="border border-gray-500 rounded-2xl mt-20" style={{ backgroundImage: "url('/images/all/background-left.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top left" }}>
      <div className="flex items-center justify-center py-16 relative">

        <div className="w-6/12">
          <Animated animationType="slideRight" className='justify-start'>
            <h2 className="text-4xl font-bold text-white mb-8">
            الذكاء يقود الابتكار والابتكار يقود النتائج.            </h2>
            <p className="text-lg text-gray-300 mb-8">
            نحن أكثر من مجرد شركة تسويق. نحن نستخدم أحدث ما توصلت إليه تقنيات الذكاء الاصطناعي لتحليل البيانات وفهم السلوك البشري بطرق لم يسبق لها مثيل، كل ذلك بهدف تعزيز نجاح عملائنا.            </p>

          </Animated>
        </div>
        <div className="w-4/12 flex justify-end items-center relative">
           <div className="">
            <Image src={logoImage} alt="logo" width={347} height={178} />
          </div> 
        </div>
      </div>
    </div>
  );
};

export default MakingChange;
