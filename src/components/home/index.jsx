import React from 'react';
import OurApplication from './OurApplication/OurApplication';
import WhyStudy from './WhyStudy/WhyStudy';
import Careers from './Careers/Careers';
import Cost from './Cost/Cost';
import Banner from './Banner/Banner';
import PopularUniversity from './PopularUniversity/PopularUniversity';
import Usa from './Usa/Usa';
import OurBlog from './OurBlog/OurBlog';
import StudentSpeak from './StudentSpeak/StudentSpeak';
import Review from './Review/Review';

const AllHomePageSection = () => {
    return (
        <div>
            
            {/* Banner section  */}
            <section>
                <Banner/>
            </section>

            {/* Our Application section  */}
            <section>
                <OurApplication/>
            </section>

            {/* WhyStudy section  */}
            <section>
                <WhyStudy/>
            </section>

            {/* Careers section  */}
            <section>
                <Careers/>
            </section>

            {/* PopularUniversity section  */}
            <section>
                <PopularUniversity/>
            </section>

            {/* Cost section  */}
            <section>
                <Cost/>
            </section>

            {/* Usa section  */}
            <section>
                <Usa/>
            </section>

            {/* Review section  */}
            <section>
                <Review/>
            </section>

            {/* StudentSpeak section  */}
            <section>
                <StudentSpeak/>
            </section>

            {/* OurBlog section  */}
            <section>
                <OurBlog/>
            </section>
        </div>
    );
};

export default AllHomePageSection;