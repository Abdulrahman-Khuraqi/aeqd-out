import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from '@/utils/useTranslation'; // Custom hook for translation

const Why = ({
  sectionTag,
  features,
  className = 'bg-white dark:bg-secondary-900 pb-[75px] pt-[75px]',
}) => {
  const { t } = useTranslation(); // Call translation hook
  const whyData = features();

  return (
    <section className={cn(className)}>
      <div className="absolute left-0 right-0 top-25 h-full w-full md:bg-[url('/images/core-gradient.png')] md:bg-[length:600px_1000px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container">
        <div className="text-center mb-12">
          {sectionTag && <p className="section-tagline">{sectionTag}</p>}
          <h2 className="md:text-6xl text-4xl font-bold leading-normal">
            {t('whyWorkWithUs')} {/* استخدم الترجمة لعنوان القسم */}
            {' '}
            <span className="text-primary md:text-6xl text-4xl font-bold leading-normal">
              {t('whyWorkWithUsHighlighted')}
            </span>
          </h2>
        </div>

        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {whyData.map((items) => (
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-secondary-900" key={items.id}>
                <div className="h-full rounded border border-dashed border-gray-100 p-10 text-start dark:border-borderColor-dark max-lg:p-5">
                  <Image
                    src={items.iconLight}
                    alt={t('whyItemIconAlt')} // استخدم الترجمة لوصف الصورة
                    className="mb-6 inline-block h-auto w-auto dark:hidden"
                    width={55}
                    height={55}
                  />
                  <Image
                    src={items.iconDark}
                    alt={t('whyItemIconAlt')} // استخدم الترجمة لوصف الصورة
                    className="mb-6 hidden h-auto w-auto dark:inline-block"
                    width={55}
                    height={55}
                  />
                  <h3 className="mb-2.5 font-medium text-2xl">{items.title}</h3>
                  <p>{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto text-center flex justify-center">
          <Link href="/contact-us" className="btn bg-white text-dark py-3 px-8 rounded-full !text-xl flex justify-center items-center gap-4 font-bold mt-10">
            {t('contactUsNow')} {/* استخدم الترجمة لنص الزر */}
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9996 6.99994C14.9996 7.1657 14.9338 7.32467 14.8166 7.44188C14.6993 7.55909 14.5404 7.62494 14.3746 7.62494H6.87461V12.6249C6.875 12.7483 6.83885 12.8691 6.77072 12.972C6.7026 13.0748 6.60555 13.1552 6.4918 13.2031C6.4147 13.2337 6.33256 13.2496 6.24961 13.2499C6.08365 13.2492 5.92427 13.1849 5.8043 13.0703L0.179297 7.44525C0.0619335 7.32676 -0.00390625 7.16672 -0.00390625 6.99994C-0.00390625 6.83316 0.0619335 6.67312 0.179297 6.55463L5.8043 0.929627C5.89466 0.84484 6.00719 0.78737 6.12885 0.763866C6.25052 0.740363 6.37635 0.751786 6.4918 0.796814C6.60555 0.844628 6.7026 0.925042 6.77072 1.02792C6.83885 1.1308 6.875 1.25155 6.87461 1.37494V6.37494H14.3746C14.5404 6.37494 14.6993 6.44079 14.8166 6.558C14.9338 6.67521 14.9996 6.83418 14.9996 6.99994Z" fill="#0F1927" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Why;
