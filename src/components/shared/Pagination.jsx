"use client";

// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "@/contexts/LanguageContext"; // Import the useLanguage hook

const Pagination = ({ paginateFunction }) => {
  const {
    totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
    goToPreviousPage,
  } = paginateFunction;
  const { isArabic } = useLanguage(); // Get isArabic from the language context

  return (
    <div className="container">
      <ul className="flex items-center justify-center gap-2 my-8">
        {/*  <li className="group">
          <button
            onClick={() => {
              isArabic ? goToNextPage() : goToPreviousPage(); // Flip function based on language
            }}
            className={`border-borderColor dark:border-borderColor-dark group flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium duration-300 ${
              currentPage === 1
                ? "disabled:opacity-7 cursor-not-allowed"
                : "hover:bg-primary-500 cursor-pointer"
            }`}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon
              icon={isArabic ? faArrowRight : faArrowLeft} // Flip arrow icon for RTL
              className={`${currentPage === 1 ? "" : "dark:group-hover:text-paragraph"} duration-300`}
            />
          </button> 
        </li>*/}
        {Array.from({ length: totalPage }, (_, index) => (
          <li
            className={`group ${index + 1 === currentPage && "page-active"}`}
            key={index}
          >
            <button
              href=""
              className="hover:text-paragraph dark:group-[.page-active]:text-paragraph flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium duration-300 hover:bg-primary-500 group-[.page-active]:bg-primary-500"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}

        {/* <li className="group">
          <button
            onClick={() => {
              isArabic ? goToPreviousPage() : goToNextPage(); // Flip function based on language
            }}
            className={`border-borderColor dark:border-borderColor-dark group flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium duration-300 ${
              currentPage === totalPage
                ? "disabled:opacity-7 cursor-not-allowed"
                : "hover:bg-primary-500 cursor-pointer"
            }`}
            disabled={currentPage === totalPage}
          >
            <FontAwesomeIcon
              icon={isArabic ? faArrowLeft : faArrowRight} // Flip arrow icon for RTL
              className={`${currentPage === totalPage ? "" : "dark:group-hover:text-paragraph"} duration-300`}
            />
          </button>
        </li> */}
      </ul>
    </div>
  );
};

export default Pagination;
