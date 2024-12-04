// RightSide.js
import "./Successful.css";
import done from '../../../assets/images/done.svg'
import { Link } from "react-router-dom";

const Successful = () => {
    return (
        <div className="right-side-container">
            <div className="icon-container">

                <img className="icon-container " src={done} alt="" />
            </div>
            <h2 className="congrats-title">Congratulations!</h2>
            <p className="congrats-message">
                You have completed the sign-up process.
            </p>
            <Link to='/dashboard'><button className="get-started-button">Get Started</button></Link>
        </div>
    );
};

export default Successful;
