import React, { useState } from "react";
import './Stepper.css'
import ForgotPassword from "./Forgetpage";
import PasswordReset from "./ResetPassword";
import SetNewPassword from "./SetNewPassword";
import { motion } from "framer-motion"



const ForgetStepper = () => {
    const [currentStep, setCurrentStep] = useState(0);


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

    const steps = [
        { title: "RESET PASSWORD", content: <ForgotPassword handleNext={handleNext} handlePrevious={handlePrevious} currentStep={currentStep} /> },
        { title: "ENTER OTP", content: <PasswordReset handleNext={handleNext} handlePrevious={handlePrevious} /> },
        { title: "SET NEW PASSWORD", content: <SetNewPassword handleNext={handleNext} handlePrevious={handlePrevious} /> },


    ];


    return (
        <div className="password-stepper-container">
            <div className="password-progress-bar">
                {steps.map((step, index) => (
                    <div key={index} className="step">
                        <div
                            className={`step-circle ${currentStep === index ? "active" : ""}`}
                        >
                            {index + 1}
                        </div>
                        <p className="password-step-title">{step.title}</p>
                    </div>
                ))}
            </div>
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ opacity: "-100%" }}
                transition={{ duration: 0.5, }}
                className="password-stepper-right-panel">
                <div className="password-content-box">

                    <p>{steps[currentStep].content}</p>
                    {/* <div className="password-button-group"> */}
                    {/* <button 
                            onClick={handlePrevious}
                            disabled={currentStep === 0}
                            className="password-stepper-btn password-stepper-btn-prev"
                        >
                            Previous Step
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentStep === steps.length - 1}
                            className="password-stepper-btn password-stepper-btn-next"
                        >
                            Next Step
                        </button> */}
                    {/* </div> */}
                </div>


            </motion.div>

        </div>
    );
};

export default ForgetStepper;
