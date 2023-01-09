import React, { useRef, useState } from "react";
import Dashheader from "../../components/Dashheader";
import Dashaside from "../../components/Dashaside";
import ConnectCard from "../../components/ConnectCard";
import Connect from "../../components/Connect";
import Circle from "../../components/Circle";
const Staking = () => {
    const dropRef = useRef();
    const toggleTab = () =>{
        dropRef.current.classList.toggle("closed");
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
            <Dashheader openSideBar={toggleNav} toggleTheme={themeUpdate}/>
            <main className="main-dash" id={theme ? ("dark") : ("light")}>
                <Dashaside className={navState === false ? "dashaside" : "dashaside open"} stakingLink={'high'}/>
                <div className="content-wrapper">
                    <Circle />
                    <section className="section dash-section staking-section">
                        <div className="wrapper">
                            <h3>Staking</h3>
                            <div className="box-wrap column-wrap">
                                <div className="box">
                                    <div className="logo-hold">
                                        <img src="/images/logo.png" alt="images" />
                                        <p>BTF</p>
                                    </div>

                                    <div className="column">
                                        <p>Pending Rewards</p>
                                        <h3>0 BTF</h3>
                                    </div>

                                    <div className="column">
                                        <p>Staked</p>
                                        <h3>0 BTF</h3>
                                    </div>

                                    <img src="/images/chevron.png" alt="chevron" onClick={() => toggleTab(0)} className='mobilechev'/>

                                    <div className="column">
                                        <p>APR</p>
                                        <h3>11%</h3>
                                    </div>

                                    <div className="column">
                                        <p>Total Stacked</p>
                                        <h3>-$20,255,658</h3>
                                        <p>22,527,539 BTF</p>
                                    </div>

                                    <img src="/images/chevron.png" alt="chevron" onClick={() => toggleTab(0)} className='desktopchev'/>
                                </div>
                                <div className='box-bottom' ref={dropRef}>
                                    <ConnectCard header={'Deposited'} desc={'0BTF'}/>
                                    <ConnectCard header={'Pending Rewards'} desc={'0BTF'} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <Connect />   
                </div>
            </main>
        </React.Fragment>
    );
}
 
export default Staking;