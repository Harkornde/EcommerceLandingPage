import { images, thumbnail } from "/src/Image_data/image.js";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

function LightBox({ currentIndex, setCurrentIndex, nextSlide, previousSlide }) {
  return (
    <>
      <div className="absolute flex-col top-0 left-0  right-0 bottom-0 flex justify-center items-center z-50 pointer-events-none">
        {/* Light box Image */}
        <div className="relative">
          <button
            onClick={nextSlide}
            className="absolute top-1/2 bottom-1/2 right-0 z-60 cursor-pointer pointer-events-auto -mr-7 h-[60px] "
          >
            <MdNavigateNext
              className="bg-[#FFFFFF] rounded-full p-3"
              size={56}
            />
          </button>
          <button
            onClick={previousSlide}
            className="absolute top-1/2 bottom-0 left-0 z-60 cursor-pointer pointer-events-auto -ml-7  h-7"
          >
            <MdNavigateBefore
              className="bg-[#FFFFFF] rounded-full p-3"
              size={56}
            />
          </button>

          <div className="w-screen h-80 md:w-[550px] md:h-[550px] md:rounded-2xl overflow-hidden pointer-events-auto">
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
                  className="w-full h-full object-cover shrink-0 pointer-events-none"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Light box thumbnails */}
        <div>
          <div className="hidden md:flex gap-[31px] mt-8 pointer-events-auto">
            {thumbnail.map((src, index) => (
              <div
                onClick={() => setCurrentIndex(index)}
                key={index}
                className="group relative w-[88px] h-[88px] rounded-xl cursor-pointer overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                />
                <div
                  className={`absolute inset-0 w-full h-full rounded-xl bg-white transition-all duration-200 border-2 ${
                    index === currentIndex
                      ? "opacity-50 border-[#FF7E1B]"
                      : "opacity-0 border-transparent group-hover:opacity-50 group-hover:border-[#FF7E1B]"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LightBox;
// className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ${
// lightbox ? "scale-100" : "scale-0" // Optional: Add a pop animation
// }`
