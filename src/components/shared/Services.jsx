'use client';

import ServiceBoxes from './ServiceBoxes';
import Consultation from '@/components/home-1/Consultation';
import Sharara from '@/components/home-1/Sharara';
import useTranslation from '@/utils/useTranslation'; // استخدام الترجمة

const Services = ({ sectionDetails = true }) => {
  const { t } = useTranslation(); // استدعاء الترجمة
  return (
    <div id='about'>
      <section className="relative bg-white pt-[75px] pb-[75px] dark:bg-secondary-900">
        <div className="absolute left-0 right-0 top-25 h-full w-full md:bg-[url('/images/service-bg.png')] bg-cover bg-center bg-no-repeat opacity-70 sm:hidden"></div>
        <div className="container">
          <div className="mb-5 md:mb-12">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl md:text-5xl font-bold bg-primary-gradient bg-clip-text !text-transparent !leading-normal ">
                {t('servicesHeading')} {/* استخدام الترجمة لعنوان الخدمة */}
              </h2>
              <p className='text-xl md:text-3xl mb-1 dark:!text-gray-200 sm:!leading-relaxed'>
                {t('servicesDescription1')} {/* الفقرة الأولى من الوصف */}
              </p>
              <p className='text-xl md:text-3xl mb-1 dark:!text-gray-200 sm:!leading-relaxed'>
                {t('servicesDescription2')} {/* الفقرة الثانية من الوصف */}
              </p>
            </div>
          </div>
          {/* مكونات الصناديق والاستشارات */}
          <ServiceBoxes />
          <Consultation />
          <Sharara />
        </div>
      </section>
    </div>
  );
};

export default Services;
