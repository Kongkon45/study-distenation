import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const WhyStudy = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="grid grid-cols-1 md:grid-cols-6 gap">
          <div className="md:col-span-3">
            <Image
              src="/assets/images/why_study.png"
              alt="why study image"
              width={501}
              height={447}
            />
          </div>
          <div className="md:col-span-3">
            <div>
              <h3 className="text-secondary font_size font-bold text-center md:text-left">
                Why Study <span className="text-primary">in USA?</span>
              </h3>
              <p className="text-base font-normal text-secondary py-[10px] xl:py-[16px] text-center md:text-left">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-
              </p>
              <h6 className="text-xl md:text-2xl font-bold text-secondary text-center md:text-left pb-[10px] xl:pb-[16px]">
                Quick facts
              </h6>
              <ul className="flex flex-col items-center md:items-start text-[10px] sm:text-xs 2xl:text-base font-normal text-secondary text-center md:text-left">
                <li className="flex items-center gap-[10px]">
                  <span>
                    <Image
                      src="/assets/icons/star.png"
                      alt="star icon"
                      width={20}
                      height={20}
                      className="w-[14px] xl:w-[20px] h-[14px] xl:h-[20px]"
                    />
                  </span>
                  USA hosts more than a million international students
                </li>
                <li className="flex items-center gap-[10px] py-[10px] 2xl:py-[16px]">
                  <span>
                    <Image
                      src="/assets/icons/star.png"
                      alt="star icon"
                      width={20}
                      height={20}
                      className="w-[14px] xl:w-[20px] h-[14px] xl:h-[20px]"
                    />
                  </span>
                  Over 25% of world&lsquo;s top 100 universities are in the USA
                </li>
                <li className="flex items-center gap-[10px]">
                  <span>
                    <Image
                      src="/assets/icons/star.png"
                      alt="star icon"
                      width={20}
                      height={20}
                      className="w-[14px] xl:w-[20px] h-[14px] xl:h-[20px]"
                    />
                  </span>
                  Post-study stay back visas (OPT) up to 3 years for STEM
                  programs
                </li>
                <li className="flex items-center gap-[10px] py-[10px] 2xl:py-[16px]">
                  <span>
                    <Image
                      src="/assets/icons/star.png"
                      alt="star icon"
                      width={20}
                      height={20}
                      className="w-[14px] xl:w-[20px] h-[14px] xl:h-[20px]"
                    />
                  </span>
                  Internships (CPT) up to 12 months while studying
                </li>
                <li className="flex items-center gap-[10px]">
                  <span>
                    <Image
                      src="/assets/icons/star.png"
                      alt="star icon"
                      width={20}
                      height={20}
                      className="w-[14px] xl:w-[20px] h-[14px] xl:h-[20px]"
                    />
                  </span>
                  Merit Based & Need Based Scholarships
                </li>
              </ul>
              <div className="group flex justify-center md:justify-start items-center pt-[15px] md:pt-[20px]  2xl:pt-[30px]">
                <button className="flex items-center gap-[10px] text-base md:text-lg font-bold bg-primary text-white group-hover:text-secondary group-hover:bg-white group-hover:border group-hover:border-primary py-[10px] px-[20px] rounded-[6px]">
                See More
                  <span>
                    {/* <Image
                      src="/assets/icons/white_arrow.png"
                      alt="arrow icon"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] group-hover:text-secondary"
                    /> */}
                    <FaArrowRightLong className="group-hover:text-secondary"/>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyStudy;
