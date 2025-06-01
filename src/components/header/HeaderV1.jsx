import React, { useEffect, useState } from 'react';
import HeaderLogoV1 from './HeaderLogoV1';

const HeaderV1 = ({ headerClass, logoColor = false }) => {

    // Sticky Menu 
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);




 

    return (
        <>
            <header>
                <nav className={`${isSticky ? "sticked" : "no-background"}  ${isOpen ? "navbar-responsive" : ""} navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed on menu-center no-full ${headerClass}`}>
                    <div className="container-fill d-flex justify-content-between align-items-center">
                        <HeaderLogoV1 logoColor={logoColor}  />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV1;