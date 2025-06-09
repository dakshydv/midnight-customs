"use client";
import { useState, useEffect } from "react";

export function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "/work12.jpg",
    },
    {
      url: "/truck.jpg",
    },
    {
      url: "/work9.jpeg",
    },
    // {
    //   url: "/honda.jpg",
    // },
    {
      url: "/work11.jpg",
    },
    {
      url: "/work15.jpg",
    },
    {
      url: "/work10.jpeg",
    },
    {
      url: "/work4.jpg",
    },
  ];

  // Auto swipe effect - run every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="group max-w-[100vw] md:max-w-[100vw] h-[400px] md:h-[780px] w-full relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-lg bg-center bg-cover bg-no-repeat duration-500"
      ></div>

      <div className="flex bg-white justify-center py-2">
        {slides.map((slide, slideIndex: number) => (
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
