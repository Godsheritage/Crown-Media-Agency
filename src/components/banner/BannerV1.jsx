import { HashLink as Link } from 'react-router-hash-link';
import Animate from '../animation/Animate';
import me from "../../assets/imgs/me.jpg"
import me2 from "../../assets/imgs/me2.jpg"
import me3 from "../../assets/imgs/me3.png"

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
                                                As a real estate entrepreneur you've got a message worth sharing or a brand the world needs see. But the reality? Creating consistent, high-converting content is a full-time job. Strategy, filming, editing, optimization, publishing, tracking results... it never ends. That's where we come in
                                            </p>
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInUp" delay="1200ms" duration="400ms">
                                            <div className="button mt-40">
                                                <a className="btn btn-md btn-gradient animation" href="https://api.leadconnectorhq.com/widget/booking/ciqckeoMSq7nhG9zXf5O" target="_blank" rel="noopener noreferrer">
                                                    Book A Call
                                                </a>
                                                <a className="btn btn-md btnClass btn-border  ml-15 " href="tel:+14439292178" target="_blank" rel="noopener noreferrer">
                                                    Call Now
                                                </a>
                                            </div>
                                        </Animate>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Animate className="animate__animated animate__fadeInUp">
                                            <img src={me} alt="Banner Image" />
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInDown" delay="500ms">
                                            <img src={me2} alt="Banner Image" />
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