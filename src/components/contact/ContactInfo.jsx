import SocialShare2 from '../others/SocialShare2';
import Animate from '../animation/Animate';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-style-one-info">
                <div className="mb-40">
                    <h2>Contact Information</h2>
                    <p>
                        Get in Touch with us <br />
                    </p>
                </div>
                <ul className="contact-address">

                    <Animate className="animate__animated animate__fadeInUp">
                        <li>
                            <div className="content">
                                <h4 className="title">Phone</h4>
                                <a href="tel:+4733378901">+1(443)929-2178</a>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="300ms">
                        <li>
                            <div className="info">
                                <h4 className="title">Location</h4>
                                <p>
                                    Baltimore, MD
                                </p>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="500ms">
                        <li>
                            <div className="info">
                                <h4 className="title">Official Email</h4>
                                <a href="mailto:info@digital.com.com">admin@crownmedia.agency</a>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="700ms">
                        <li>
                            <div className="info">
                                <h4 className="title">Follow Us</h4>
                                <ul className="social-link">
                                    <SocialShare2 />
                                </ul>
                            </div>
                        </li>
                    </Animate>

                </ul>
            </div>
        </>
    );
};

export default ContactInfo;