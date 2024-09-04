import Image from "next/image";
import React from "react";
import "./OurBlog.css";
const OurBlogData = [
  {
    id: 1,
    img: "/assets/images/blog1.png",
    title: "Emotional Intelligence in Education Building",
    date: "July 24, 2024",
    calendar: "/assets/icons/calender.png",
    user: "/assets/icons/user.png",
    userName: "Back Theme",
    comment: "/assets/icons/comment.png",
    commentCount: "25 Comments",
  },
  {
    id: 2,
    img: "/assets/images/blog2.png",
    title: "Emotional Intelligence in Education Building",
    date: "July 24, 2024",
    calendar: "/assets/icons/calender.png",
    user: "/assets/icons/user.png",
    userName: "Back Theme",
    comment: "/assets/icons/comment.png",
    commentCount: "25 Comments",
  },
  {
    id: 3,
    img: "/assets/images/blog3.png",
    title: "Emotional Intelligence in Education Building",
    date: "July 24, 2024",
    calendar: "/assets/icons/calender.png",
    user: "/assets/icons/user.png",
    userName: "Back Theme",
    comment: "/assets/icons/comment.png",
    commentCount: "25 Comments",
  },
];

const OurBlog = () => {
  return (
    <div className="blog__bg">
      <div className="container py-[30px] md:py-[35px] lg:py-[40px] xl:py-[45px] 2xl:py-[50px]">
        {/* title  */}
        <div className="flex flex-col items-center">
          <h3 className="text-secondary font_size font-bold text-center md:text-left">
            <span className="text-primary">Our</span> Latest Blog
          </h3>
          <p className="text-base font-normal text-secondary pt-[16px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod <br className="hidden md:block" /> tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        {/* cart  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[24px] py-[30px] md:py-[35px] lg:py-[40px] xl:py-[45px] 2xl:py-[50px]">
          {OurBlogData?.map((data) => {
            return (
              <div key={data?.id} className="">
                {/* image */}
                <div>
                  <Image
                    src={data?.img}
                    alt={data?.title}
                    width={200}
                    height={197}
                    className="w-full h-[197px] mx-auto"
                  />
                </div>
                {/* contents  */}
                <div className="bg-white py-[30px] px-[15px]">
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src={data?.calendar}
                      alt={data?.date}
                      width={24}
                      height={24}
                    />
                    <p className="text-sm xl:text-base font-normal text-secondary">{data?.date}</p>
                  </div>
                  <h6 className="text-xl md:text-2xl text-secondary font-bold pt-[10px] md:pt-[14px] pb-[30px] md:pb-[35px] lg:pb-[40px]">{data?.title}</h6>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-[5px]">
                      <Image
                        src={data?.user}
                        alt={data?.name}
                        width={24}
                        height={24}
                      />
                      <p className="text-sm xl:text-base font-normal text-secondary">{data?.date}</p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <Image
                        src={data?.comment}
                        alt={data?.commentCount}
                        width={24}
                        height={24}
                      />
                      <p className="text-sm xl:text-base font-normal text-secondary">{data?.commentCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* button  */}
        <div className="flex justify-center items-center pt-[15px] md:pt-[20px] lg:pt-[25px] xl:pt-[30px]">
                <button className="flex items-center gap-[10px] text-base md:text-lg font-bold text-primary py-[10px] px-[20px] border border-primary bg-white">
                Browse More Blog
                  <span>
                    <Image
                      src="/assets/icons/orange_arrow.png"
                      alt="arrow icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </button>
              </div>
      </div>
    </div>
  );
};

export default OurBlog;
