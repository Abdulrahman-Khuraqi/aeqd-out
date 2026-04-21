"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import client, { urlFor } from "@/utils/sanityClient";
import groq from "groq";
import { useLanguage } from "@/contexts/LanguageContext";
import { PortableText } from "@portabletext/react";

// Content components
import Meta from "@/components/Meta";
import HeaderV29 from "@/components/common/Header/HeaderV29-secondary";
import Footer from "@/components/home/FooterSecondary";

export async function getStaticPaths() {
  // Fetch all post slugs from Sanity
  const posts = await client.fetch(
    groq`*[_type == "post"]{ "slug": slug.current, "language": language }`,
  );
  const paths = posts.map((post) => ({
    params: { slug: post.slug, lang: post.language || "ar" },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  // Fetch post data from Sanity using the slug
  const { slug, lang } = params;
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      excerpt,
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
      "category": category->title,
      "authorName": author->name,
      "authorBio": author->bio,
      "authorImage": {
        asset->{
          _id,
          url
        }
      },
      showAuthor
    }`,
    { slug, lang },
  );

  if (!post) {
    return { notFound: true };
  }

  // حساب وقت القراءة تلقائيًا بناءً على محتوى المقال
  if (post.body) {
    // تحويل محتوى الـ PortableText إلى نص عادي
    const plainText = post.body
      .map((block) => {
        if (block._type === "block" && block.children) {
          return block.children.map((child) => child.text).join(" ");
        }
        return "";
      })
      .join(" ");
    const wordCount = plainText.split(/\s+/).filter(Boolean).length;
    // نفترض سرعة قراءة 200 كلمة في الدقيقة
    const minutes = Math.ceil(wordCount / 200);
    post.readingTime = minutes;
  }

  return {
    props: { post },
    revalidate: 10, // Revalidate every 10 seconds (ISR)
  };
}

const BlogDetails = ({ post }) => {
  const { isArabic } = useLanguage();
  console.log(post.authorBio);

  // State for toggling Dark/Light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update the <html> class on dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const mainImageUrl = post.mainImage?.asset?.url || "";
  const authorImage = post.authorImage?.asset?.url || "";
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString()
    : "";

  // Serializers for PortableText with Tailwind classes (including dark mode support)
  const serializers = {
    block: {
      normal: ({ children }) => (
        <p className="mb-6 text-base leading-7 text-gray-700 dark:text-gray-300">
          {children}
        </p>
      ),
      h1: ({ children }) => (
        <h1 className="mb-6 mt-10 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="mb-6 mt-12 border-b border-gray-300 pb-4 text-2xl font-bold text-gray-900 dark:border-gray-600 dark:text-gray-100 md:text-3xl">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="mb-4 mt-6 text-lg font-semibold text-gray-700 dark:text-gray-300 md:text-xl">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="mb-4 mt-4 text-base font-medium text-gray-700 dark:text-gray-300 md:text-lg">
          {children}
        </h4>
      ),
      blockquote: ({ children }) => (
        <blockquote className="my-4 border-l-4 border-gray-300 pl-4 italic text-gray-500 dark:border-gray-600 dark:text-gray-400">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="mb-4 list-inside list-disc pl-5 leading-7 text-gray-700 dark:text-gray-300">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="mb-4 list-inside list-decimal pl-5 leading-7 text-gray-700 dark:text-gray-300">
          {children}
        </ol>
      ),
    },
    listItem: ({ children }) => (
      <li className="mb-2 list-inside dark:text-gray-300">{children}</li>
    ),
    marks: {
      link: ({ value, children }) => {
        const { href } = value;
        return (
          <a
            href={href}
            className="text-blue-500 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: (props) => {
        // Check if the image block and its asset exist
        if (!props.value || !props.value.asset) {
          // Option 1: Return null to render nothing
          return null;

          // Option 2: Return a placeholder element (uncomment below if you prefer)
          // return (
          //   <div className="my-4 w-full h-64 bg-gray-200 flex items-center justify-center">
          //     No image available
          //   </div>
          // );
        }
        // Build the image URL using your urlFor function
        const imageUrl = urlFor(props.value.asset)?.url();
        // If the URL is still undefined, provide a fallback URL (optional)
        const finalUrl = imageUrl || "/fallback-image.png";

        return (
          <img
            src={finalUrl}
            alt={props.value.alt || "Image"}
            className="my-4 w-full rounded-2xl shadow-lg"
          />
        );
      },
    },
  };

  // يمكنك تعديل الرابط أدناه ليتناسب مع عنوان موقعك
  const currentUrl = post.seo?.canonicalUrl || "";

  return (
    <>
      <Meta
        title={post.seo?.metaTitle || `اقرأ ${post.title} - مدونة أسهل عقد`}
        description={
          post.seo?.metaDescription ||
          post.excerpt ||
          `استكشف هذه المقالة بعنوان "${post.title}".`
        }
        keywords={
          post.seo?.metaKeywords
            ? post.seo.metaKeywords.join(", ")
            : `أسهل عقد, ${post.title}, تقنية, تطوير تطبيقات`
        }
        ogTitle={post.seo?.metaTitle || post.title}
        ogDescription={
          post.seo?.metaDescription ||
          `اكتشف تفاصيل ${post.title} في مقالتنا الجديدة.`
        }
        ogImage={
          post.seo?.shareImage
            ? urlFor(post.seo.shareImage).url()
            : mainImageUrl
        }
        url={currentUrl}
        canonicalUrl={currentUrl}
      />
      <HeaderV29 />
      <main className="dark:bg-gray-900">
        <article className="pb-150 relative mx-auto max-w-3xl py-40">
          <div className="container relative">
            <div className="blog-details">
              <h1 className="mb-4 text-2xl font-bold leading-normal dark:text-gray-100 md:text-4xl">
                {post.title}
              </h1>

              {/* عرض الفئة ومدة القراءة إن وجدت */}
              {post.category && (
                <div className="mb-6 flex items-center gap-x-4">
                  {post.category && (
                    <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      {post.category}
                    </span>
                  )}
                </div>
              )}

              <div className="mb-12 flex items-center gap-x-2">
                {publishedDate && (
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0121 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                          />
                        </svg>
                      </span>
                      <p className="dark:text-gray-300">{publishedDate}</p>
                    </div>
                  </div>
                )}
                {post.readingTime && (
                  <>
                    <span>|</span>
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {post.readingTime} دقيقة للقراءة
                    </span>
                  </>
                )}
              </div>
            </div>
            {mainImageUrl && (
              <div className="shadow-box dark:bg-dark-200 mb-16 overflow-hidden rounded-2xl bg-white p-2.5 max-md:h-[400px]">
                <Image
                  src={mainImageUrl}
                  alt={post.title}
                  className="w-full rounded-2xl max-md:h-full max-md:object-cover max-md:object-center"
                  width={1000}
                  height={550}
                />
              </div>
            )}
            <div className="blog-details-body text-start dark:text-gray-300">
              {post.body ? (
                <PortableText value={post.body} components={serializers} />
              ) : (
                <p>لا يوجد محتوى لهذا المقال</p>
              )}
            </div>
            {/* عرض بيانات الكاتب بناءً على حقل showAuthor */}
            {post.showAuthor && (
              <div className="author-info mt-6 flex items-start border-t border-gray-200 p-4 dark:border-gray-600">
                {authorImage ? (
                  <img
                    src={authorImage}
                    alt={post.authorName}
                    className="me-4 h-10 w-10 rounded-full"
                  />
                ) : (
                  <img
                    src="/images/user.webp"
                    alt="User Image"
                    className="me-4 h-12 w-12 rounded-full"
                  />
                )}
                <div>
                  <h4 className="text-base font-semibold dark:text-gray-100">
                    {post.authorName}
                  </h4>
                  <div>
                    {post.authorBio ? (
                      <p className="text-sm text-gray-600 dark:text-gray-200">
                        {post.authorBio}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>
        {/* Dark/Light mode toggle button with icons */}
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-500 shadow-lg transition-colors hover:bg-secondary-700"
          >
            {isDarkMode ? (
              // Sun icon for Light Mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              // Moon icon for Dark Mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
