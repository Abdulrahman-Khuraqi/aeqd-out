//ak-components
//Meta v0.1 2024-11-17 13:25:17

import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = ({ title, description, keywords, ogTitle, ogDescription, ogImage, url }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogImage: PropTypes.string,
  url: PropTypes.string,
};

Meta.defaultProps = {
  keywords: 'digital marketing, advertising, next.js, seo, tailwindcss',
  ogTitle: '',
  ogDescription: '',
  ogImage: '/images/cover.jpg', // Update this with a default image path if needed
  url: 'https://itsak.com', // Update with your default website URL
};

export default Meta;