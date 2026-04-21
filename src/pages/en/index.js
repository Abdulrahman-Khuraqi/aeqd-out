// pages/en/index.js
"use client";

import dynamic from "next/dynamic";
import useToggle from "@/Hooks/useToggle";
import Meta from "@/components/Meta";
import useTranslation from "@/utils/useTranslation";
import { useEffect } from "react";
// استيراد الأقسام والمكونات الأساسية
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
import { configureAnchors } from "react-scrollable-anchor";
// أدوات أخرى
import client from "@/utils/sanityClient";
import groq from "groq";

// المكوّن الخاص بالمقالات
import ArticlesSection from "@/components/blogs/ArticlesSection";

// (اختياري) استخدام getStaticProps أو getServerSideProps لجلب المقالات
// أمثلة على بيانات تجريبية (Mock Data) بدلًا من Fetch حقيقي
// اجلب المقالات من Sanity
export async function getStaticProps() {
  const query = groq`*[_type == "post"] | order(publishedAt desc) [0..2]{
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
  // ضبط الإعدادات الخاصة بالروابط التمريرية
  configureAnchors({ offset: -50, scrollDuration: 100 });

  // ضبط خصائص الـ HTML عند تحميل الصفحة
  useEffect(() => {
    const html = document.getElementsByTagName("html");
    html[0].lang = "en";
    html[0].dir = "ltr";
  }, []);

  const [drawer, toggleMenu] = useToggle(false);
  const { t } = useTranslation();

  return (
    <>
      <Meta
        url={"https://www.aeqd.sa/en"}
        title={t("homeTitle")} // يمكنك تخصيص العناوين الوصفية كما تحب
        description={t("homeDescription")}
        keywords={t("homeKeywords")}
      />

      <HeaderV29 drawer={drawer} action={toggleMenu} />

      {/* الأقسام الرئيسية للصفحة */}
      <HeroV29 />
      <CounterArea style={{ backgroundColor: "#EEF1F6" }} />
      <Features />
      <WorkSteps />
      <Pricing />
      <LicensesSection />
      <ProjectHomeThree />

      {/* قسم المقالات */}
      {blogs && blogs.length > 0 && <ArticlesSection blogs={blogs} />}

      {/* الفوتر وعناصر مشتركة أخرى */}
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Home;
