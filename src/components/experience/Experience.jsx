import React from 'react';
import FaqV1Data from '../../jsonData/FaqV1Data.json'
import SingleFaqV1 from './SingleFaqV1';
import ExperienceProgressData from '../../jsonData/ExperienceProgressData.json'
import SingleExperience from './SingleExperience';

const Experience = () => {
    return (
        <>
            <div className="experience-area overflow-hidden default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="experience-style-one">

                                <h3 style={{ fontSize: "3rem" }}>Build a Brand That Brings You Leads <strong>Even When You’re Sleeping</strong></h3>
                                <p style={{ fontWeight: "bold" }}>We script, film, edit, and post it all. You just show up once a month</p>
                                <ul className="list-regular mt-30">
                                    <li>Professionally Certified Editors</li>
                                    <li>Zero extra work from you</li>
                                    <li>Save yourself 100 hours / month</li>
                                </ul>
                                <div className="circle-progress">
                                    {ExperienceProgressData.map(progress =>
                                        <SingleExperience progress={progress} key={progress.id} />
                                    )}

                                    <a className="btn-round-animation" href="tel:+14438069450">
                                        Call Us Now <i className="fa-solid fa-arrow-right"></i>
                                    </a>

                                </div>


                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1">
                            <div className="faq-style-one">
                                <div className="accordion" id="faqAccordion">
                                    {FaqV1Data.map(faq =>
                                        <SingleFaqV1 faq={faq} key={faq.id} />
                                    )}
                                </div>

                            </div>

                        </div>
                        <div>
                            <p style={{ fontWeight: "bold" }} >🛡️  Our No-Risk, Results-First Guarantee
                                We don’t do average. Every video we produce meets a clear standard: it needs to look great, and sound great.

                                If the final product doesn’t hit that bar—ours or yours—we’ll re-shoot, re-edit, or re-publish at no extra cost. No fine print. No delays.

                                You’re happy, or we’re not done. That’s the deal.


                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;