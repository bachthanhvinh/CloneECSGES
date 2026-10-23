import { useState, useEffect } from "react";
import { slidesData } from "../../../apis/data";

export const SlideBg = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <section className="relative w-full max-w-full overflow-hidden group  shadow-lg">
      <div className="relative w-full ">
        <img
          src={slidesData[currentIndex].img}
          alt={slidesData[currentIndex].caption}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
      </div>

      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        ❯
      </button>

      <div className="absolute left-1/2  bottom-0 flex justify-center gap-2 my-4">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 bg-[#E95327]"
                : "w-3  bg-transparent border border-white hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SlideBg;
