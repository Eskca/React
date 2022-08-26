import React, {useRef} from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const headerRef = useRef();
    const toggle = () => {
        headerRef.current.classList.toggle("open");
    }
    
    return ( 
        <header className="header">
            <nav className="mobile-nav">
                <div className="mobile-top">
                    <img src="/images/logo.png" alt="Justice Markson" className="logo"/>
                    <img src="/images/icons8-menu-24.png" alt="navigation menu" className="menu" onClick={toggle}/>
                </div>
                <aside className="aside-menu" ref={headerRef}>
                    <ul className="menu-list">
                        <Link to="/"><li>Work</li></Link>
                        <Link to="/services"><li>Services</li></Link>
                        <Link to="/inquiries"><li>Inquiries</li></Link>
                    </ul>
                </aside>
            </nav>

            <nav className="desktop-nav">
                <ul className="desktop-list">
                    <Link to="/"><li>Work</li></Link>
                    <Link to="/services"><li>Services</li></Link>
                    <Link to="/inquiries"><li>Inquiries</li></Link>
                </ul>
                <ul className="logo-holder">
                    <img src="/images/logo.png" alt="Justice Markson" className="logo"/>
                </ul>
                <ul className="social-list">
                    <a href="https://www.instagram.com/onisoman01/"><li><img src="/images/icons8-instagram-24.png" alt="Justice Markson"/></li></a>
                    <a href="https://www.linkedin.com/in/justice-markson-944067236/"><li><img src="/images/icons8-linkedin-circled-24.png" alt="Justice Markson"/></li></a>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;