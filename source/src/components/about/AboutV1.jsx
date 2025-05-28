import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

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
                                        <h5>Customized Solutions</h5>
                                        <p>
                                            Every brand is unique. We tailor our services to match your vision, ensuring authenticity and connection with your audience
                                        </p>
                                    </li>
                                    <li>
                                        <h5>Pro-Level Expertise</h5>
                                        <p>
                                            Our team includes industry professionals with years of experience in video production and brand strategy
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-12">
                            <div className="about-style-one">
                                <h2 className="title pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30">Providing the best service <br /> To <strong>Build</strong> Your Brand</h2>
                                <div className="thumb bg-cover" style={{ backgroundImage: "url(https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" }}>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tT2puL7IZOE" onClose={() => setOpen(false)} />
                                    <Link className="mfp-iframe popup-youtube video-play-button with-text mt-20" onClick={() => setOpen(true)}>
                                        <div className="effect"></div>
                                        {/* <span><i className="fa-solid fa-play"></i> OUR STORY</span> */}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;