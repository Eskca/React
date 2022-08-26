import React from "react";
import Button from "./Button";
import Logo from "./Logo";
const Dashheader = () => {
    return (
        <header className="dashheader">
            <Logo src='/images/logo.png' alt='logo' />
            <div className="cta-box">
                <img src="/images/bell.png" alt="bell" />
                <div className="buttonwrapper">
                    <Button text='Connect Wallet' />
                </div>
            </div>
        </header>
    );
}
 
export default Dashheader;