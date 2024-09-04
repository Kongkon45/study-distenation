import Image from 'next/image';
import React from 'react';

const ourApplicationdata = [
    {
        id : 1,
        img : "/assets/icons/client_profile.png",
        title : "Clients profile review"
    },
    {
        id : 2,
        img : "/assets/icons/onboarding_meeting.png",
        title : "Onboarding meeting"
    },
    {
        id : 3,
        img : "/assets/icons/university_search.png",
        title : "University search"
    },
    {
        id : 4,
        img : "/assets/icons/statement.png",
        title : "Statement of purpose, cv review and edit"
    },
    {
        id : 5,
        img : "/assets/icons/university_shortlist.png",
        title : "University Shortlist"
    },
    {
        id : 6,
        img : "/assets/icons/university.png",
        title : "University application"
    },
    {
        id : 7,
        img : "/assets/icons/arrangin_mock.png",
        title : "Arranging mock interview"
    },
    {
        id : 8,
        img : "/assets/icons/visa.png",
        title : "Visa application for submission"
    },
]

const OurApplication = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='flex flex-col items-center'>
                    <h3 className="text-secondary font_size font-bold text-center md:text-left"> 
                        <span className='text-primary'>Our</span> Application Process
                    </h3>
                    <p className="text-base font-normal text-secondary py-[16px] text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                        <br className='hidden md:block' /> 
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px] lg:gap-[35px]'>
                    {
                        ourApplicationdata?.map((data) => {
                            return (
                                <div key={data?.id} className="group">
                                    <div className="w-[80px] h-[80px] mx-auto my-[50px]">
                                        <Image 
                                            src={data?.img} 
                                            alt={data?.title} 
                                            width={50} 
                                            height={50} 
                                            className='border-dashed  border-2 border-secondary rounded-full p-[12px] w-full h-full transition-all duration-300 ease-in-out group-hover:border-none group-hover:cursor-pointer group-hover:bg-primary group-hover:text-white'
                                        />
                                    </div>
                                    <h6 className='text-lg font-bold text-center  mt-[30px] md:mt-[40px] border border-secondary p-[10px] transition-all duration-300 ease-in-out group-hover:border-primary  '>
                                        {data?.title}
                                    </h6>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default OurApplication;
