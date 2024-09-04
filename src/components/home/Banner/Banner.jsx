import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner__bg container flex items-center">
        <div className="w-full text-white md:flex md:justify-between ">
          <h1 className="font_size font-bold text-center md:text-left ">Study InUSA</h1>
          <p className="text-base font-normal text-center md:text-left pt-[10px]">Home /Study Distention/USA</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
