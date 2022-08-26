import React from "react";
const Button = ({soon, text}) => {
    return (
        <button className={`button ${soon}`}>{text}</button>
    );
}
 
export default Button;