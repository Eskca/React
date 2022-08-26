import React from "react";

const Longcard = ({longimage,date,textdetails,vector}) => {
    return (
        <div className="box">
            <img src={longimage} alt="img" />
            <div className="box-bottom">
                <small>{date}</small>
                <p>{textdetails}</p>
                <img src={vector} alt="icon" className="vector"/>
            </div>
        </div>
    );
}
 
export default Longcard;