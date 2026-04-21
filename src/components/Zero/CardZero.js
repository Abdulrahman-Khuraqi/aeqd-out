import ButtonX from '@/components/common/Button';
import Link from 'next/link';

const ZeroCard = ({ title, description, icon, cta }) => {
  return (
    <div className="mt-6 xl:mt-0 xl:mb-10">
      <div className="rounded-3xl bg-secondary-900">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="ml-4 max-h-20 rounded-bl-3xl  text-2xl font-bold text-white px-6 py-6 md:text-3xl">
            {title}
          </h2>
          <div className="flex max-h-20 max-w-20 items-center justify-center rounded-br-3xl  bg-secondary-500 p-4">
            <img src={icon} alt="Goals Icon" className="object-contain" />
          </div>
        </div>
        <div className="px-8 pb-8">
          <p className="text-white text-base">{description}</p>
          {cta && <Link href='/warranty'><ButtonX className={'w-full mt-4'}>{cta}</ButtonX></Link>}
        </div>
      </div>
    </div>
  );
};
export default ZeroCard;
