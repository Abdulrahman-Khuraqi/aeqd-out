import Image from "next/image";

const HeroZero = ({id}) => {
  return (
    <section
      id={id}
      style={{ backgroundImage: `url('/images/common/hero_background.webp')` }}
      className="md:py-[150px] py-[80px]    rounded-3xl  bg-no-repeat bg-center"
    >
      <div className=" flex flex-wrap gap-y-6 content-center px-10 md:px-20 justify-center h-full">
            <div className="md:w-7/12  w-full">
            <h1 className="text-3xl md:text-5xl font-bold  text-white !leading-normal">
            لينكوم للاتصالات

<br/>
وتقنية المعلومات          
          
                     </h1>
 
            </div>
          <div className="md:w-5/12 flex md:justify-end  w-full">
            <div>
              <Image

                src="/images/logo/logo.webp"
                alt="logo"
                width={384}
                height={150}
              />
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
            <span className="!text-primary-500 ps-2">
            لينكوم:
               </span>
             حيث التكنولوجيا تصنع المستقبل

                </h2>
          </div>
          <div className="w-full">
            
            <p>           
            لينكوم للاتصالات وتقنية المعلومات, هي شركة سعودية متخصصة في مجال بيع الهواتف الذكية واكسسواراتها بالجملة منذ عام 2002
            </p>
            </div>
        </div>
      </section>
  );
};

export default HeroZero;
