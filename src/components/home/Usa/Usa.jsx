
import React from 'react';

const UsaData = [
    {
        id : 1,
        title : "Course Duration",
        desc : "4 Years (Bachelor's)",
        desc1 : "2 Years (Master's)"
    },
    {
        id : 2,
        title : "Intake",
        desc : "January, May,",
        desc1 : "September"
    },
    {
        id : 3,
        title : "Application Fee",
        desc : "40 To 200 (USD)"
    },
    {
        id : 4,
        title : "Requirements",
        desc : "GRE/GMAT + IELTS/TOEFL/PTE, Academics-Above 55%"
    },
    {
        id : 5,
        title : "Language Proficiency",
        desc : "IELTS- 6+, TOEFL-70+",
        desc1 : "Duolingo-90+, PTE-50+"
    },
    {
        id : 6,
        title : "Tution Fee (Yearly)",
        desc : "10000 To 55000 (USD)"
    },
    {
        id : 7,
        title : "Living Cost (Yearly)",
        desc : "10000 To 18000 (USD)"
    },
    {
        id : 8,
        title : "Visa Application",
        desc : "160(USD)",
        desc1 : "SEVIS Fee 350 (USD)"
    },
    {
        id : 9,
        title : "Air Ticket",
        desc : "100000 To 150000 (BDT)"
    },
    {
        id : 10,
        title : "Processing Time",
        desc : "9-12 Months"
    },
    {
        id : 11,
        title : "Part Time Work",
        desc : "20 Hrs (per Week)"
    },
    {
        id : 12,
        title : "Post Study Work Permit",
        desc : "12 Month For All Programs, 12 Month+ 24 Months Extension For STEM (Science, Tech, Engg & Maths"
    },
]

const Usa = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='flex flex-col items-center pb-[30px] md:pb-[35px] lg:pb-[40px] xl:pb-[45px] 2xl:pb-[48px]'>
                    <h3 className="text-secondary font_size font-bold text-center md:text-left"> 
                        <span className='text-primary'>USA </span> At a GlanceOur
                    </h3>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[6px]'>
                    {
                        UsaData?.map((data) => {
                            return (
                                <div key={data?.id}>
                                    
                                    <h6 className='text-base md:text-lg font-bold text-white text-center px-[10px] h-[50px] bg-primary flex justify-center items-center'>
                                        {data?.title}
                                    </h6>
                                    <div className='px-[10px] bg-white h-[150px] md:h-[120px] flex flex-col items-center justify-center'>
                                    <p className='text-base font-normal text-secondary text-center'>
                                        {data?.desc}
                                    </p>
                                    <p className='text-base font-normal text-secondary text-center'>
                                        {data?.desc1}
                                    </p>
                                    </div>
                                    
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Usa;
