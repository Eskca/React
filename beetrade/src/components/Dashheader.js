import React from "react";
import Button from "./Button";
import Logo from "./Logo";
const Dashheader = ({openSideBar}) => {
    return (
        <header className="dashheader">
            <div className="dash-desktop">
                <Logo src='/images/logo.png' alt='logo' />
                <div className="cta-box">
                    <img src="/images/bell.png" alt="bell" />
                    <div className="buttonwrapper">
                        <Button text='Connect Wallet' />
                    </div>
                </div>
            </div>

            <div className="dash-mobile">
                <img src="/images/menu.png" alt="img" className="menu" onClick={openSideBar}/>
                <div className="cta-box">
                    <img src="/images/bell.png" alt="bell" />
                    <div className="buttonwrapper">
                        <Button text={<img src="/images/wallet.png" alt="wallet" />} />
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Dashheader;