import React, {useState} from "react";
import Dashheader from "../../components/Dashheader";
import Dashaside from "../../components/Dashaside";
import Walletcard from "../../components/Walletcard";
import LiquidityCard from "../../components/LiquidityCard";
import Circle from "../../components/Circle";
const Swap = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    const [navState, setNavState] = useState(false);
    const toggleNav = () => {
        setNavState(!navState)
    }
    const [theme,setTheme] = useState(false);
    const themeUpdate = () =>{
        setTheme(!theme);
    }
    return (
        <React.Fragment>
            <Dashheader  openSideBar={toggleNav} toggleTheme={themeUpdate}/>
            <main className="main-dash new-main"  id={theme ? ("dark") : ("light")}>
                <Dashaside className={navState === false ? "dashaside" : "dashaside open"} swapLink={'high'}/>
                <section className="section dash-section swap-section">
                    <Circle />
                    <div className="btnwrap">
                        <button className={toggleState === 1 ? "active-button" : ""} onClick={() => toggleTab(1) }>Swap</button>
                        <button className={toggleState === 2 ? "active-button" : ""} onClick={() => toggleTab(2) }>Liquidity</button>
                    </div>
                    <div className="wrapper">
                        <div className={toggleState === 1 ? "box-wrap active-tab" : "inactive"}>
                            <Walletcard textFrom='From' textTo='To' balance='(Wallet Not Connected)' max='Max' half='Half'  amount='0' />
                        </div>

                        <div className={toggleState === 2 ? "box-wrap active-tab" : "inactive"}>
                            <LiquidityCard textFrom='From' textTo='To' balance='(Wallet Not Connected)' max='Max' half='Half'  amount='0' />
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}
 
export default Swap;