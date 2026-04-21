import PropTypes from 'prop-types';
import Marquee from 'react-marquee-slider';

const ClientsTicker = ({
  data,
  id = 'Clients',
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
    <section id={id} className={`${className}  mt-8`}>
      <div className=" text-center rounded-2xl  bg-secondary-900">
        <div className="mb-6 flex items-center justify-between">
        <h2 className="max-h-20  ml-4 text-2xl font-bold text-primary-500  bg-secondary-500 rounded-bl-3xl md:text-3xl px-6 py-6">{sectionTitle}</h2>
        </div>

        {/* Marquee Slider for Client Logos */}
        <div className='px-8 py-16'>
        <div className="overflow-hidden">
          <Marquee velocity={20} minScale={0.7} resetAfterTries={5}>
            {data.map((client, index) => (
              <div key={client.id || index} className="flex justify-center items-center mx-4">
                {ImageComponent ? (
                  <ImageComponent
                    src={client.imageSrc}
                    width={client.width}
                    height={client.height}
                    alt={client.alt || 'logo'}
                    className="max-h-[50px] w-auto rounded-lg"
                  />
                ) : (
                  <img
                    src={client.imageSrc}
                    width={client.width}
                    height={client.height}
                    alt={client.alt || 'logo'}
                    className="max-h-[50px] w-auto rounded-lg"
                  />
                )}
              </div>
            ))}
          </Marquee>
        </div>
        </div>

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
