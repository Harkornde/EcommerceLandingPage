import React, { useState } from "react";
import { images, thumbnail } from "/src/Image_data/image.js";
import next from "/images/icon-next.svg";
import previous from "/images/icon-previous.svg";
import LightBox from "./LightBox";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightbox, openLightBox] = useState(true);

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
    <>
      <div className="relative">
        {/* Moblie slider button */}
        <button
          className="md:hidden absolute left-0 top-0 bottom-0 cursor-pointer z-10"
          onClick={previousSlide}
        >
          <img
            src={previous}
            alt="previous-slider"
            className="bg-gray-50 w-9 h-9 p-2.5 rounded-full ml-4"
          />
        </button>

        {/* Mobile Slider */}
        <div>
          <div className="w-screen h-80 md:w-[445px] md:h-[445px] md:rounded-2xl overflow-hidden">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((imgSrc, index) => (
                <img
                  onClick={() => console.log("Clicked", index)}
                  key={index}
                  src={imgSrc}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Desktop Thumbnail */}
          <div>
            <div className="hidden md:flex gap-[31px] mt-8">
              {thumbnail.map((src, index) => (
                <div
                  onClick={() => console.log("Clicked", index)}
                  key={index}
                  className="group relative w-[88px] h-[88px] rounded-xl cursor-pointer overflow-hidden"
                >
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                  />
                  <div
                    className="absolute inset-0 w-full h-full rounded-xl bg-white 
                     opacity-0 group-hover:opacity-50 transition-opacity border-2 border-transparent group-hover:border-[#FF7E1B]"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="md:hidden absolute right-0 top-0 bottom-0 cursor-pointer"
          onClick={nextSlide}
        >
          <img
            src={next}
            alt="next-slider"
            className="bg-gray-50 w-9 h-9 p-2.5 rounded-full mr-4"
          />
        </button>
      </div>

      {/* LightBox */}
      <div>
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
            lightbox ? "opacity-75" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => openLightBox(false)}
        ></div>
        {lightbox && <LightBox currentIndex={currentIndex} />}
      </div>
    </>
  );
};

export default ImageSlider;
