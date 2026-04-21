import React from "react";
import Link from "next/link";
import Image from "next/image";

// common icons
import {
  EnvelopeOutlineIcon,
  WhatsApp,
  PhoneOutlineIcon,
} from "@/components/common/Icons";

import contactInfo from "@/assets/data/contactInfo.json";
import ScrollableAnchor from "react-scrollable-anchor";

function FooterSecondary({ className }) {
  return (
    <>
      <ScrollableAnchor id="footer">
        <section
          className={`footer-area footer-3-area ${className || ""} bg-gray-50 py-4 dark:bg-gray-900`}
        >
          <div className="container mx-auto px-4">
            {/* Using grid for professional column layout */}
            <div className="grid grid-cols-1 gap-8 text-right md:grid-cols-12">
              {/* About & Logo column */}
              <div className="md:col-span-5">
                <div className="footer-about-widget">
                  <div className="logo mb-4 block dark:hidden">
                    <Link href="/">
                      <Image
                        loading="lazy"
                        height="50"
                        width="101"
                        src={"/images/logo-02.webp"}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="logo mb-4 hidden dark:block">
                    <Link href="/">
                      <Image
                        loading="lazy"
                        height="50"
                        width="101"
                        src={"/images/logo/logo.webp"}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    احصل على عقدك الموثق من شبكة إيجار من أي مكان في المملكة
                  </p>
                </div>
              </div>

              {/* Services column */}
              <div className="md:col-span-2">
                <div className="footer-navigation">
                  <h4 className="title mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    الخدمات
                  </h4>
                  <ul className="justify-center space-y-2 md:justify-start">
                    <li>
                      <Link
                        href="/residential"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        توثيق عقد سكني
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/commercial"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        توثيق عقد تجاري
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#Subscriptions"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        العقود
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Our Advantages column */}
              <div className="md:col-span-2">
                <div className="footer-navigation">
                  <h4 className="title mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    مميزاتنا
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/#features"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        ثقة عالية
                      </a>
                    </li>
                    <li>
                      <Link
                        href="/#features"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        توفير وقتك
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#features"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        دعم قوي
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact column */}
              <div className="md:col-span-3">
                <div className="footer-widget-info">
                  <h4 className="title mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    ابقى على تواصل
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-start">
                      <EnvelopeOutlineIcon
                        width="18"
                        height="18"
                        stroke="#5ac6ca"
                        className="ml-1"
                      />
                      <a
                        href={contactInfo.emaillink}
                        className="mb-0 text-gray-600 hover:underline dark:text-gray-400"
                      >
                        {contactInfo.email}
                      </a>
                    </li>
                    <li className="flex items-center justify-start">
                      <PhoneOutlineIcon
                        width="18"
                        height="18"
                        stroke="#5ac6ca"
                        className="ml-1"
                      />
                      <a
                        dir="ltr"
                        href={contactInfo.phonelink}
                        className="mb-0 text-gray-600 hover:underline dark:text-gray-400"
                      >
                        {contactInfo.phone}
                      </a>
                    </li>
                    <li className="flex items-center justify-start">
                      <WhatsApp
                        width="18"
                        height="18"
                        fill="#5ac6ca"
                        className="ml-1"
                      />
                      <a
                        dir="ltr"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={contactInfo.whatsapplink}
                        className="mb-0 text-gray-600 hover:underline dark:text-gray-400"
                      >
                        {contactInfo.phone}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Copyright section */}
            <div className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-700">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  جميع الحقوق محفوظة{" "}
                  <Link href="/" className="hover:underline">
                    أسهل عقد
                  </Link>{" "}
                  {new Date().getFullYear()} ©
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    </>
  );
}

export default FooterSecondary;
