import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePriceV2 = ({ price }) => {
    const { planClass, plan, planInfo, planPrice, priceType, list1, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, icon1, icon2, icon3, btnLink, btnText, btnClass } = price

    return (
        <>
            <div className={`pricing-style-two ${planClass}`}>
                <div className="pricing-header">
                    <h4>{plan}</h4>
                    <p>{planInfo}</p>
                </div>
                <div className="pricing-content">
                    <div className="price">
                        <h2><sup id="priceSup">$</sup>{planPrice} <sub>{priceType}</sub></h2>
                    </div>
                    <ul>
                        {[list1, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11].map((item, index) => (
                            item && <li key={index}><i className={icon1}></i> {item}</li>
                        ))}
                    </ul>
                    <a
                        className={`btn mt-30 btn-sm ${btnClass ? btnClass : ""} effect`}
                        href={`${btnLink}#`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {btnText}
                    </a>
                </div>
            </div>
        </>
    );
};

export default SinglePriceV2;



// {[list1, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11,].map((item, index) => (
//                                 item && <li key={index}><i className={icon1}></i> {item}</li>
//                             ))}