import Image from 'next/image';
import React from 'react';

const Careers = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-6 gap'>
                    <div className='md:col-span-3'>
                        <div>
                            <h3 className='text-primary font_size font-bold text-center md:text-left'>Careers <span className='text-secondary'>& Industry</span></h3>
                            <p className='text-base font-normal text-secondary pt-[6px] text-center md:text-left'>One of the most technologically powerful and dynamic countries, USA is the largest & most dominant economy globally. Sectors that empower this world&apos;s most productive economy include Healthcare, Technology, Construction, Retail, Manufacturing, Finance & Insurance and Real Estate. Top jobs with high remuneration prospects for international students include Medicine, Computer & Information Systems Managers, Architectural & Engineering Managers and Marketing & Financial Managers. Standard of living in the USA is among the highest in the world with high per capita income. This nation performs very well in many measures of well-being such as income & wealth, health status, jobs and earnings, education & skills and environmental quality.</p>
                            <div className='flex justify-center md:justify-start items-center pt-[15px] md:pt-[20px] lg:pt-[25px] xl:pt-[30px]'>
                                <button className='flex items-center gap-[10px] text-base md:text-lg font-bold text-secondary py-[10px] px-[20px] border-[1.5px] border-primary'>Read More <span><Image src="/assets/icons/black_arrow.png" alt='arrow icon' width={24} height={24}/></span></button>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-3'>
                        <Image src="/assets/images/careers.png" alt='careers image' width={501} height={447}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;