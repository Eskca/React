import React from "react";
import Button from "../components/Button";

const Card = ({image, text, desc}) => {
    return (
        <div className="box">
            <img src={image} alt="img" />
            <h3>{text}</h3>
            <p>{desc}</p>
            <Button text={'Launch App'} />
        </div>
    );
}
 
export default Card;