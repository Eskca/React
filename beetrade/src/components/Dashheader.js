import React,{useState} from "react";
import Button from "./Button";
import Logo from "./Logo";
import Modal from "./Modal";

const Dashheader = ({openSideBar,toggleTheme}) => {
    const [modalState, setModalState] = useState(false);
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    
    const modalToggle = () =>{
        setModalState(!modalState)
    }
    return (
        <>
            <header className="dashheader">
                <div className="dash-desktop">
                    <Logo src='/images/logo.png' alt='logo' />
                    <div className="cta-box">
                        <div className="btnwrap">
                            <button className={toggleState === 1 ? "active-button" : ""} onClick={() => toggleTab(1)}><img src="../images/icons8-smiling-sun-24.png" alt="sun" onClick={toggleTheme}/></button>
                            <button className={toggleState === 2 ? "active-button" : ""} onClick={() => toggleTab(2) }><img src="../images/icons8-crescent-moon-24.png" alt="moon" onClick={toggleTheme} /></button>
                        </div>
                        <img src="/images/bell.png" alt="bell" />
                        <div className="buttonwrapper"  onClick={modalToggle}>
                            <Button text='Connect Wallet'/>
                        </div>
                    </div>
                </div>

                <div className="dash-mobile">
                    <img src="/images/menu.png" alt="img" className="menu" onClick={openSideBar}/>
                    <div className="cta-box">
                        <div className="btnwrap">
                            <button className={toggleState === 1 ? "active-button" : ""} onClick={() => toggleTab(1)}><img src="../images/icons8-smiling-sun-24.png" alt="sun" onClick={toggleTheme}/></button>
                            <button className={toggleState === 2 ? "active-button" : ""} onClick={() => toggleTab(2) }><img src="../images/icons8-crescent-moon-24.png" alt="moon" onClick={toggleTheme} /></button>
                        </div>
                        <img src="/images/bell.png" alt="bell" />
                        <div className="buttonwrapper" onClick={modalToggle}>
                            <Button text={<img src="/images/wallet.png" alt="wallet" />} />
                        </div>
                    </div>
                </div>
            </header>
            <Modal modalclass={modalState ? ("opens") : ("")} imageOne={'logo.png'} currecnyOne={'AVX'} onClick={modalToggle}/>
        </>
    );
}
 
export default Dashheader;