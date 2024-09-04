"use client";

import { useSwiper } from "swiper/react";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export const SliderButton = () => {
  const swiper = useSwiper();

  return (
    <div>
      <>
      <div className="flex justify-center lg:gap-5 gap-3">
            <button
              onClick={() => swiper.slideNext()}
              className="p-3 rounded-full border-2 text-primary hover:text-white hover:bg-primary border-primary"><FaArrowLeftLong />
            </button>
            <button
              onClick={() => swiper.slidePrev()}
              className="text-white hover:text-primary hover:bg-white border-2 p-3 bg-primary rounded-full border-primary"><FaArrowRightLong/>
            </button>
          </div>
      </>
    </div>
  );
};