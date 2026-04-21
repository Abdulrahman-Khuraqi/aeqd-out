import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-900 py-10 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo Section */}
        <div className="mb-8 md:mb-0">
          <img src="/images/logo.webp" alt="KMI Logo" className="w-32 mb-2" />
          <p className="text-teal-500 font-bold text-lg">MARKETING SOLUTIONS</p>
        </div>

        {/* Navigation Links */}
        <div className="text-white text-center md:text-left mb-8 md:mb-0">
          <p className="mb-4 cursor-pointer hover:text-teal-500">من نحن</p>
          <p className="mb-4 cursor-pointer hover:text-teal-500">خدماتنا</p>
          <p className="cursor-pointer hover:text-teal-500">أعمالنا</p>
        </div>

        {/* Contact Section */}
        <div className="text-white text-center md:text-right">
          <h3 className="text-xl font-semibold mb-4">تواصل معنا</h3>
          <div className="flex items-center justify-center md:justify-end mb-4">
            <img src="/images/icons/phone.webp" alt="Phone Icon" className="w-5 h-5 mr-2" />
            <p>+966509211666</p>
          </div>
          <div className="flex items-center justify-center md:justify-end mb-4">
            <img src="/images/icons/email.webp" alt="Email Icon" className="w-5 h-5 mr-2" />
            <p>info@kmiksa.com</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-white hover:text-teal-500">
              <img src="/images/icons/twitter.webp" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-teal-500">
              <img src="/images/icons/linkedin.webp" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-teal-500">
              <img src="/images/icons/facebook.webp" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-teal-500">
              <img src="/images/icons/instagram.webp" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-teal-500">
              <img src="/images/icons/snapchat.webp" alt="Snapchat" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-teal-500">
              <img src="/images/icons/tiktok.webp" alt="TikTok" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
