import React from "react";

import "./StudentSpeak.css";

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
]

const StudentSpeak = () => {
  return (
    <div className="padding__top">
      <div className="studentSpeak__bg ">
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
      </div>
    </div>
  );
};

export default StudentSpeak;
