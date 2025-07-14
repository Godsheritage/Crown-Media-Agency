import React from 'react';

const SingleTestimonialV2 = ({ testimonial }) => {
    const { image } = testimonial

    return (
        <>
            <div className="swiper-slide">
                <div className="testimonial-style-one">
                    <div className="item">
                        <div className="content">
                            <img src={image} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV2;