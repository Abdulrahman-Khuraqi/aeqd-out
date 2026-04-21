import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";
import SocialMediaIcons from '@/components/common/SocialMediaIcons'; // Import the icons data

const FooterV28 = ({ logoSrc ='/images/logo/logo.webp' }) => {
    const socialLinks = SocialMediaIcons(); // Fetch social links here
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-16">
          <Link href={'/'}  aria-label="Go to homepage">
              <Image
                src={logoSrc}
                alt={'logo'}
                width={310}
                height={120}
                className="mx-auto"
              />
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex mb-16">
          {socialLinks.map((link, index) => (
              <a key={index} href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-all px-3"
                aria-label={link.label}
              >
                {link.icon}
              </a>
          ))}
        </div>
        <hr className="border-secondary-400 w-full my-4 md:my-4" />

        {/* Footer Text */}
        <div className="text-center text-gray-400 text-sm">
          <p>© 2024 لينكوم | جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

FooterV28.propTypes = {
  logoSrc: PropTypes.string.isRequired, // Logo image URL or path
  logoAlt: PropTypes.string.isRequired, // Alternative text for the logo
  logoHref: PropTypes.string.isRequired, // Link for the logo (e.g., homepage)
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default FooterV28;
