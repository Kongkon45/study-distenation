import Image from "next/image";
import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
      <div className="container padding__all">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[20px] md:gap-[50px] 2xl:gap-[68px]">
          <div className="md:col-span-3">
            <div>
              <h3 className="text-secondary font_size font-bold text-center md:text-left">
                Study in <span className="text-primary">USA FAQ&apos;s </span>
              </h3>
              <p className="text-base font-normal text-secondary pt-[20px] text-center md:text-left pb-[20px] md:pb-[25px] lg:pb-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* faq add  */}
              <div className="collapse collapse-plus bg-base-200 cart__bg">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-lg font-bold text-secondary">
                Can you work while studying in the United States?
                </div>
                <div className="collapse-content">
                  <p className="text-base font-normal text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 cart__bg">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg font-bold text-secondary">
                Can you work while studying in the United States?
                </div>
                <div className="collapse-content">
                <p className="text-base font-normal text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 cart__bg">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg font-bold text-secondary">
                Can you work while studying in the United States?
                </div>
                <div className="collapse-content">
                <p className="text-base font-normal text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 cart__bg">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg font-bold text-secondary">
                Can you work while studying in the United States?
                </div>
                <div className="collapse-content">
                <p className="text-base font-normal text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 cart__bg">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg font-bold text-secondary">
                Can you work while studying in the United States?
                </div>
                <div className="collapse-content">
                <p className="text-base font-normal text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="flex items-center ">
            <Image
              src="/assets/images/faq.png"
              alt="faq image"
              width={493}
              height={506}
              className="w-[493px] h-[350px] md:h-[506px]"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
