"use client";
import React, { useState } from "react";
import Image from "next/image";

interface GallerySliderProps {
  images: string[]; // Array of image URLs
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle moving to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle moving to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle direct slide selection by indicator
  const selectSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <Image
              width={500}
              height={500}
              src={`data:image/jpeg;base64,${image}`}
              alt={`Slide ${index + 1}`}
              quality={100}
              blurDataURL="data:..."
              placeholder="blur"
              className="h-full object-cover mx-auto"
            />
          </div>
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md"
      >
        &#8594;
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 py-4 gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => selectSlide(index)}
            className={`size-16 ring-2 rounded-sm ${
              currentIndex === index ? "ring-accent-500" : "ring-transparent"
            }`}
          >
            <Image
              src={`data:image/jpeg;base64,${img}`}
              alt={`preview ${index}`}
              width={500}
              height={500}
              quality={100}
              blurDataURL="data:..."
              placeholder="blur"
              className="size-full object-cover aspect-square rounded-sm"
            />{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;
