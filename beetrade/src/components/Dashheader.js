import React,{useState} from "react";
import Button from "./Button";
import Logo from "./Logo";
import Modal from "./Modal";

const Dashheader = ({openSideBar}) => {
    const [modalState, setModalState] = useState(false);
    const modalToggle = () =>{
        setModalState(!modalState)
    }
    return (
        <>
            <header className="dashheader">
                <div className="dash-desktop">
                    <Logo src='/images/logo.png' alt='logo' />
                    <div className="cta-box">
                        <img src="/images/bell.png" alt="bell" />
                        <div className="buttonwrapper"  onClick={modalToggle}>
                            <Button text='Connect Wallet'/>
                        </div>
                    </div>
                </div>

                <div className="dash-mobile">
                    <img src="/images/menu.png" alt="img" className="menu" onClick={openSideBar}/>
                    <div className="cta-box">
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