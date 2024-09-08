import Image from 'next/image';
import React from 'react';
import "./PopularUniversity.css";
import { FaArrowRightLong } from "react-icons/fa6";

const popularUniversityData = [
    {
        id : 1,
        img : "/assets/images/university1.png",
        title : "University of Connecticut, Connecticut (Public Ivy)"
    },
    {
        id : 2,
        img : "/assets/images/university2.png",
        title : "Arizona State University, Phoenix, Arizona"
    },
    {
        id : 3,
        img : "/assets/images/university3.png",
        title : "University of California, Riverside, California"
    },
    {
        id : 4,
        img : "/assets/images/university2.png",
        title : "Arizona State University, Phoenix, Arizona"
    },
    {
        id : 5,
        img : "/assets/images/university3.png",
        title : "University of California, Riverside, California"
    },
    {
        id : 6,
        img : "/assets/images/university1.png",
        title : "University of Connecticut, Connecticut (Public Ivy)"
    }
]

const PopularUniversity = () => {
    return (
        <div>
            <div className='container  py-[30px] md:py-[35px] lg:py-[40px] xl:py-[45px] 2xl:py-[50px] popularUniversity__bg'>
                {/* title  */}
                <div className='flex flex-col items-center'>
                    <h3 className="text-white font_size font-bold text-center md:text-left"> 
                        <span className='text-primary'>Popular </span> Universities
                    </h3>
                </div>
                {/* cart  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-[20px] lg:gap-[24px] py-[30px] md:py-[35px] lg:py-[40px] xl:py-[45px] 2xl:py-[50px]'>
                    {
                        popularUniversityData?.map((data) => {
                            return (
                                <div key={data?.id} className='bg-white py-[30px] md:py-[35px] xl:py-[40px] px-[5px]'>
                                    <div>
                                        <Image 
                                            src={data?.img} 
                                            alt={data?.title} 
                                            width={70} 
                                            height={70} 
                                             className="w-[70px] h-[70px] mx-auto"
                                        />
                                    </div>
                                    <h6 className='text-lg text-secondary font-bold text-center pt-[12px]'>
                                        {data?.title}
                                    </h6>
                                </div>
                            );
                        })
                    }
                </div>
                {/* button  */}
                <div className="group flex justify-center items-center">
                <button className="flex items-center gap-[10px] text-base md:text-lg font-bold text-white py-[10px] px-[20px] border border-white group-hover:bg-primary rounded-[6px] group-hover:border-none">
                  Read More{" "}
                  <span>
                    {/* <Image
                      src="/assets/icons/white_arrow.png"
                      alt="arrow icon"
                      width={24}
                      height={24}
                    /> */}
                    <FaArrowRightLong/>
                  </span>
                </button>
              </div>
            </div>
        </div>
    );
};

export default PopularUniversity;
