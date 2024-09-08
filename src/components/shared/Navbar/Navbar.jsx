"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverStudy, setHoverStudy] = useState(true);
  const [hoverGallery, setHoverGallery] = useState(true);

  return (
    <div className="sticky top-0 z-50">
      <div className="nav__bg py-4">
        <nav className="container">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left side: Logo */}
            <div className="text-white text-2xl font-bold">
              <Link href="/">
                <Image
                  src="/assets/images/nav_logo.png"
                  alt="nav logo"
                  width={143}
                  height={41}
                />
              </Link>
            </div>

            {/* Center: Menu Items (hidden on small screens) */}
            <div className="hidden xl:flex space-x-8">
              <Link
                href="#"
                className="text-base 2xl:text-lg font-bold text-secondary hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-base 2xl:text-lg font-bold text-secondary hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-base 2xl:text-lg font-bold flex items-center text-secondary hover:text-primary"
                onMouseEnter={() => setHoverStudy(false)}
                onMouseLeave={() => setHoverStudy(true)}
              >
                Study Distention {hoverStudy ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </Link>
              <Link
                href="#"
                className="text-base 2xl:text-lg font-bold flex items-center text-secondary hover:text-primary"
                onMouseEnter={()=>setHoverGallery(false)}
                onMouseLeave={()=>setHoverGallery(true)}
              >
                Gallery { hoverGallery ? <IoIosArrowDown /> : <IoIosArrowUp /> } 
              </Link>
              <Link
                href="#"
                className="text-base 2xl:text-lg font-bold text-secondary hover:text-primary"
              >
                Blogs
              </Link>
              <Link
                href="#"
                className="text-base 2xl:text-lg font-bold text-secondary hover:text-primary"
              >
                Contact Us
              </Link>
            </div>

            {/* Right side: Button */}
            <div className="hidden md:block">
              <div className="flex justify-center items-center">
                <button className="flex items-center gap-[8px] text-base md:text-lg font-bold text-primary py-[10px] px-[16px] border border-primary bg-white hover:bg-primary hover:text-secondary rounded-[6px]">
                  Enquire Now
                  <span>
                    {/* <Image
                      src="/assets/icons/orange_arrow.png"
                      alt="arrow icon"
                      width={24}
                      height={24}
                    /> */}
                    <FaArrowRightLong />
                  </span>
                </button>
              </div>
            </div>

            {/* Small Device Menu Icon */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <FiX className="w-6 h-6 text-primary" />
                ) : (
                  <FiMenu className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="xl:hidden mt-4 space-y-6">
              <Link
                href="#"
                className="block text-base 2xl:text-lg font-bold text-secondary hover:text-primary py-2"
              >
                Home
              </Link>
              <Link
                href="#"
                className="block text-base 2xl:text-lg font-bold text-secondary hover:text-primary py-2"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="block text-base 2xl:text-lg font-bold flex items-center text-secondary hover:text-primary py-2"
                onMouseEnter={()=> setHoverStudy(false)}
                onMouseLeave={()=> setHoverStudy(true)}
              >
                Study Distention {hoverStudy ? <IoIosArrowDown/> : <IoIosArrowUp/>}
                
              </Link>
              <Link
                href="#"
                className="block text-base 2xl:text-lg font-bold flex items-center text-secondary hover:text-primary py-2"
                onMouseEnter={()=> setHoverGallery(false)}
                onMouseLeave={()=> setHoverGallery(true)}
              >
                Gallery {hoverGallery ? <IoIosArrowDown/> : <IoIosArrowUp/>}
                
              </Link>
              <Link
                href="#"
                className="block text-base 2xl:text-lg font-bold text-secondary hover:text-primary py-2"
              >
                Blogs
              </Link>
              <Link
                href="#"
                className="block text-base 2xl:text-lg font-bold text-secondary hover:text-primary py-2"
              >
                Contact Us
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
