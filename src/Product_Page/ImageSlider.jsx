import React, { useState } from "react";
// import imageProductThumb1 from "/public/images/image-product-1-thumbnail.jpg";
import imageProduct1 from "/images/image-product-1.jpg";
// import imageProductThumb2 from "/public/images/image-product-2-thumbnail.jpg";
import imageProduct2 from "/images/image-product-2.jpg";
// import imageProductThumb3 from "/public/images/image-product-3-thumbnail.jpg";
import imageProduct3 from "/images/image-product-3.jpg";
// import imageProductThumb4 from "/public/images/image-product-4-thumbnail.jpg";
import imageProduct4 from "/images/image-product-4.jpg";
import next from "/images/icon-next.svg";
import previous from "/images/icon-previous.svg";

const ImageSlider = () => {
  const images = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <button
        className="md:hidden absolute left-0 top-0 bottom-0"
        onClick={previousSlide}
      >
        <img
          src={previous}
          alt="previous-slider"
          className="bg-gray-50 w-9 h-9 p-2.5 rounded-full ml-4"
        />
      </button>
      <div>
        {images.length > 0 && (
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-screen h-80 md:w-[445px] md:h-[445px] md:rounded-2xl object-cover"
          />
        )}
        <div></div>
      </div>
      <button
        className="md:hidden absolute right-0 top-0 bottom-0"
        onClick={nextSlide}
      >
        <img
          src={next}
          alt="next-slider"
          className="bg-gray-50 w-9 h-9 p-2.5 rounded-full mr-4"
        />
      </button>
    </div>
  );
};

export default ImageSlider;
