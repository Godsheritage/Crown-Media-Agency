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
import PriceV2 from '../../components/price/PriceV2';
import ContactV1 from '../../components/contact/ContactV1';


import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import AboutV2 from '../../components/about/AboutV2';
import SingleFaqV1 from '../../components/experience/SingleFaqV1';
import Experience from '../../components/experience/Experience';

const Home1 = () => {
    return (
        <>
            <HeaderV1 headerClass="dark" />
            <BannerV1 />
            <AboutV1 />
            <ServicesV1 />
            <ProcessV1 />
            <TestimonialV2 />
            <Experience/>
            <ContactV1 />
            <FooterV1 />
            {/* <TeamV1 /> */}
            {/* <PriceV2/> */}
            {/* <PriceV1 /> */}
            {/* <AboutV2/> */}
            {/* <SingleFaqV1 /> */}
            {/* <WhyChooseUsV1 chooseClass="bg-gray" /> */}
        </>
    );
};

export default Home1;