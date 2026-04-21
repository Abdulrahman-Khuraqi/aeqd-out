// sanityClient.js
import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: '84m6a72y',  // Your Sanity Project ID
  dataset: 'blog-dataset', // Your Sanity Dataset
  apiVersion: '2023-10-27', // API version
  useCdn: false,            // Use CDN
});

const builder = imageUrlBuilder(client);

export default client;

export function urlFor(source) {
  return builder.image(source);
}

export async function fetchPosts() {
  const query = '*[_type == "post"]';
  return await client.fetch(query);
}

export async function getStaticProps() {
  const blogs = await client.fetch(
    `*[_type == "post"]{
      _id,
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      publishedAt,
      body[]{
        ...,
        _type == "image" => {
          ...,
          "url": asset->url
        }
      },
      "authorName": author->name,
      "authorImage": author->image
    }`
  );
  

  return {
    props: {
      blogs,
    },
    revalidate: 10, // ISR for refreshing data periodically
  };
}
