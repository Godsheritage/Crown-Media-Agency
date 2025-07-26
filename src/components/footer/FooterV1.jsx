import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import SocialShare from '../others/SocialShare';
import { toast } from 'react-toastify';

const FooterV1 = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for your Email")
    }

    return (
        <>
            <footer className="bg-dark text-light" style={{ backgroundImage: "url(/img/shape/5.png)" }}>
                <div className="container">
                    <div className="f-items default-padding-bottom pt-70 pt-xs-0">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="footer-animated-shape">
                                    <img src="/img/shape/6.png" alt="Image Not Found" />
                                </div>
                                <div className="f-item about pr-50 pr-xs-0 pr-md-0">
                                    <img className="logo" src="/img/logo/logoWhite.png" alt="Logo" />
                                    <p>You’ve built the business, now let’s make it visible. One shoot. 30 days of trully done-for-you content.
                                    </p>
                                    <div className="footer-social mt-30">
                                        <ul>
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                                <div className="f-item link">
                                    <h4 className="widget-title">Company</h4>
                                    <ul>
                                        {/* <li>
                                            <Link to="/about-us#">Company Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us#">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq#">Help Center</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us#">Career</Link>
                                        </li> */}
                                        <li>
                                            <Link to="#">Plans & Pricing</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Contact</Link>
                                        </li>
                                        <li>

                                            <div class="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="6847cc770d1dfb766b154b37" data-style-height="52px" data-style-width="100%">
                                                <a href="https://www.trustpilot.com/review/crownmedia.agency" target="_blank" rel="noopener">Give us a Review on Trustpilot</a>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item contact">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul>
                                        <li>
                                            <div className="content">
                                                <strong>Address:</strong>
                                                Baltimore, MD
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <strong>Email:</strong>
                                                <a href="mailto:info@validtheme.com">admin@crownmedia.agency</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <strong>Phone:</strong>
                                                <a href="tel:2151234567">+1(443)929-2178</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item newsletter">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <p>
                                        Join our subscribers list to get the instant latest news and special offers.
                                    </p>
                                    <form onSubmit={handleSearch}>
                                        <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete='off' required />
                                        <button type="submit"><i className="fas fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-dark text-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>
                                    Copyright &copy; {(new Date().getFullYear())} CrownMedia. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;