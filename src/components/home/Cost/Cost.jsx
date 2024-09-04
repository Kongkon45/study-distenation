import Image from "next/image";
import React from "react";

const Cost = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="grid grid-cols-1 md:grid-cols-6 gap">
          <div className="md:col-span-3">
            <Image
              src="/assets/images/cost.png"
              alt="cost image"
              width={501}
              height={447}
            />
          </div>
          <div className="md:col-span-3">
            <div>
              <h3 className="text-primary font_size font-bold text-center md:text-left">
                Cost <span className="text-secondary">of education</span>
              </h3>
              <p className="text-base font-normal text-secondary py-[16px] text-center md:text-left">
                In the U.S., tuition fees vary based on the state, the
                university funding model, and the student&apos;s country of
                origin. So, listing an average is a rather difficult task.
                However, thanks to the folks at College Board, they&apos;ve
                rendered an estimate of last year&apos;s average tuition costs,
                which will roughly reflect the next few years.
              </p>
              <ul className="list-disc list-inside text-sm md:text-base font-normal text-secondary text-center md:text-left">
                <li className="hover:text-primary hover:cursor-pointer">Total Expenses 41535</li>
                <li className="py-[6px] hover:text-primary hover:cursor-pointer">
                  Tuition Fees for one-year (Indicative) 25000
                </li>
                <li className="hover:text-primary hover:cursor-pointer">Living and Accommodation 15000</li>
                <li className="py-[6px] hover:text-primary hover:cursor-pointer">Airfare from India to USA 1000</li>
                <li className="hover:text-primary hover:cursor-pointer">Visa Fees (Visa & SEVIS) 535</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cost;
