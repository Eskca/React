import React, {useState} from "react";
import Dashheader from "../../components/Dashheader";
import Dashaside from "../../components/Dashaside";
import Circle from "../../components/Circle";
import BalanceCard from "../../components/BalanceCard";
const Wallet = () => {
    const [navState, setNavState] = useState(false);
    const toggleNav = () => {
        setNavState(!navState)
    }


    return (
        <React.Fragment>
            <Dashheader openSideBar={toggleNav} />
            <main className="main-dash">
                <Dashaside  className={navState === false ? "dashaside" : "dashaside open"} linkState={''}/>
                <section className="section dash-section wallet-section">
                    <Circle />
                    <div className="wrapper">
                        <div className="title-row">
                            <h3 className="heading">Your Balance</h3>
                            <span>
                                <h3 className="heading">Balance</h3>
                                <p className="paragraph">25 BTF</p>
                            </span>
                        </div>
                        <div className="box-wrapp balance">
                            <BalanceCard imageOne={'logo.png'} currecnyOne={'BTF'} />
                            <BalanceCard imageOne={'logo.png'} currecnyOne={'BTF'} />
                            <BalanceCard imageOne={'logo.png'} currecnyOne={'BTF'} />
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}
 
export default Wallet;