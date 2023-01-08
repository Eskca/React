import React from "react";
import Button from "./Button";
const BalanceCard = ({imageOne,currecnyOne}) => {
    return (
        <div className="box">
            <div className="row-top">
                <div className="logo-hold">
                    <img src={`/images/${imageOne}`} alt="images" />
                    <p>{currecnyOne}</p>
                </div>
                <h3 className="heading">Locked: ..............</h3>
            </div>

            <form action="#">
                <label htmlFor="#">
                    <input type="text" placeholder="Enter Amount" />
                </label>
            </form>

            <div className="btn-row">
                <Button text={'Deposit'} />
                <div className="box-wrap">
                    <Button text={"Withdraw"} />
                </div>
            </div>
        </div>
    );
}
 
export default BalanceCard;