import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="subscription-box">
                <Logo src='/images/logo.png' alt='logo' />
                <div className="subscribe">
                    <h3>Subscribe</h3>
                    <p>Subscribe to our newsletter</p>
                </div>
                <div className="email">
                    <label htmlFor="#">
                        <input type="email" placeholder="Enter your email" />
                    </label>

                    <label htmlFor="#">
                        <Button text={'Subscribe'} />
                    </label>
                </div>
            </div>
            <div className="footer-wrapper">
                <div className="footer-box">
                    <h3>App</h3>
                    <ul>
                        <li><Link to="/">Trade</Link></li>
                        <li><Link to="/">Swap</Link></li>
                        <li><Link to="/">Pool</Link></li>
                        <li><Link to="/">Farm</Link></li>
                    </ul>
                </div>

                <div className="footer-box">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="/">Docs</Link></li>
                        <li><Link to="/">Team</Link></li>
                        <li><Link to="/">Roadmap</Link></li>
                        <li><Link to="/">Tokenmetrics</Link></li>
                    </ul>
                </div>

                <div className="footer-box">
                    <h3>Community</h3>
                    <ul>
                        <li><Link to="/">Twitter</Link></li>
                        <li><Link to="/">Linkedin</Link></li>
                        <li><Link to="/">Telegram</Link></li>
                        <li><Link to="/">Discord</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;