"use client";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopComponent = () => {
  return (
    //     <div>
    //   <ScrollToTop
    //     className="flex justify-center items-center hover:bg-transparent border-2 border-[#3498db]     hover:text-[#3498db]"
    //     smooth
    //     component={<FaArrowUp/>}
    //   />
    // </div>
    
    <div>
      <ScrollToTop
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          border: "2px solid #3498db",
          color: "#3498db",
        }}
        smooth
        component={<FaArrowUp />}
        className="hover:bg-black hover:text-white"
      />
    </div>
  );
};

export default ScrollToTopComponent;
