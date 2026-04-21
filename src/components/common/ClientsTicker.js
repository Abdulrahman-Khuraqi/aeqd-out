import PropTypes from 'prop-types';
import Marquee from 'react-marquee-slider';

const ClientsTicker = ({
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
  className = '',
  dir = 'ltr',
}) => {
  return (
    <section id={sectionId} className={`${className}    `}>
      <div className="px-8 text-center border border-gray-500 rounded-2xl py-16 bg-black-500">
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

        {/* Marquee Slider for Client Logos */}
        <div className="overflow-hidden">
          <Marquee velocity={20} minScale={0.7} resetAfterTries={5}>
            {data.map((client, index) => (
              <div key={client.id || index} className="flex justify-center items-center mx-4">
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
                    className="max-h-[54px] w-auto rounded-lg"
                  />
                )}
              </div>
            ))}
          </Marquee>
        </div>

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

ClientsTicker.propTypes = {
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
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl']),
};

export default ClientsTicker;
