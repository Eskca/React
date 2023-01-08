import React from "react";
import Button from "./Button";
const OrdersCard = ({tag,curencyTwo,currecnyOne,imageOne,imageTwo,limittext,price,sellprice,tagclass}) => {
    return (
        
        <div className="inner">
            <div className={`tag ${tagclass}`}>{tag}</div>
            <div className="text-box">
                <div className="logo-hold">
                    <img src={`/images/${imageOne}`} alt="images" />
                    <p>{currecnyOne}</p>
                </div>
                <div className="dash"></div>
                <div className="logo-hold">
                    <img src={`/images/${imageTwo}`} alt="images" />
                    <p>{curencyTwo}</p>
                </div>
            </div>
            <p className="paragraph">{limittext}</p>
            <span>
                <h3 className="heading">Sell:{sellprice}</h3>
                <p className="paragraph">at</p>
                <h3 className="heading">{price}</h3>
            </span>
            {tagclass === 'sell' ? (
                <>
                    <div className="outter-progress">
                        <div className="inner-progress"></div>
                    </div>
                    <Button text={'Cancel Orders'} />
                </>
            ) : (
                ""
            )}
            
        </div>
        
    );
}
 
export default OrdersCard;