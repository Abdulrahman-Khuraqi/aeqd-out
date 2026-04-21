"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/utils/sanityClient";
import { useLanguage } from "@/contexts/LanguageContext";
// استيراد الأيقونات من heroicons (نسخة outline أو solid كما تفضل)
import { ArrowLeftIcon,ArrowRightIcon, CalendarIcon } from "@heroicons/react/24/outline";
import ButtonX from "@/components/common/Button";

const ArticlesSection = ({ blogs }) => {
  const { isArabic } = useLanguage();

  // فلترة المقالات بناءً على اللغة
  const filteredBlogs = blogs.filter(
    (blog) => blog.language === (isArabic ? "ar" : "en"),
  );

  return (
    <section className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
      <h2 className="mb-4 text-2xl text-center font-bold sm:text-3xl md:mb-8 md:text-4xl">
      {isArabic ? "آخر المقالات" : "Latest Articles"}
        </h2>

        {/* إذا لم توجد مقالات بعد الفلترة، يمكنك عرض رسالة تنبيهية أو ما يناسبك */}
        {filteredBlogs.length === 0 && (
          <p className="text-gray-600 dark:text-gray-300">
            {isArabic ? "لا توجد مقالات حالياً" : "No articles available."}
          </p>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((post) => {
            const imageUrl =
              post.mainImage &&
              urlFor(post.mainImage).width(600).height(400).url();

            // تنسيق تاريخ النشر (إن وجد)
            const publishedDate = post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString(
                  isArabic ? "ar-SA" : "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )
              : null;

            return (
              <div
                key={post._id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-transform  dark:bg-gray-800"
              >
                {/* صورة المقال */}
                {imageUrl && (
                  <div className="relative h-48 w-full overflow-hidden sm:h-52">
                    <Image
                      src={imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  {/* معلومات تاريخ النشر */}
                  {publishedDate && (
                    <div className="mb-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <CalendarIcon className="mr-1 h-5 w-5" />
                      <span>{publishedDate}</span>
                    </div>
                  )}

                  {/* عنوان المقال */}
                  <h3 className="mb-3 text-lg font-semibold text-gray-800 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {post.title}
                  </h3>

                  {/* مقتطف بسيط (excerpt) إن وُجد */}
                  {post.excerpt && (
                    <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-300">
                      {post.excerpt.length > 100
                        ? post.excerpt.slice(0, 100) + "..."
                        : post.excerpt}
                    </p>
                  )}

                  {/* زر/رابط "اقرأ المزيد" */}
                  <Link
                    href={`/post/${post.language}/${post.slug?.current}`}
                    className="mt-auto inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {isArabic ? "اقرأ المزيد" : "Read more"}
                    {isArabic ? <ArrowLeftIcon className="ms-1 h-4 w-4" />:<ArrowRightIcon className="ms-1 h-4 w-4" />}

                  </Link>
                </div>
              </div>
            );
          })}
        </div>
 {/* زر "عرض المزيد" */}
 <div className="mt-8 flex justify-center">
          <Link href="/articles">
            <ButtonX size="md" variant="secondary">
              {isArabic ? "جميع المقالات " : "Show more"}
              {isArabic ? (
                <ArrowLeftIcon className="ms-1 h-4 w-4" />
              ) : (
                <ArrowRightIcon className="ms-1 h-4 w-4" />
              )}
            </ButtonX>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
