import React from "react";
import { Link } from "react-router-dom";
import Soon from "./Soon";
const Dashaside = ({className, linkState, swapLink,stakingLink}) => {
    

    return (
        <nav className={className}>
            <ul>
                <Link to="/dashboard" className={linkState}><img src="/images/grup.png" alt="img" /><p>Trade</p></Link>
                <Link to="/swap" className={swapLink}><img src="/images/ic_outline-swap-horizontal-circle.png" alt="img" /><p>Swap</p></Link>
                <Link to="/staking" className={stakingLink}><img src="/images/stack.png" alt="img" /><p>Staking</p></Link>
                <Link to="/dashboard"><img src="/images/Menu-Ico.png" alt="img" /><p>Pool</p><Soon text={'Coming Soon'}/></Link>
                <Link to="/dashboard"><img src="/images/home.png" alt="img" /><p>Farm</p><Soon text={'Coming Soon'}/></Link>
            </ul>

            <ul className="second-ul">
                <Link to="/dashboard"><img src="/images/file.png" alt="img" className="small-icon" /><p>Docs</p></Link>
                <Link to="/dashboard"><img src="/images/Menu-Icon.png" alt="img" /><p>Community</p></Link>
                <Link to="/dashboard"><img src="/images/settings.png" alt="img" className="small-icon" /><p>Settings</p></Link>
                <Link to="/dashboard"><img src="/images/chat.png" alt="img" className="small-icon" /><p>Feedback</p></Link>
            </ul>
        </nav>
    );
}
 
export default Dashaside;