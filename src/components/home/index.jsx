import React from 'react';
import OurApplication from './OurApplication/OurApplication';
import WhyStudy from './WhyStudy/WhyStudy';
import Careers from './Careers/Careers';
import Cost from './Cost/Cost';
import Banner from './Banner/Banner';
import PopularUniversity from './PopularUniversity/PopularUniversity';

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
        </div>
    );
};

export default AllHomePageSection;