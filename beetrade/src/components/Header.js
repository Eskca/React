import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useRef } from "react";
const Header = () => {
    const headerRef = useRef(0);
    const handleClick = () => {
        headerRef.current.classList.toggle("active");
    }
    return (
        <header className="header">
            <nav className="mobile" ref={headerRef}>
                <aside className="mobile-top">
                    <Logo src='/images/logo.png' alt='logo' />
                    <img src="./images/icons8-menu-30.png" alt="menu" onClick={handleClick}/>
                </aside>

                <aside className="mobile-bottom">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Ecosystem</Link></li>
                        <li><Link to="/">Launchpad</Link></li>
                        <li><Link to="/">Education</Link></li>
                        <li><Link to="/">Roadmap</Link></li>
                        <li><Link to="/">Docs</Link></li>
                        <Link to='/dashboard'><Button text={'Launch App'} /></Link>
                    </ul>
                </aside>
            </nav>
            <nav className="desktop">
                <Logo src='/images/logo.png' alt='logo' />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Ecosystem</Link></li>
                    <li><Link to="/">Launchpad</Link></li>
                    <li><Link to="/">Education</Link></li>
                    <li><Link to="/">Roadmap</Link></li>
                    <li><Link to="/">Docs</Link></li>
                </ul>
                <Link to='/dashboard'><Button text={'Launch App'} /></Link>
            </nav>
        </header>
    );
}
 
export default Header;