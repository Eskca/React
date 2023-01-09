import { Link } from "react-router-dom";
import Button from "./Button";
const Modal = ({currecnyOne,imageOne,modalclass}) => {
    return (  
        <div className={`modal ${modalclass}`}>
            <h3 className="heading">Connect Wallet</h3>
            <div className="box-wrap">
                <div className="modal-wrapper">
                    <div className="modal-inner">
                        <h3 className="heading">Available Network</h3>
                        <div className="network-area">
                            <div className="logo-hold">
                                <img src={`/images/${imageOne}`} alt="images" />
                                <p>{currecnyOne}</p>
                            </div>
                        </div>
                    </div>

                    <div className="modal-inner">
                        <h3 className="heading">Choose Wallet</h3>
                        <div className="network-area">
                            <div className="logo-hold">
                                <img src={`/images/${imageOne}`} alt="images" />
                                <p>{currecnyOne}</p>
                            </div>
                        </div>
                    </div>
                    <Link to='/wallet'><Button text={'Continue'} /></Link>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;