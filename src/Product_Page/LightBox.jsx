import { images, thumbnail } from "/src/Image_data/image.js";

function LightBox({ currentIndex }) {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 pointer-events-none">
        {/* Light box Image */}
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
                  className="w-full h-full object-cover shrink-0 "
                />
              ))}
            </div>
          </div>
        </div>
        {/* Light box thumbnails */}
        <div></div>
      </div>
    </>
  );
}

export default LightBox;