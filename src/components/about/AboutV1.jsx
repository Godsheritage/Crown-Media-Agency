import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import Animate from '../animation/Animate';

const AboutV1 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <div className="about-style-one bg-dark text-light" style={{ backgroundImage: "url(img/shape/7.png)" }}>
                                <ul className="check-list-item">
                                    <li>
                                        <h5>Scripts written to convert, not confuse</h5>
                                        <p>
                                            We start with a deep dive into your brand, goals, and audience. From there, we craft a custom content plan with messaging, video ideas, and a repeatable structure.
                                        </p>
                                    </li>
                                    <li>
                                        <h5>On-location shoot gets you a month of content in 4-6 hours</h5>
                                        <p>
                                            A few hours of your time becomes a month of consistent, strategic content. No daily scramble, no constant pressure to create.
                                        </p>
                                    </li>
                                    <li>
                                        <h5>Multi-platform posting done for you—no logins needed</h5>
                                        <p>
                                            Our team handles the editing, branding, formatting, and posting across platforms. You get consistent, high-performing content—done for you, week after week.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-12">
                            <div className="about-style-one">
                                <div>
                                    <h2 className="title pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30">You’ve Tried Interns, VAs, and Freelancers but you've realized you need Pros to get  <strong>Pro</strong> results</h2>

                                </div>
                                <div className="thumb bg-cover" style={{ backgroundImage: "url(https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" }}>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tT2puL7IZOE" onClose={() => setOpen(false)} />
                                    <Link className="mfp-iframe popup-youtube video-play-button with-text mt-20" onClick={() => setOpen(true)}>
                                        <div className="effect"></div>
                                        {/* <span><i className="fa-solid fa-play"></i> OUR STORY</span> */}
                                    </Link>
                                </div>
                                <Animate className="animate__animated animate__fadeInUp" delay="1200ms" duration="400ms">
                                    <div className="button mt-40 ml-80">
                                        <a className="btn btn-md btn-gradient animation" href="https://api.leadconnectorhq.com/widget/booking/ciqckeoMSq7nhG9zXf5O" target="_blank" rel="noopener noreferrer">
                                            Get Started
                                        </a>
                                    </div>
                                </Animate>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;