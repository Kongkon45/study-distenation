"use client"
import React from "react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./StudentSpeak.css";
import Image from "next/image";
import { SliderButton } from "./SliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const studentsData = [
    {
        id : 1,
        img : "/assets/images/rashmi1.png",
        name :"Rashmi Borah",
        location : "Northeastern University, Boston"
    },
    {
        id : 2,
        img : "/assets/images/rashmi2.png",
        name :"Rashmi Borah",
        location : "Northeastern University, Boston"
    },
    {
        id : 3,
        img : "/assets/images/rashmi3.png",
        name :"Rashmi Borah",
        location : "Northeastern University, Boston"
    },
    {
        id : 4,
        img : "/assets/images/rashmi1.png",
        name :"Rashmi Borah",
        location : "Northeastern University, Boston"
    },
    {
        id : 5,
        img : "/assets/images/rashmi2.png",
        name :"Rashmi Borah",
        location : "Northeastern University, Boston"
    },
    {
        id : 6,
        img : "/assets/images/rashmi3.png",
        name :"Rashmi Borah",
        location : "Northeastern University, Boston"
    },
]

const StudentSpeak = () => {
  return (
    <div className="padding__top ">
      <div className="studentSpeak__bg container">
        
        <div className="h-full flex flex-col justify-center items-center">
          <h3 className="text-primary font_size font-bold text-center md:text-left">
            <span className="text-white">Student&apos;s </span> Speak
          </h3>
          <p className="text-base font-normal text-white pt-[20px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor
            <br className="hidden md:block" />
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="-mt-[100px]">
           {/* ==================== swiper slider ================ */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={breakpoints}
          spaceBetween={12}
        >
          {studentsData.map((slideInfo, index) => (
            <SwiperSlide key={index} className={`!h-auto !md:h-full`}>
              <div className="w-full !h-full ">
                <div className="p-[20px] md:p-[24px] bg-white">
                  <Image src={slideInfo?.img} alt={slideInfo?.name} width={400} height={200} className="w-[400px] h-[200px]"/>
                  <h4 className="text-2xl font-bold text-secondary pt-[20px] md:pt-[24px]">
                    {slideInfo?.name}
                  </h4>
                  <p className="text-base text-secondary font-normal pt-[8px]">
                    {slideInfo?.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="py-[30px] md:py-[35px] lg:py-[40px] xl:py-[45px] 2xl:py-[50px]">
          <SliderButton/>
          </div>
          
        </Swiper>
        </div>
       
      </div>
    </div>
  );
};

export default StudentSpeak;
