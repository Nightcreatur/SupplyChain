import './Stepper.css';
import ChooseRole from "./Auth/SignUp/ChooseRole";
import UserInfo from "./Auth/SignUp/UserInfo";
import BusinessDetails from "./Auth/SignUp/BusinessDetail";
import TermsAndPolicies from "./Auth/SignUp/TermsAndPolicies";
import Verification from "./Auth/SignUp/Verification";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import { motion } from "framer-motion"

const Stepper = () => {
    const navigate = useNavigate();

    const steps = [
        { title: "Choose Role", path: "choose-role", component: <ChooseRole /> },
        { title: "User Information", path: "user-info", component: <UserInfo /> },
        { title: "Business Details", path: "business-details", component: <BusinessDetails /> },
        { title: "Terms & Policies", path: "terms-policies", component: <TermsAndPolicies /> },
        { title: "Verification", path: "verification", component: <Verification /> },
    ];

    const currentStepIndex = steps.findIndex(step => window.location.pathname.includes(step.path));

    const handleNext = () => {
        if (currentStepIndex < steps.length - 1) {
            navigate(`/signup/${steps[currentStepIndex + 1].path}`);
        }
    };

    const handlePrevious = () => {
        if (currentStepIndex > 0) {
            navigate(`/signup/${steps[currentStepIndex - 1].path}`);
        }
    };

    return (
        <div className="stepper-container">
            <div className="progress-bar">
                {steps.map((step, index) => (
                    <div key={index} className="step">
                        <div className={`step-circle ${currentStepIndex === index ? "active" : ""}`}>
                            {index + 1}
                        </div>
                        <p className="step-title">{step.title}</p>
                    </div>
                ))}
            </div>
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ opacity: "-100%" }}
                transition={{ duration: 0.5, }}
                className="stepper-right-panel">
                <Routes>
                    {steps.map((step, index) => (
                        <Route
                            key={index}
                            path={step.path}
                            element={
                                <div className="content-box">
                                    <h2>{step.title}</h2>
                                    <div className="step-content">{step.component}</div>
                                    <div className="button-group">
                                        <button
                                            onClick={handlePrevious}
                                            disabled={currentStepIndex === 0}
                                            hidden={currentStepIndex === 0 || currentStepIndex === 4}
                                            className="stepper-btn stepper-btn-prev"
                                        >
                                            Previous Step
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            hidden={currentStepIndex === 4}
                                            disabled={currentStepIndex === steps.length - 1}
                                            className="stepper-btn stepper-btn-next"
                                        >
                                            Next Step
                                        </button>
                                    </div>
                                </div>
                            }
                        />
                    ))}
                    {/* Redirect to the first step if no sub-route is provided */}
                    <Route path="*" element={<Navigate to="choose-role" />} />
                </Routes>
            </motion.div>
        </div>
    );
};

export default Stepper;
