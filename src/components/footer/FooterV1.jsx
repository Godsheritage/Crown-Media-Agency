import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import SocialShare from '../others/SocialShare';
import { toast } from 'react-toastify';

// const LeadConnectorForm = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://link.msgsndr.com/js/form_embed.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Clean up the script on component unmount
//       document.body.removeChild(script);
//     };
//   }, []);

const FooterV1 = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for your Email")
    }



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