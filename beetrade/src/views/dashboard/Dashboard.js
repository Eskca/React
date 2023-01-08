import React, {useState} from "react";
import Dashheader from "../../components/Dashheader";
import Dashaside from "../../components/Dashaside";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Circle from "../../components/Circle";
import OrdersCard from "../../components/OrdersCard";
const Dashboard = () => {
    const [navState, setNavState] = useState(false);
    const toggleNav = () => {
        setNavState(!navState)
    }

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    
    return (
        <React.Fragment>
            <Dashheader openSideBar={toggleNav} />
            <main className="main-dash">
                <Dashaside  className={navState === false ? "dashaside" : "dashaside open"} linkState={'high'}/>
                <section className="section dash-section">
                    <Circle />
                    <div className="wrapper">
                        <div className="box-wrapp">
                            <div className="group-one">
                                <img src="/images/Frame 35630.png" alt="images" className="img desktop-img"/>
                                <img src="/images/mobile-img.png" alt="images" className="img mobile-img"/>
                                <div className="row-boxes">
                                    <div className="box-wrap boxTwo">
                                        <div className="box">
                                            <h3>Order Book</h3>
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
                                                    <img src="/images/Line 18.png" alt="img" className="iconhide"/>
                                                    <h3>100 USDT</h3>
                                                </div>

                                                <div className="bottom">
                                                    <p>Locked:</p>
                                                    <img src="/images/Line 18.png" alt="img" className="iconhide"/>
                                                    <h3>100 USDT</h3>
                                                </div>
                                            </div>

                                            <label htmlFor="#">
                                                <Button text='Buy BTF' />
                                            </label>
                                        </form>
                                    </div>
                                </div>

                                <div className="box-wrap wrapthree">
                                    <div className="box">
                                        <div className="btnwrap">
                                            <button className={toggleState === 1 ? "active-button" : ""} onClick={() => toggleTab(1) }>Open Orders</button>
                                            <button className={toggleState === 2 ? "active-button" : ""} onClick={() => toggleTab(2) }>Trade History</button>
                                        </div>

                                        <div className={toggleState === 1 ? "cardOpen active-tab" : "inactive"}>
                                            <OrdersCard tag={'Sell'} imageOne={'logo.png'} currecnyOne={'BTF'} imageTwo={'logo.png'} curencyTwo={'AVX'} limittext={'Limit'} sellprice={' 300 BTF'} price={'2.122 USDT'} tagclass={'sell'} />

                                            <OrdersCard tag={'Sell'} imageOne={'logo.png'} currecnyOne={'BTF'} imageTwo={'logo.png'} curencyTwo={'AVX'} limittext={'Limit'} sellprice={' 300 BTF'} price={'2.122 USDT'} tagclass={'sell'}/>

                                            <OrdersCard tag={'Sell'} imageOne={'logo.png'} currecnyOne={'BTF'} imageTwo={'logo.png'} curencyTwo={'AVX'} limittext={'Limit'} sellprice={' 300 BTF'} price={'2.122 USDT'} tagclass={'sell'}/>

                                            <OrdersCard tag={'Sell'} imageOne={'logo.png'} currecnyOne={'BTF'} imageTwo={'logo.png'} curencyTwo={'AVX'} limittext={'Limit'} sellprice={' 300 BTF'} price={'2.122 USDT'} tagclass={'sell'}/>
                                        </div>

                                        <div className={toggleState === 2 ? "cardHistory active-tab" : "inactive"}>
                                            <OrdersCard tag={'Buy'} imageOne={'logo.png'} currecnyOne={'BTF'} imageTwo={'logo.png'} curencyTwo={'AVX'} limittext={'Limit Buy'} sellprice={' 300 BTF'} price={'2.122 USDT'} tagclass={'buy'}/>

                                            <OrdersCard tag={'Buy'} imageOne={'logo.png'} currecnyOne={'BTF'} imageTwo={'logo.png'} curencyTwo={'AVX'} limittext={'Limit Buy'} sellprice={' 300 BTF'} price={'2.122 USDT'} tagclass={'buy'}/>

                                            <OrdersCard tag={'Buy'} imageOne={'logo.png'} currecnyOne={'BTF'} imageTwo={'logo.png'} curencyTwo={'AVX'} limittext={'Limit Buy'} sellprice={' 300 BTF'} price={'2.122 USDT'} tagclass={'buy'}/>

                                            <OrdersCard tag={'Buy'} imageOne={'logo.png'} currecnyOne={'BTF'} imageTwo={'logo.png'} curencyTwo={'AVX'} limittext={'Limit Buy'} sellprice={' 300 BTF'} price={'2.122 USDT'} tagclass={'buy'}/>
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
                                            <img src="/images/Line 18.png" alt="img" className="iconhide"/>
                                            <h3>100 USDT</h3>
                                        </div>

                                        <div className="bottom">
                                            <p>Locked:</p>
                                            <img src="/images/Line 18.png" alt="img" className="iconhide"/>
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