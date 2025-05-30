import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const HeaderLogoV1 = ({ logoColor = false, openMenu }) => {
    return (
        <>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                    <i className="fa-solid fa-bars" style={{"opacity":"0"}}></i>
                </button>
                <Link className="navbar-brand" to="/#">
                    {logoColor ?
                        <><img src="/img/logo/logoWhite.png" className="logo" alt="Logo" /></>
                        :
                        <><img src="/img/logo/logo1.png" className="logo" alt="Logo" /></>
                    }
                </Link>
            </div>
        </>
    );
};

export default HeaderLogoV1;