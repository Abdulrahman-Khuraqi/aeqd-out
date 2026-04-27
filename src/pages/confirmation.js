import Head from "next/head";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Confirmation() {
  return (
    <>
      <Head>
        <title>تم استلام طلبك | عقد</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main
        dir="rtl"
        className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-12 font-ar"
      >
        <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-xl md:p-12">

          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <CheckCircleIcon className="h-24 w-24 text-green-500 drop-shadow-md" />
          </div>

          {/* Title */}
          <h1 className="mb-3 text-center text-3xl font-bold text-gray-800 md:text-4xl">
            تم استلام طلبك
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-center text-xl font-medium leading-loose text-gray-600">
            سيتم إرسال طلب تأكيد بيانات العقار إليك عبر منصة إيجار
            <br />
            نرجو قبول الطلب في أقرب وقت
            <br />
            بعد قبول الطلب سيتم إرسال مسودة العقد إليكم عبر الواتساب
          </p>

          {/* Video section */}
          <div className="mb-8">
            <p className="mb-3 text-center font-semibold text-gray-700">
              طريقة قبول الطلب من منصة إيجار موضحة في الفيديو أدناه
            </p>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <video
                src="/assets/video-6.mp4"
                controls
                playsInline
                className="w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.ejar.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-3 text-lg font-semibold text-white shadow transition hover:opacity-90"
            >
              <span>الذهاب إلى منصة إيجار</span>
            </a>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-3 text-lg font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
            >
              العودة للرئيسية
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
