import Head from "next/head";
import PropTypes from "prop-types";

const Meta = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  url,
  canonicalUrl,
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

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
      <meta name="robots" content="index, follow" />
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
  canonicalUrl: PropTypes.string,
};

Meta.defaultProps = {
  keywords: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "", // يمكنك تحديد صورة افتراضية هنا
  url: "", // رابط الموقع الافتراضي
  canonicalUrl: "",
};

export default Meta;
