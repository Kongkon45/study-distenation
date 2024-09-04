import Image from "next/image";
import React from "react";
import "./Review.css";

const reviewData = [
  {
    id: 1,
    para: "We are the representatives of more than 30+ universities in Australian countries and our admission",
    img: "/assets/images/lisa1.png",
    quote: "/assets/icons/left_quote.png",
    star: "/assets/images/five_star.png",
    name: "Lisa Dowen",
    status: "Student",
  },
  {
    id: 2,
    para: "We are the representatives of more than 30+ universities in Australian countries and our admission",
    img: "/assets/images/lisa2.png",
    quote: "/assets/icons/left_quote.png",
    star: "/assets/images/five_star.png",
    name: "Lisa Dowen",
    status: "Student",
  },
  {
    id: 3,
    para: "We are the representatives of more than 30+ universities in Australian countries and our admission",
    img: "/assets/images/lisa3.png",
    quote: "/assets/icons/left_quote.png",
    star: "/assets/images/five_star.png",
    name: "Lisa Dowen",
    status: "Student",
  },
];

const Review = () => {
  return (
    <div>
      <div className="container padding__top">
        <div>
          <h3 className="text-primary font_size font-bold text-center md:text-left">
            What&apos;s <span className="text-secondary">Our student say</span>
          </h3>
          <p className="text-base font-normal text-secondary py-[16px] text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor <br className="hidden md:block" /> incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        {/* cart  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px] pt-[30px] md:pt-[35px] lg:pt-[40px] xl:pt-[45px] 2xl:pt-[50px]">
            {
                reviewData?.map((data)=>{
                    return <div key={data?.id} className="review__cart py-[30px] px-[20px]">
                        <Image src={data?.quote} alt="quote icon" width={32} height={32}/>
                        <p className="text-base font-normal py-[10px] text-secondary">{data?.para}</p>
                        <Image src={data?.star} alt="five star icon" width={104} height={16}/>
                        <div className="flex items-center gap-[10px] md:gap-[12px] pt-[20px]">
                        <Image src={data?.img} alt="user icon" width={50} height={50}/>
                        <div className="">
                            <h6 className="text-lg font-bold text-secondary">{data?.name}</h6>
                            <p className="text-base font-normal text-secondary pt-[1px]">{data?.status}</p>
                        </div>
                        </div>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Review;
