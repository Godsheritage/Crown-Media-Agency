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
                                <h2 className="title">Get an in-house content team at a fraction of the cost today</h2>
                                <ul className="list-regular mt-30">
                                    <li>Professionally Certified Editors</li>
                                    <li>Zero extra work from you</li>
                                    <li>Save yourself 100 hours / month</li>
                                </ul>
                                <div className="circle-progress">
                                    {ExperienceProgressData.map(progress =>
                                        <SingleExperience progress={progress} key={progress.id} />
                                    )}
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;