import React, {useRef} from "react";
const Alert = ({icon,title,paragraph, className = ''}) => {
    const handleBanner =  useRef();
    const closeBanner = () => {
        handleBanner.current.classList.toggle("remove");
    }
    return (
        <div className={`alert-box ${className}`} ref={handleBanner}>
            <div className="image-icon">
                <img src={icon} alt="icon" />
            </div>
            <div className="alert-text">
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
            <div className="image-icon">
                <img src="/images/Icon.png" alt="close"  onClick={closeBanner}/>
            </div>
        </div>
    );
}
 
export default Alert;