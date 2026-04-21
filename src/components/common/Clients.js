import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/free-mode';

const Clients = ({
  data,
  sectionId = 'Clients',
  sectionTitle,
  sectionHeading,
  sectionDescription,
  ctaText,
  ctaLink = '#',
  t = (text) => text,
  arrowIcon,
  ImageComponent,
  swiperOptions = {},
  className = '',
  dir = 'ltr',
}) => {
  return (
    <section id={sectionId} className={`${className} `}>
      <div className="container mx-auto px-8 text-center border border-gray-500  rounded-2xl  items-center	py-16 bg-black-500">
        {sectionTitle && (
          <div className="mb-6">
            <span className="rounded-full border bg-primary-100 px-4 py-1 font-semibold text-primary-700">
              {t(sectionTitle)}
            </span>
          </div>
        )}
        {sectionHeading && (
          <h2 className="mb-4 bg-primary-gradient bg-clip-text text-3xl font-bold text-transparent md:text-5xl md:leading-tight">
            {t(sectionHeading)}
          </h2>
        )}
        {sectionDescription && (
          <p className="mb-12 text-base text-gray-500 sm:text-lg">
            {t(sectionDescription)}
          </p>
        )}

        {/* Slider with Clients Logos */}
        <Swiper
          dir={dir}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
             pauseOnMouseEnter: true,
          }}
          speed={1000}
          spaceBetween={20}
         slidesPerView={5}
          loop={true} // Makes the logos loop infinitely
          modules={[Autoplay ]}
          breakpoints={{
            200: { slidesPerView: 1 },
            700: { slidesPerView: 3 },
            1100: { slidesPerView: 5 },
          }}
          allowTouchMove={false}
          {...swiperOptions}
        >
          {data.map((client, index) => (
            <SwiperSlide key={client.id || index} className="!flex justify-center "               style={{ width: 'auto' }}
>
              <div className="flex items-center justify-center">
                {ImageComponent ? (
                  <ImageComponent
                    src={client.imageSrc}
                    width={client.width}
                    height={client.height}
                    alt={client.alt || 'client'}
                    className="max-h-[50px] w-auto rounded-lg"
                  />
                ) : (
                  <img
                    src={client.imageSrc}
                    width={client.width}
                    height={client.height}
                    alt={client.alt || 'client'}
                    className="max-h-[50px] w-auto rounded-lg"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {ctaText && (
          <div className="mt-12">
            <a
              href={ctaLink}
              className="btn-line inline-flex items-center gap-2 rounded-full border-2 border-primary-700 bg-primary-50 px-6 py-3 font-bold text-primary-700 transition duration-500 ease-in-out hover:-translate-y-2 hover:!border-secondary-500 hover:shadow-2xl"
            >
              {t(ctaText)}
              {arrowIcon}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

Clients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      imageSrc: PropTypes.string.isRequired,
      width: PropTypes.number,
      height: PropTypes.number,
      alt: PropTypes.string,
    })
  ).isRequired,
  sectionId: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionHeading: PropTypes.string,
  sectionDescription: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  t: PropTypes.func,
  arrowIcon: PropTypes.node,
  ImageComponent: PropTypes.elementType,
  swiperOptions: PropTypes.object,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl']),
};

export default Clients;
