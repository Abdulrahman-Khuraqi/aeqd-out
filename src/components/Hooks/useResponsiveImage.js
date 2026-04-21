import { useState, useEffect } from 'react';

const useResponsiveImage = (smallImage, bigImage, breakpoint = 400) => {
  const [imageSrc, setImageSrc] = useState(smallImage);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= breakpoint) {
        setImageSrc(smallImage);
      } else {
        setImageSrc(bigImage);
      }
    };

    // Initial check
    updateImage();

    // Add a listener to handle window resizing
    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, [smallImage, bigImage, breakpoint]);

  return imageSrc;
};

export default useResponsiveImage;
