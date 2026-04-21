import RecentNews from "@/components/blogs/RecentNews";
import client from "@/utils/sanityClient";
import groq from "groq";
import { useLanguage } from "@/contexts/LanguageContext";
import useTranslation from "@/utils/useTranslation";
import useToggle from "@/Hooks/useToggle";

// Content components
import Meta from "@/components/Meta";
import HeaderV29 from "@/components/common/Header/HeaderV29-secondary";
import Footer from "@/components/home/FooterSecondary";

export async function getStaticProps() {
  // Fetch all blog posts from Sanity
  const blogs = await client.fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      slug,
      mainImage,
      thumbnail,
      publishedAt,
      featured,
      body,
      language,
      "authorName": author->name,
      "authorImage": author->image
    }`,
  );

  return {
    props: { blogs },
  };
}

const Blog = ({ blogs }) => {
  const [drawer, toggleMenu] = useToggle(false);
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  const currentLanguage = isArabic ? "ar" : "en";

  // Filter blogs based on current language
  const filteredBlogs = blogs.filter(
    (blog) => blog.language === currentLanguage,
  );
  const featuredBlogs = filteredBlogs.filter((blog) => !blog.featured);
  const recentBlogs = filteredBlogs.filter((blog) => !blog.featured);

  return (
    <div className="mx-auto">
      <Meta
        title="المقالات - أسهل عقد"
        description="استكشف مقالاتنا المتنوعة حول توثيق عقود الإيجار الإلكترونية السكنية والتجارية في السعودية. نصائح وإرشادات لتسهيل عملية التوثيق."
        keywords="توثيق عقود الإيجار, عقود سكنية, عقود تجارية, إيجار, السعودية, مقالات"
        ogTitle="المقالات - أسهل عقد"
        ogDescription="استكشف مقالاتنا المتنوعة حول توثيق عقود الإيجار الإلكترونية السكنية والتجارية في السعودية. نصائح وإرشادات لتسهيل عملية التوثيق."
        url="https://aeqd.sa/articles"
      />
      <HeaderV29 drawer={drawer} action={toggleMenu} />
      <main className="pt-40 md:pt-40">
        <RecentNews blogItemData={recentBlogs} />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
