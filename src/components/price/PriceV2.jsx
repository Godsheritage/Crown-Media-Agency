import React from 'react';
import PriceV2Data from '../../jsonData/PriceV2Data.json'
import SinglePriceV2 from './SinglePriceV2';
import PriceV2CardData from "../../jsonData/PriceV2Data.json"

const PriceV2 = () => {
    return (
        <>


            {/* <div className={`pricing-area default-padding-bottom ${priceClass}`}> */}
            <div className={`pricing-area default-padding-bottom `}>
                <div className="container">

                    <div className="row align-center">
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

                        <div className="pricing-area pricing-gird default-padding bottom-less">
                            <div className="container">
                                <div className="pricing-style-two-items">

                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="price-montly" role="tabpanel" aria-labelledby="price-montly-tab">
                                            <div className="row">
                                                {PriceV2CardData.slice(0, 3).map(price =>
                                                    <div className="col-xl-4 col-md-6 mb-30" key={price.id}>
                                                        <SinglePriceV2 price={price} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="price-yearly" role="tabpanel" aria-labelledby="price-yearly-tab">
                                            <div className="row">
                                               {PriceV2CardData.slice(3, 6).map(price =>
                                                    <div className="col-xl-4 col-md-6 mb-30" key={price.id}>
                                                        <SinglePriceV2 price={price} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
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

export default PriceV2;


