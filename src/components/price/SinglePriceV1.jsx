import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePriceV1 = ({ price }) => {
    const { cardClass, itemClass, planName, planPrice, planType, planText, btnLink, btnText, btnClass, checkList1, checkList2, checkList3, checkList4, checkList5, checkList6, checkList7, checkList8, checkList9, checkList10, checkListIcon } = price

    return (
        <>

            <div className="col-xl-5">
                <div className="mb-40">
                    <h4 className="sub-title">Our Pricing</h4>
                    <h2 className="title">Committed to <br /> giving the best price</h2>
                </div>
                <div className="pricing-tab">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="price-montly-tab" data-bs-toggle="tab" data-bs-target="#price-montly" type="button" role="tab" aria-controls="price-montly" aria-selected="true">
                                Monthly
                            </button>
                            <button className="nav-link" id="price-yearly-tab" data-bs-toggle="tab" data-bs-target="#price-yearly" type="button" role="tab" aria-controls="price-yearly" aria-selected="false">
                                Yearly
                            </button>
                        </div>
                    </nav>
                    {/* <div className="shape-arrow">
                        {lightShape ? <><img src="/img/shape/24-theme.png" alt="Image not found" /></>
                            : <><img src="/img/shape/24.png" alt="Image not found" /></>}
                    </div> */}
                </div>
            </div>

            <div className={`pricing-style-one ${cardClass ? cardClass : ""} col-md-6`}>
                <div className={`item ${itemClass ? itemClass : ""}`}>
                    <div className="pricing-header">
                        <i className="flaticon-cleaning-6"></i>
                        <h4>{planName}</h4>
                        <h2><sup>$</sup>{planPrice} <sub>/{planType}</sub></h2>
                        <p>{planText}</p>
                        <div className="button">
                            <Link className={`btn btn-border ${btnClass ? btnClass : "btnClass"} btn-sm`} to={`/${btnLink}#`}>{btnText}</Link>
                        </div>
                    </div>
                    <div className="pricing-info">
                        <ul>
                            {[checkList1, checkList2, checkList3, checkList4, checkList5, checkList6, checkList7, checkList8, checkList9, checkList10].map((item, index) => (
                                item && <li key={index}><i className={checkListIcon}></i> {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePriceV1;