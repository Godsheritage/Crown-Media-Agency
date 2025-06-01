import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import AboutListInfo from '../../jsonData/AboutListInfo.json';

const AboutV2 = () => {
    return (
        <>
            <div className="about-style-two-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-two">
                            <div className="about-two-thumb">
                                <img src="https://images.pexels.com/photos/2787216/pexels-photo-2787216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image Not Found" />
                                <div className="experience">
                                    <h2><strong>6</strong> Years Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40">
                            <div className="about-two-info">
                                <h4 className="sub-title">Let our team become your content department—without the overhead.</h4>
                                <h2 className="title">Show Up Online—Without <br /> Doing It All Yourself</h2>
                                <p>
                                    If content is king, consistency is the crown. But consistency shouldn’t mean burning out. With Crown Media, you’ll get a team that thinks, creates, and executes like your own so you can stay focused on growing your business while we make sure you’re getting results.
                                </p>
                                <div className="about-grid-info">
                                    <Link className="btn-round-animation" to="/services#">Book A Call <i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;