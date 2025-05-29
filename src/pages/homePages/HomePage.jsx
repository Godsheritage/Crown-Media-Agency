import React from 'react';
import BannerV1 from '../../components/banner/BannerV1';
import ServicesV1 from '../../components/services/ServicesV1';
import AboutV1 from '../../components/about/AboutV1';
import ProcessV1 from '../../components/process/ProcessV1';
import ProjectV1 from '../../components/project/ProjectV1';
import WhyChooseUsV1 from '../../components/whyChoose/WhyChooseUsV1';
import TeamV1 from '../../components/team/TeamV2';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import BlogV1 from '../../components/blog/BlogV1';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV1 from '../../components/header/HeaderV1';
import PriceV1 from '../../components/price/PriceV1';
import ContactV1 from '../../components/contact/ContactV1';


import TestimonialV2 from '../../components/testimonial/TestimonialV2';

const Home1 = () => {
    return (
        <>
            <HeaderV1 headerClass="dark" />
            <BannerV1 />
            <ServicesV1 />
            <AboutV1 />
            <ProcessV1 />
            {/* <WhyChooseUsV1 chooseClass="bg-gray" /> */}
            {/* <TeamV1 /> */}
            {/* <TestimonialV2 /> */}
            <PriceV1 />
            <ContactV1 />
            <FooterV1 />
        </>
    );
};

export default Home1;