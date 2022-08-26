import React from "react";
import Button from "./Button";
const LiquidityCard = ({textFrom, textTo, balance,amount,max,half}) => {
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
            <p>1  BTF ≈ 0.019153 AVAX</p>
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
            <div className="baseWrapp">
                <div className="row">
                    <p>Base</p>
                    <h3>BTF</h3>
                </div>

                <div className="row">
                    <p>Liquidty (BTF)</p>
                    <h3>112,432.40  BTF</h3>
                </div>

                <div className="row">
                    <p>Liquidty (AVAX)</p>
                    <h3>32,432.40  AVAX</h3>
                </div>

                <div className="row">
                    <p>LP supply</p>
                    <h3>2,432.40  LP</h3>
                </div>

                <div className="row">
                    <p>Slipage Tolerance</p>
                    <div className="smallerBtn">
                        <div className="inner-small">
                            <h3>1</h3>
                        </div>
                        <div className="percent">
                            <h3>%</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Button text="Connect Wallet" />
        </div>
    );
}
 
export default LiquidityCard;