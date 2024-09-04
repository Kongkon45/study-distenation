"use client"
import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopComponent = () => {
    return (
        <div>
      <ScrollToTop
        className="flex justify-center items-center"
        smooth
        component={<FaArrowUp />}
      />
    </div>
    );
};

export default ScrollToTopComponent;