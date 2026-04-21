import dynamic from "next/dynamic";
import useToggle from "@/Hooks/useToggle";
import Meta from "@/components/Meta";
import useTranslation from "@/utils/useTranslation";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// أقسام الصفحة
import HeaderV29 from "@/components/common/Header/HeaderV29";
import HeroV29 from "@/components/Hero/HeroV29New";
import CounterArea from "@/components/home/CounterArea";
import Features from "@/components/home/Features";
import Pricing from "@/components/home/Pricing";
import Footer from "@/components/home/Footer";
import ProjectHomeThree from "@/components/home/ProjectHomeThree";
import WorkSteps from "@/components/home/WorkSteps";
import Whatsapp from "@/components/home/Whatsapp";
import LicensesSection from "@/components/home/LicensesSection";

// المكوّن الجديد لعرض المقالات
import ArticlesSection from "@/components/blogs/ArticlesSection";

// أدوات أخرى
import { configureAnchors } from "react-scrollable-anchor";
import client from "@/utils/sanityClient";
import groq from "groq";

// اجلب المقالات من Sanity
export async function getStaticProps() {
  const query = groq`*[_type == "post"] | order(publishedAt desc) [0..3]{
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    language
  }`;

  const blogs = await client.fetch(query);

  return {
    props: { blogs },
    revalidate: 60, // ISR: أعِد بناء الصفحة كل 60 ثانية مثلاً
  };
}

const Home = ({ blogs }) => {
  configureAnchors({ offset: -50, scrollDuration: 100 });
  const { isArabic, handleLanguageChange } = useLanguage(); // Get language state and toggle function

  useEffect(() => {
    const html = document.getElementsByTagName("html");
    html[0].lang = "ar";
    html[0].dir = "rtl";

  }, []);

  const [drawer, toggleMenu] = useToggle(false);
  const { t } = useTranslation();
    
  return (
    <>
      <Meta
        canonicalUrl={"https://after.aeqd.sa"}
        url={"https://after.aeqd.sa"}
        title={t("homeTitle")}
        description={t("homeDescription")}
        keywords={t("homeKeywords")}
      />

      <HeaderV29 drawer={drawer} action={toggleMenu} />

      {/* الأقسام الموجودة لديك */}
      <HeroV29 />
      <CounterArea style={{ backgroundColor: "#EEF1F6" }} />
      <Features />
      <WorkSteps />
      <Pricing />
      <LicensesSection />
      <ProjectHomeThree />

      {/* قسم المقالات الجديد */}
      {blogs && blogs.length > 0 && <ArticlesSection blogs={blogs} />}

      <Footer />
      <Whatsapp />
    </>
  );
};

export default Home;
