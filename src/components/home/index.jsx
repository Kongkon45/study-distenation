import React from 'react';
import OurApplication from './OurApplication/OurApplication';
import WhyStudy from './WhyStudy/WhyStudy';
import Careers from './Careers/Careers';
import Cost from './Cost/Cost';

const AllHomePageSection = () => {
    return (
        <div>
            
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

            {/* Cost section  */}
            <section>
                <Cost/>
            </section>
        </div>
    );
};

export default AllHomePageSection;