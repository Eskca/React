import React,{useState} from "react";
const Chart = ({op1,op2,op3,op4,op5,op6}) => {
    const [activeTime,setActiveTime] = useState(1);
    const handleClick = (id) =>{
        setActiveTime(id);
    }
    return (
        <div className="box chart">
            <div className="top">
                <h3 className="heading">Beetrade</h3>
                <div className="time-boxes">
                    <div className={`time ${activeTime === 1 ? "activeTime" : ""}`} onClick={(e) =>{handleClick(1)}}><p className="paragraph">{op1}</p></div>
                    <div className={`time ${activeTime === 2 ? "activeTime" : ""}`} onClick={(e) =>{handleClick(2)}}><p className="paragraph">{op2}</p></div>
                    <div className={`time ${activeTime === 3 ? "activeTime" : ""}`} onClick={(e) =>{handleClick(3)}}><p className="paragraph">{op3}</p></div>
                    <div className={`time ${activeTime === 4 ? "activeTime" : ""}`} onClick={(e) =>{handleClick(4)}}><p className="paragraph">{op4}</p></div>
                    <div className={`time ${activeTime === 5 ? "activeTime" : ""}`} onClick={(e) =>{handleClick(5)}}><p className="paragraph">{op5}</p></div>
                    <div className={`time ${activeTime === 6 ? "activeTime" : ""}`} onClick={(e) =>{handleClick(6)}}><p className="paragraph">{op6}</p></div>
                </div>
            </div>

            <div className="center">
                <h3 className="heading">Add Chart Here</h3>
            </div>
        </div>
    );
}
 
export default Chart;