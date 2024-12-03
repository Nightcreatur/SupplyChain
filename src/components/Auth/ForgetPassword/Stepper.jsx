import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import React from "react";
import './Stepper.css';
import ForgotPassword from "./Forgetpage";
import PasswordReset from "./ResetPassword";
import SetNewPassword from "./SetNewPassword";
import { motion } from 'framer-motion';

const ForgetStepper = () => {
    const navigate = useNavigate();

    const steps = [
        { title: "RESET PASSWORD", path: "reset-password", component: <ForgotPassword /> },
        { title: "ENTER OTP", path: "enter-otp", component: <PasswordReset /> },
        { title: "SET NEW PASSWORD", path: "set-new-password", component: <SetNewPassword /> },
    ];

    const currentStepIndex = steps.findIndex(step => window.location.pathname.includes(step.path));

    const handleNext = () => {
        if (currentStepIndex < steps.length - 1) {
            navigate(`/forget/${steps[currentStepIndex + 1].path}`);
        }
    };

    const handlePrevious = () => {
        if (currentStepIndex > 0) {
            navigate(`/forget/${steps[currentStepIndex - 1].path}`);
        }
    };

    return (
        <div className="password-stepper-container">
            <div className="password-progress-bar">
                {steps.map((step, index) => (
                    <div key={index} className="step">
                        <div
                            className={`step-circle ${currentStepIndex === index ? "active" : ""}`}
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
                <Routes>
                    {steps.map((step, index) => (
                        <Route
                            key={index}
                            path={step.path}
                            element={
                                <div className="password-content-box">

                                    {React.cloneElement(step.component, {
                                        handleNext,
                                        handlePrevious,
                                        currentStep: currentStepIndex,
                                    })}
                                </div>
                            }
                        />
                    ))}
                    {/* Redirect to the first step */}
                    <Route path="*" element={<Navigate to="reset-password" />} />
                </Routes>
            </motion.div>
        </div>
    );
};

export default ForgetStepper;
