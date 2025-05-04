"use client";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronRight } from "react-icons/bs";

export function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const lastSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  const slides = [
    {
      url: "/car1.png",
    },
    {
      url: "/car2.jpeg",
    },
    {
      url: "/car3.jpeg",
    },
    {
      url: "/car4.jpeg",
    },
    {
      url: "/car5.jpeg",
    },
    {
      url: "/car6.jpeg",
    },
  ];
  // return <div className=" group max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
  return (
    <div className="group max-w-[100vw] md:max-w-[100vw] h-[400px] md:h-[780px] w-full relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-lg bg-center bg-cover bg-no-repeat duration-500"
      ></div>
      {/* left arrow */}
      <div className="block md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer">
        <BsChevronCompactLeft
          onClick={prevSlide}
          color="white"
          strokeWidth={1.2}
        />
      </div>
      {/* right arrow */}
      <div className="block md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer">
        <BsChevronRight onClick={lastSlide} color="white" strokeWidth={1.2} />
      </div>
      <div className="flex bg-white justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer mx-1 ${
              currentIndex === slideIndex ? "text-black" : "text-gray-400"
            }`}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
}
