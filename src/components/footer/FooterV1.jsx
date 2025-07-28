import React from 'react';



const FooterV1 = () => {
    return (
        <>
            <footer className="bg-dark text-light" style={{ backgroundImage: "url(/img/shape/5.png)" }}>
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