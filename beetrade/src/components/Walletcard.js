import React from "react";
import Button from "./Button";
const Walletcard = ({textFrom, textTo, balance,amount,max,half}) => {
    return (
        <div className="main-wallet">
            <div className="wallet-wrapper">
                <div className="wallet-top">
                    <h3>{textFrom}</h3>
                    <p>Balance:{balance}</p>
                </div>
                <div className="wallet-bottom">
                    <div className="dropdown">
                        <div className="dropdown-top">
                            <img src="/images/logo.png" alt="logo" />
                            <h3>BTF</h3>
                        </div>
                        <div className="line"></div>
                        <div className="max-container">
                            <div className="max">{max}</div>
                            <div className="half">{half}</div>
                        </div>
                    </div>
                    <p>{amount}</p>
                </div>
            </div>
            <img src="/images/Frame 35649.png" alt="icon" className="smallIcon"/>
            <div className="wallet-wrapper">
                <div className="wallet-top">
                    <h3>{textTo}</h3>
                    <p>Balance:{balance}</p>
                </div>
                <div className="wallet-bottom">
                    <div className="dropdown">
                        <div className="dropdown-top">
                            <img src="/images/logo.png" alt="logo" />
                            <h3>BTF</h3>
                        </div>
                        <div className="line"></div>
                        <div className="max-container">
                            <div className="max">{max}</div>
                            <div className="half">{half}</div>
                        </div>
                    </div>
                    <p>{amount}</p>
                </div>
            </div>
            <Button text="Connect Wallet" />
        </div>
    );
}
 
export default Walletcard;