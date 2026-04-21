import React from "react";
import PropTypes from "prop-types";

const HoverCard = ({ image, title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group w-full h-64 rounded-3xl overflow-hidden shadow-lg cursor-pointer block"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-800 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="px-4 py-2 bg-black bg-opacity-75 rounded">
          <h3 className="text-lg text-center text-white font-bold">{title}</h3>
        </div>
      </div>
    </a>
  );
};

HoverCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HoverCard;
