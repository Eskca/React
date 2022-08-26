import React, { useRef } from "react";
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
    return (
        <React.Fragment>
            <Dashheader />
            <main className="main-dash">
                <Dashaside />
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

                                    <div className="column">
                                        <p>APR</p>
                                        <h3>11%</h3>
                                    </div>

                                    <div className="column">
                                        <p>Total Stacked</p>
                                        <h3>-$20,255,658</h3>
                                        <p className="total">22,527,539 BTF</p>
                                    </div>

                                    <img src="/images/chevron.png" alt="chevron" onClick={() => toggleTab(0)}/>
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