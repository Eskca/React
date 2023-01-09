import React from "react";
import Button from "./Button";
import currencies from "../currency";
import { useState } from "react";
const LiquidityCard = ({textFrom, textTo, balance,amount,max,half}) => {
    const [dropdown,setDropdown] = useState(false);
    const [dropdownTwo,setDropdownTwo] = useState(false);
    const [activeOption,setActiveOption] = useState(currencies[0]);
    const [activeOptionTwo,setActiveOptionTwo] = useState(currencies[0]);
    const [activeClass,setActiveClass] = useState(currencies[0].name);
    const [activeClassTwo,setActiveClassTwo] = useState(currencies[0].name);
    const displayOptions = ()=>{
        setDropdown(!dropdown);
    }

    const displayOptionsTwo = () =>{
        setDropdownTwo(!dropdownTwo);
    }

    const activeHandle = (item)=>{
        setActiveOption(item);
        setDropdown(!dropdown);
        setActiveClass(item.name)
    }

    const activeHandleTwo = (item)=>{
        setActiveOptionTwo(item);
        setDropdownTwo(!dropdownTwo);
        setActiveClassTwo(item.name)
    }

    return (
        <div className="main-wallet">
            <div className="wallet-wrapper">
                <div className="wallet-top">
                    <h3>{textFrom}</h3>
                    <p>Balance:{balance}</p>
                </div>
                <div className="wallet-bottom">
                    <div className="dropdown">
                        <div className="dropdown-top" onClick={displayOptions}>
                            <img src={activeOption.image} alt={activeOption.name} />
                            <h3>{activeOption.abbreviation}</h3>
                            <img src="/images/icons8-expand-arrow-24.png" alt="expand" />
                        </div>

                        <div className={`dropdown-bottom ${dropdown ? "dropped" : ""}`}>
                            {currencies.map((item)=>{
                                return (
                                    <div className={`item-box ${activeClass === item.name ? "high" : "" }`} key={item.id} onClick={()=>activeHandle(item)}>
                                        <img src={item.image} alt={item.name}/>
                                        <h3 className="heading">{item.name}</h3>
                                        <h3 className="heading">{item.abbreviation}</h3>
                                    </div>
                                )
                            })}
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
                        <div className="dropdown-top" onClick={displayOptionsTwo}>
                            <img src={activeOptionTwo.image} alt={activeOptionTwo.name} />
                            <h3>{activeOptionTwo.abbreviation}</h3>
                            <img src="/images/icons8-expand-arrow-24.png" alt="expand" />
                        </div>
                        
                        <div className={`dropdown-bottom ${dropdownTwo ? "dropped" : ""}`}>
                            {currencies.map((item)=>{
                                return (
                                    <div className={`item-box ${activeClassTwo === item.name ? "high" : "" }`} key={item.id} onClick={()=>activeHandleTwo(item)}>
                                        <img src={item.image} alt={item.name}/>
                                        <h3 className="heading">{item.name}</h3>
                                        <h3 className="heading">{item.abbreviation}</h3>
                                    </div>
                                )
                            })}
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