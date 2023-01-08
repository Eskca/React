import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Longcard from "../components/Longcard";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <main className="main">
            <section className="section hero">
                <div className="wrapper">
                    <div className="box">
                        <h1>The Future of Multi and Cross Chain Defi</h1>
                        <p>Swap, earn, stake, all on one decentralized, community driven platform. Welcome to the fastest growing home to DeFi</p>
                    </div>
                    <div className="box">
                        <img src="/images/hero-bg.png" alt="images" />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="cta-group">
                        <Link to='/dashboard'><Button text={'Launch App'} /></Link>
                        <img src="/images/Frame 35741.png" alt="images" />
                        <img src="/images/Group.png" alt="images" />
                    </div>
                </div>
            </section>
            
            <section className="section built">
                <div className="wrapper">
                    <div className="box">
                        <img src="/images/Frame 35544.png" alt="images" />
                    </div>

                    <div className="box">
                        <h3>$500k</h3>
                        <p>Trade Volume</p>
                        <div className="dash"></div>
                    </div>
                   
                    <div className="box">
                        <h3>12M+</h3>
                        <p>All Time Trades</p>
                        <div className="dash"></div>
                    </div>

                    <div className="box">
                        <h3>100+</h3>
                        <p>Integrations</p>
                        <div className="dash"></div>
                    </div>
                </div>
            </section>

            <section className="section planning">
                <div className="wrapper">
                    <div className="box first">
                        <div className="first-top">
                            <h3>Pioneering DeFi  with cross-chain innovations</h3>
                            <p>Bee Trade Finance Network is a Fully decentralized peer-to-peer hybrid cryptocurrency exchange for the Avalanche DeFi ecosystem built on EVM.</p>
                        </div>
                        <Button text={'Launch App'} />
                    </div>
                    <div className="box second">
                        <div className="inner">
                            <img src="/images/Group 159.png" alt="images" />
                            <span>
                                <h3>Cross-Chain</h3>
                                <p>The cross-chain protocol facilitates interoperability between different blockchain networks.</p>
                            </span>
                        </div>

                        <div className="inner">
                            <img src="/images/pos.png" alt="images" />
                            <span>
                                <h3>Proof of Stake</h3>
                                <p>Proof of Stake is a popular, alternative consensus mechanism to Proof of Work.</p>
                            </span>
                        </div>

                        <div className="inner">
                            <img src="/images/thumb.png" alt="images" />
                            <span>
                                <h3>Permissionless</h3>
                                <p>No one can stop you from using cryptocurrency. Centralized payment services can freeze accounts or prevent transactions from being made.</p>
                            </span>
                        </div>

                        <div className="inner">
                            <img src="/images/ribbon.png" alt="images" />
                            <span>
                                <h3>A  cheap &ampersand;  fast  payment method</h3>
                                <p>Proof of Stake is a popular, alternative consensus mechanism to Proof of Work.</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section features">
                <div className="wrapper">
                    <h3>Features Of Bee Trade Hybrid DEX</h3>
                    <div className="boxes">
                        <Card image='/images/btf.png' text='$BTF Staking' desc='take your $BTF to earn rewards. And get exclusive access to benefits.' />

                        <Card image='/images/trade.png' text='Trade' desc='Swap or Trade quickly at the lowest fees.' />

                        <Card image='/images/dex.png' text='Hybrid DEX' desc='Combining a high-performance order book with Automated Market Making (AMM).' />

                        <Card image='/images/pool.png' text='Pool' desc='Provide liquidity for your favourite tokens and earn.' />

                        <Card image='/images/farm.png' text='Farms' desc='Earn extra yield by depositing your Liquidity Pool tokens.' />

                        <Card image='/images/chain.png' text='Multi-Chain Dashboard' desc='Easily track your Web3 portfolio and access yield opportunities.' />
                    </div>
                </div>
            </section>

            <section className="section community">
                <div className="wrapper community-first">
                    <div className="box">
                        <img src="/images/Vector.png" alt="img" />
                        <h3>41.3k</h3>
                        <p>Twitter Network</p>
                        <Button text={'Follow Us'} />
                    </div>

                    <div className="box">
                        <img src="/images/SI.png" alt="img" />
                        <h3>41.2k</h3>
                        <p>Telegram Network</p>
                        <Button text={'Join Telegram'} />
                    </div>
                </div>
                <div className="wrapper community-second">
                    <div className="round-bg"></div>
                    <h3>Community</h3>
                    <p>Get involved and stay up to date. Access exclusive airdrops, giveaways, and events.</p>
                </div>
            </section>

            <section className="section supporters">
                <h3>Our Key Supporters</h3>
                <div className="wrapper">
                    <div className="box one">
                        <img src="/images/Rectangle 4235.png" alt="img" />
                        <img src="/images/Rectangle 4233.png" alt="img" />
                        <img src="/images/Rectangle 4227.png" alt="img" />
                    </div>

                    <div className="box two">
                        <img src="/images/Rectangle 4230.png" alt="img" />
                        <img src="/images/Rectangle 4231.png" alt="img" />
                        <img src="/images/Rectangle 4234.png" alt="img" />
                        <img src="/images/Rectangle 4232.png" alt="img" />
                    </div>

                    <div className="box three">
                        <img src="/images/Rectangle 4235.png" alt="img" />
                        <img src="/images/Rectangle 4233.png" alt="img" />
                        <img src="/images/Rectangle 4227.png" alt="img" />
                    </div>
                </div>
            </section>

            <section className="section featured">
                <div className="wrapper">
                    <Longcard longimage='/images/rect1.png' date='8/21/15' textdetails='Beetrade  is the new  trade marketing king.....' vector='/images/Vector1.png'/>
                    <Longcard longimage='/images/rect2.png' date='8/21/15' textdetails='Beetrade  is the new  trade marketing king.....' vector='/images/Vector1.png'/>
                    <Longcard longimage='/images/rect3.png' date='8/21/15' textdetails='Beetrade  is the new  trade marketing king.....' vector='/images/Vector1.png'/>
                    <Longcard longimage='/images/rect4.png' date='8/21/15' textdetails='Beetrade  is the new  trade marketing king.....' vector='/images/Vector1.png'/>
                </div>
            </section>
            </main>
            <Footer />
        </React.Fragment>
    );
}
 
export default Home;