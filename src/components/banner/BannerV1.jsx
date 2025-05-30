import { HashLink as Link } from 'react-router-hash-link';
import Animate from '../animation/Animate';

const BannerV1 = () => {
    return (
        <>
            <div className="banner-style-one-area" style={{ backgroundImage: 'url(img/shape/1.png)' }}>
                <div className="shape-left-top">
                    <img src="/img/shape/2.png" alt="Shape" />
                </div>
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="information">
                                        <Animate className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
                                            <h2>Crown  <strong>Media</strong></h2>
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInUp" delay="900ms" duration="400ms">
                                            <p>
                                                We help real estate investors and entrepreneurs amplify their message through powerful branding, personalized strategies, and streamlined social media distribution
                                            </p>
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInUp" delay="1200ms" duration="400ms">
                                            <div className="button mt-40">
                                                <a className="btn btn-md btn-gradient animation" href="https://api.leadconnectorhq.com/widget/booking/ciqckeoMSq7nhG9zXf5O" target="_blank" rel="noopener noreferrer">
                                                    Book A Call
                                                </a>
                                            </div>
                                        </Animate>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Animate className="animate__animated animate__fadeInUp">
                                            <img src="https://dilabs-react.netlify.app/img/thumb/3.jpg" alt="Banner Image" />
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInDown" delay="500ms">
                                            <img src="https://dilabs-react.netlify.app/img/thumb/1.jpg" alt="Banner Image" />
                                        </Animate>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;