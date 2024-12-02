import React from "react";
import "./ChooseRole.css";
import Wholesaler from '../../../assets/images/deliverytruck.svg'
import Truck from '../../../assets/images/truck.svg'
import Reatiler from '../../../assets/images/retailer.svg'



const ChooseRole = () => {
    return (
        <div className="container">



            <div className="main-content">
                <div className="header">
                    <a href="#" className="help-link">
                        Help & Support
                    </a>
                </div>
                <div className="role-content">

                    <p className="subtitle">
                        You will be given privileges based on your role. Choose your role in
                        supply chain application.
                    </p>
                    <div className="roles">
                        <button className="role-button">
                            <img src={Wholesaler} alt="Wholesaler" className="icon" />
                            Wholesaler
                        </button>
                        <button className="role-button">
                            <img src={Truck} alt="Distributor" className="icon" />
                            Distributor
                        </button>
                        <button className="role-button">
                            <img src={Reatiler} alt="Retailer" className="icon" />
                            Retailer
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChooseRole;
