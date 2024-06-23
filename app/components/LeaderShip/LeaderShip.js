'use client';
import { useState } from 'react';
import { imgData, leadershipData } from '@/app/Utilities/data';
import Image from 'next/image';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa6';

export default function Leadership() {
  return (
    <div className="h-full py-16 md:py-20">
      <h1 className="mb-8 text-center text-5xl font-light text-gray-text md:mb-12">
        {leadershipData.heading}
      </h1>
      <div className="grid grid-cols-1 md:mx-auto md:w-11/12 md:grid-cols-2 md:gap-4 lg:w-5/6">
        <div className="col-span-1">
          <Content data={leadershipData.message} />
        </div>
        <div className="col-span-1">
          <ImageSliderContainer>
            <ImgaeSlider imgData={imgData} />
          </ImageSliderContainer>
        </div>
      </div>
    </div>
  );
}

function Content({ data }) {
  return (
    <div>
      <h1 className="ms-2 text-lg font-light text-gray-text md:ms-0 md:text-base lg:text-lg">
        {data}
      </h1>
    </div>
  );
}

function ImageSliderContainer({ children }) {
  return <div className="mx-auto max-w-2xl">{children}</div>;
}

function ImgaeSlider({ imgData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imgData.length) % imgData.length,
    );
  };

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imgData.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 p-2 text-white"
        onClick={prevSlide}
      >
        <FaLessThan className="text-4xl" />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 p-2 text-white"
        onClick={nextSlide}
      >
        <FaGreaterThan className="text-4xl font-light" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
        {imgData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
