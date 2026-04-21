//ak-components
//SideMenu 2024-11-26 13:04:59

import React from "react";
import headerInfo from "@/assets/data/header.json";
import SocialMediaIcons from "../SocialMediaIcons"; // Import the component
import Link from "next/link"; // Add this import at the top

const SideMenu = ({ isOpen, toggleMenu, isArabic }) => {
  // Get the social media icons
  const socialMedia = SocialMediaIcons("20px");

  return (
    <div
      dir="rtl"
      className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black-500 transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Side Menu Container */}
      {/* overflow-y-auto  */}
      <div
        className={`left-100 shadow-lgz-50 fixed top-0 h-full w-64 transform bg-secondary-500 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-white">
            {isArabic ? "القائمة" : "Menu"}
          </h2>
          <button className="text-2xl font-bold" onClick={toggleMenu}>
            &times;
          </button>
        </div>
        <ul className="p-4">
          {(isArabic ? headerInfo.linksAr : headerInfo.linksEn).map(
            (link, index) => (
              <li key={index} className="py-2">
                {link.href ? (
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-500"
                    onClick={toggleMenu}
                  >
                    {link.title}
                    {link.tag && (
                      <span className="badge bg-primary text-secondary ml-2 rounded-full">
                        {link.tag}
                      </span>
                    )}
                  </Link>
                ) : (
                  <a
                    href={`${link.to}`}
                    className="text-gray-300 hover:text-primary-500"
                    onClick={toggleMenu}
                  >
                    {link.title}
                    {link.tag && (
                      <span className="badge bg-primary text-secondary ml-2 rounded-full">
                        {link.tag}
                      </span>
                    )}
                  </a>
                )}
              </li>
            ),
          )}
        </ul>
        <div className="border-t border-gray-700 p-4">
          <h3 className="mb-4 text-sm text-white">
            {isArabic ? "تواصل معنا" : "Connect with us"}
          </h3>
          <div className="flex gap-4">
            {/* Render the social media icons */}
            {socialMedia.map((social, index) =>
              social.href ? (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-primary"
                >
                  {social.icon}
                </a>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
