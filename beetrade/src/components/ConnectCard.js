import React from "react";
import Button from "./Button";
const ConnectCard = ({header,desc}) => {
    return (
        <div className="cardHolder">
            <div className="card-text">
                <h3>{header}</h3>
                <p>{desc}</p>
            </div>
            <Button text={'Connect Wallet'}/>
        </div>
    );
}
 
export default ConnectCard;