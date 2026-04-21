import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import PropTypes from 'prop-types';

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
    <section id={sectionId} className={`px-2 pt-16 ${className}`}>
      <div className="container mx-auto text-center">
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
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={5}
          modules={[Autoplay]}
          breakpoints={{
            200: { slidesPerView: 1 },
            700: { slidesPerView: 3 },
            1100: { slidesPerView: 5 },
          }}
          {...swiperOptions}
        >
          {data.map((client, index) => (
            <SwiperSlide key={client.id || index} className="!flex justify-center">
              <div className="flex h-[192px] w-[220px] items-center justify-center rounded-3xl border-2 border-primary-200 bg-white">
                {ImageComponent ? (
                  <ImageComponent
                    src={client.imageSrc}
                    width={client.width}
                    height={client.height}
                    alt={client.alt || 'client'}
                    className="max-h-[90px] w-auto rounded-lg"
                  />
                ) : (
                  <img
                    src={client.imageSrc}
                    width={client.width}
                    height={client.height}
                    alt={client.alt || 'client'}
                    className="max-h-[90px] w-auto rounded-lg"
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
