import React, { useState } from "react";
import './Stepper.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ChooseRole from "./Auth/SignUp/ChooseRole";
import UserInfo from "./Auth/SignUp/UserInfo";
import BusinessDetails from "./Auth/SignUp/BusinessDetail";
import TermsAndPolicies from "./Auth/SignUp/TermsAndPolicies";
import Verification from "./Auth/SignUp/Verification";

const App = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { title: "Choose Role", content: <ChooseRole /> },
        { title: "User Information", content: <UserInfo /> },
        { title: "Business Details", content: <BusinessDetails /> },
        { title: "Terms & Policies", content: <TermsAndPolicies /> },
        { title: "Verification", content: <Verification /> },
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="stepper-container">
            <div className="progress-bar">
                {steps.map((step, index) => (
                    <div key={index} className="step">
                        <div
                            className={`step-circle ${currentStep === index ? "active" : ""}`}
                        >
                            {index + 1}
                        </div>
                        <p className="step-title">{step.title}</p>
                    </div>
                ))}
            </div>
            <div className="stepper-right-panel">

                <div className="content-box">
                    <h2>{steps[currentStep].title}</h2>
                    <div className="step-content">{steps[currentStep].content}</div>
                    <div className="button-group">
                        <button
                            onClick={handlePrevious}
                            disabled={currentStep === 0}
                            hidden={currentStep === 0 || currentStep === 4}
                            className="stepper-btn stepper-btn-prev"
                        >
                            Previous Step
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentStep === steps.length - 1}
                            hidden={currentStep === 4}
                            className="stepper-btn stepper-btn-next"
                        >
                            Next Step
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default App;
