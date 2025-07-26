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
                                            <h3 style={{fontSize:"5rem"}}>Turn One 4-Hour Shoot Into <strong>30 Days of Content</strong></h3>
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInUp" delay="900ms" duration="400ms">
                                            <p>
                                                For real estate entrepreneurs who want attention without the grind—we strategize, script, shoot, edit, and post scroll-stopping content that builds your brand and brings in leads. So you can focus on closing deals, not chasing trends on social media.
                                            </p>
                                        </Animate>

                                        <Animate className="animate__animated animate__fadeInUp" delay="1200ms" duration="400ms">
                                            <div className="button mt-40">
                                                <a className="btn btn-md btn-gradient animation" href="https://api.leadconnectorhq.com/widget/booking/ciqckeoMSq7nhG9zXf5O" target="_blank" rel="noopener noreferrer">
                                                    Book A Call
                                                </a>
                                                <a className="btn btn-md btnClass btn-border  ml-15 " href="tel:+14438069450" target="_blank" rel="noopener noreferrer">
                                                    Call Now
                                                </a>
                                            </div>
                                        </Animate>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Animate className="animate__animated animate__fadeInUp">
                                            <img src="https://photographysitebucket.s3.us-east-1.amazonaws.com/Crown+Media/me.jpg" alt="Banner Image" />
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInDown" delay="500ms">
                                            <img src="https://photographysitebucket.s3.us-east-1.amazonaws.com/Crown+Media/me2.jpg" alt="Banner Image" />
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