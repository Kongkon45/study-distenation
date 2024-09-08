import Image from "next/image";
import React from "react";
import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-secondary container footer__all">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-10 gap-[20px] md:gap-[100px]">
          <div className="md:col-span-2 lg:col-span-3">
            <Link href="/">
              <Image
                src="/assets/images/footer_logo.png"
                alt="footer logo"
                width={207}
                height={59}
                className="w-[207px] h-[59px] mx-auto md:mx-0"
              />
            </Link>
            <p className="text-sm md:text-base category__color font-normal pt-[20px] md:pt-[25px] lg:pt-[30px] text-center md:text-left">
              Travel Blog Elementor Template Kit. Powered by Design8. All rights
              reserved.
            </p>
            {/* social icons  */}
            <div className="flex items-center justify-center md:justify-start gap-[10px] md:gap-[14px] pt-[16px] md:pt-[20px]">
              <Image
                src="/assets/icons/facebook.png"
                alt="social icon"
                width={24}
                height={24}
              />
              <Image
                src="/assets/icons/instragram.png"
                alt="social icon"
                width={24}
                height={24}
              />
              <Image
                src="/assets/icons/whatsapp.png"
                alt="social icon"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-2">
            <h6 className="text-lg font-bold text-white text-center md:text-left">
              Category
            </h6>
            <ul className="pt-[20px] md:pt-[25px] lg:pt-[30px] category__color text-center md:text-left">
              <li className="text-sm md:text-base font-normal">Immigration</li>
              <li className="text-sm md:text-base font-normal py-[12px] md:py-[15px]">
                Study Abroad
              </li>
              <li className="text-sm md:text-base font-normal">
                Uncategorized
              </li>
              <li className="text-sm md:text-base font-normal py-[12px] md:py-[15px]">
                Scholarship
              </li>
              <li className="text-sm md:text-base font-normal">News</li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-2">
            <h6 className="text-lg font-bold text-white text-center md:text-left">
              Latest Post
            </h6>
            <ul className="pt-[20px] md:pt-[25px] lg:pt-[30px] category__color text-center md:text-left">
              <li className="text-sm md:text-base font-normal">
                Study in China
              </li>
              <li className="text-sm md:text-base font-normal py-[12px] md:py-[15px]">
                ulbright Scholarships in China
              </li>
              <li className="text-sm md:text-base font-normal">
                How to Apply to Foreign Universities
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <h6 className="text-lg font-bold text-white text-center md:text-left">
              Contact Us
            </h6>
            <ul className="pt-[20px] md:pt-[25px] lg:pt-[30px] category__color text-center md:text-left">
              <li className="flex items-start justify-center md:justify-start gap-[10px] text-sm md:text-base font-normal">
                <Image
                  src="/assets/icons/map.png"
                  alt="map icon"
                  width={24}
                  height={24}
                  className="pt-[5px]"
                />{" "}
                <Link className="" rel="nofollow" target="_blank" href="locatioin : Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212, (Near American Embassy)y">
                <span>
                  Kha-12/2(4th floor), Pragati Sarani,{" "}
                  <br className="block md:hidden" /> Gulshan, Dhaka-1212,{" "}
                  <br className="block md:hidden" /> (Near American Embassy)
                </span>
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-[10px] text-sm md:text-base font-normal py-[12px] md:py-[15px]">
                <Image
                  src="/assets/icons/phone.png"
                  alt="phone icon"
                  width={24}
                  height={24}
                />{" "}
                <Link rel="nofollow" target="_blank" href="tel : +880 1607-002687"><span>+880 1607-002687</span></Link>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-[10px] text-sm md:text-base font-normal">
                <Image
                  src="/assets/icons/email.png"
                  alt="email icon"
                  width={24}
                  height={24}
                />{" "}
                <Link className="" href="email : info@northwayglobal.com.bd" rel="nofollow" target="_blank">
                <span>info@northwayglobal.com.bd</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__top">
          <div className="w-full border-dashed  border border-bottom__footer__color " />
        </div>

        {/* footer bottom  */}
        <div className="footer__top">
          <p className="bottom__footer__color text-center">
            Designed and Developed By Ethical Den
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
