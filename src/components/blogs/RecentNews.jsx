"use client";
import { useState } from "react";
import Pagination from "../shared/Pagination";
import BlogItems from "./BlogItems";
import useTranslation from "@/utils/useTranslation";

const RecentNews = ({ blogItemData }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPage = Math.ceil(blogItemData.length / itemsPerPage);
  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return blogItemData.slice(startIndex, endIndex);
  };
  const currentPageData = paginateData();
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const paginateFunction = {
    totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
    goToPreviousPage,
  };

  return (
    <section>
      <div className="absolute left-1/2 top-20 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative mx-auto mb-16">
        <div className="mx-auto mb-8 text-center md:mb-16">
          <h1 className="text-2xl font-bold md:text-4xl">{t("blogTitle")}</h1>
          <p className="mt-5">{t("blogSubtitle")}</p>
        </div>
        <div className=" ">
          {blogItemData.length === 0 && (
            <h2 className="text-center text-xl font-semibold text-gray-600 dark:text-gray-300">
              {t("لا يوجد مقالات حاليا") || "لا يوجد مقالات حاليا"}
            </h2>
          )}
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {currentPageData.map((blog) => (
              <BlogItems
                key={blog.slug}
                slug={blog.slug}
                content={blog.content}
                blogData={blog}
                column={false}
              />
            ))}
          </div>
        </div>
      </div>
      <Pagination paginateFunction={paginateFunction} />
    </section>
  );
};

export default RecentNews;
