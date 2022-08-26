const Footer = () => {
    return (  
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-box">
                    <h3>Astrosoft Building</h3>
                    <p>Kare's Plaza Green Villa Biogbolo Express Yenegoa, Bayelsa</p>
                </div>

                <div className="footer-box">
                    <h3>Office Hours</h3>
                    <p>Monday - Friday</p>
                    <p>11AM - 2PM</p>
                </div>

                <div className="footer-box">
                    <h3>Reach Out</h3>
                    <a href="mailto:justicemarkson20@gmail.com">justicemarkson20@gmail.com</a>
                </div>
            </div>
            <div className="footer-logo">
                <img src="/images/logo.png" alt="logo" className="logo" />
            </div>
        </footer>
    );
}
 
export default Footer;