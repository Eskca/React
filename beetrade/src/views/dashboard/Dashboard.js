import React from "react";
import Dashheader from "../../components/Dashheader";
import Dashaside from "../../components/Dashaside";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Circle from "../../components/Circle";
const Dashboard = () => {
    return (
        <React.Fragment>
            <Dashheader />
            <main className="main-dash">
                <Dashaside />
                <section className="section dash-section">
                    <Circle />
                    <div className="wrapper">
                        <div className="box-wrapp">
                            <div className="group-one">
                                <img src="/images/Frame 35630.png" alt="images" className="img"/>
                                <div className="box-wrap boxTwo">
                                    <div className="box">
                                        <h3>Order</h3>
                                        <div className="table-wrap">
                                            <div className="table">
                                                <div className="row">
                                                    <h3>Size (BTF)</h3>
                                                    <p>12351.80</p>
                                                    <p>12351.80</p>
                                                    <p>12351.80</p>
                                                    <p>12351.80</p>
                                                    <p>12351.80</p>
                                                    <p>12351.80</p>
                                                </div>

                                                <div className="row">
                                                    <h3>Price (USDT)</h3>
                                                    <p>0.8140</p>
                                                    <p>0.8140</p>
                                                    <p>0.8140</p>
                                                    <p>0.8140</p>
                                                    <p>0.8140</p>
                                                    <p>0.8140</p>
                                                </div>
                                            </div>
                                            <div className="table">
                                                <div className="row">
                                                    <h3>Size (BTF)</h3>
                                                    <p>12351.80</p>
                                                    <p>12351.80</p>
                                                    <p>12351.80</p>
                                                    <p>12351.80</p>
                                                    <p>12351.80</p>
                                                    <p>12351.80</p>
                                                </div>

                                                <div className="row">
                                                    <h3>Price (USDT)</h3>
                                                    <p>0.8140</p>
                                                    <p>0.8140</p>
                                                    <p>0.8140</p>
                                                    <p>0.8140</p>
                                                    <p>0.8140</p>
                                                    <p>0.8140</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box boxMain">
                                <div className="button-top">
                                    <Link to="/staking"><button>Buy</button></Link>
                                    <Link to="/staking"><button className="sell">Sell</button></Link>
                                </div>
                                <form className="form">
                                    <label htmlFor="#">
                                        Select Order Type
                                        <select name="#" id="#">
                                            <option value="buy">Buy</option>
                                            <option value="sell">Sell</option>
                                        </select>
                                    </label>

                                    <label htmlFor="#">
                                        Price
                                        <input type="text" name="#" id="#" placeholder="0"/>
                                    </label>

                                    <label htmlFor="#">
                                        Amount Got(BTF)
                                        <input type="text" name="#" id="#" placeholder="0"/>
                                    </label>

                                    <label htmlFor="#">
                                        Volume(USDT)
                                        <input type="text" name="#" id="#" placeholder="0"/>
                                    </label>

                                    <div className="bottom-box">
                                        <div className="bottom">
                                            <p>Available:</p>
                                            <img src="/images/Line 18.png" alt="img" />
                                            <h3>100 USDT</h3>
                                        </div>

                                        <div className="bottom">
                                            <p>Locked:</p>
                                            <img src="/images/Line 18.png" alt="img" />
                                            <h3>100 USDT</h3>
                                        </div>
                                    </div>

                                    <label htmlFor="#">
                                        <Button text='Buy BTF' />
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}
 
export default Dashboard;