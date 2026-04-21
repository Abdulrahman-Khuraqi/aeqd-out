// BlogItems.jsx
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/utils/sanityClient"; // Adjust import path as needed

const BlogItems = ({ slug, blogData, content, column }) => {
  const imageUrl = urlFor(blogData.thumbnail).url();
  const language = blogData.language || "en"; // تأكد من وجود اللغة (استخدم الإنجليزية كافتراضية إذا لم تُحدد)
  const publishedDate = blogData.publishedAt
    ? new Date(blogData.publishedAt).toLocaleDateString()
    : "";

  return column ? (
    <article className="shadow-nav dark:bg-dark-200 rounded-2xl bg-white p-2.5">
      <div className="dark:border-borderColor-dark rounded-2xl border border-dashed border-gray-100 p-6 max-md:px-4">
        <div className="grid grid-cols-2 items-center gap-12 max-lg:grid-cols-1">
          <div className="mb-6 h-48 w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt="blog image"
              className="h-full w-full rounded-lg object-cover"
              width={350}
              height={350}
            />
          </div>
          <div>
            <Link href={`/post/${language}/${slug.current}`} className="block">
              <h3 className="mb-3 font-semibold leading-[1.33]">
                {blogData.title}
              </h3>
            </Link>
            <div className="mb-4 flex items-center gap-x-2">
              <p>{blogData.authorName}</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="6"
                  viewBox="0 0 5 6"
                  fill="none"
                >
                  <circle
                    cx="2.5"
                    cy="3"
                    r="2.5"
                    fill=""
                    className="fill-[#D8DBD0] dark:fill-[#3B3C39]"
                  />
                </svg>
              </span>
              <p>{blogData.publishedAt}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  ) : (
    <article className="shadow-nav dark:bg-dark-200 rounded-2xl bg-white p-2.5">
      <div className="dark:border-borderColor-dark rounded-2xl border border-dashed border-gray-100 p-6 max-md:p-4">
        <Image
          src={imageUrl}
          alt="blog image"
          className="mb-6 h-48 w-full rounded-lg object-cover shadow-lg"
          width={389}
          height={189}
        />
        <div>
          <Link href={`/post/${language}/${slug.current}`} className="block">
            <h3 className="mb-3 font-semibold leading-[1.33]">
              {blogData.title}
            </h3>
          </Link>
          <div className="mb-4 flex flex-col gap-1">
            {blogData.showAuthor && <p>{blogData.authorName}</p>}
            <div className="flex items-center">
              {publishedDate ? (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                </span>
              ) : (
                ""
              )}
              <p>{publishedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogItems;
