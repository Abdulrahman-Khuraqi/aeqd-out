import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import Image from "next/image";
import clientsData from "../../assets/data/clients.json";
import ScrollableAnchor from "react-scrollable-anchor";
import { useIntl } from "react-intl";



const Clients = () => {
  const { formatMessage } = useIntl();

  return (
    <ScrollableAnchor id="Clients">
      <section className="px-2 pt-16">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="rounded-full border bg-primary-100 px-4 py-1 font-semibold text-primary-700">
              {formatMessage({ id: "clientsTitle" })}
            </span>
          </div>
          <h2 className="mb-4 bg-primary-gradient bg-clip-text text-3xl font-bold text-transparent md:text-5xl md:leading-tight">
            {formatMessage({ id: "clientsHeading" })}
          </h2>
          <p className="mb-12 text-base text-gray-500 sm:text-lg">
            {formatMessage({ id: "clientsDescription" })}
          </p>

          {/* Slider with Clients Logos */}
          <Swiper
            dir="rtl"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={5}
            modules={[Autoplay]}
            breakpoints={{
              200: { slidesPerView: 1 },
              700: { slidesPerView: 3 },
              1100: { slidesPerView: 5 },
            }}
          >
            {clientsData.map((client) => (
              <SwiperSlide key={client.id} className="!flex justify-center">
                <div className="flex h-[192px] w-[220px] items-center justify-center rounded-3xl border-2 border-primary-200 bg-white">
                  <Image
                    src={`/images/clients/${client.image}.webp`}
                    width={client.width}
                    height={client.height}
                    alt='client'
                    className={`max-h-[90px] w-auto rounded-lg`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-12">
            <a
              href="#Contact-Us"
              className="btn-line inline-flex items-center gap-2 rounded-full border-2 border-primary-700 bg-primary-50 px-6 py-3 font-bold text-primary-700 transition duration-500 ease-in-out hover:-translate-y-2 hover:!border-secondary-500 hover:shadow-2xl"
            >
              {formatMessage({ id: "joinOurClients" })}
              {arrowLeft}
            </a>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Clients;
