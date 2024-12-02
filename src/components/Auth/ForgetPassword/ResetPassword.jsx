import { useState } from "react";
import "./ResetPassword.css";

const PasswordReset = ({ handleNext, handlePrevious }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleContinue = () => {
        alert(`Entered OTP: ${otp.join("")}`);
    };

    return (
        <div className="password-reset-container">
            <h2>Password Reset</h2>
            <p>Enter the OTP code sent to <strong>sandeeptimilsena@gmail.com</strong></p>
            <div className="otp-input-container">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        className="otp-input"
                    />
                ))}
            </div>
            <button className="continue-button" onClick={handleNext}>
                Continue
            </button>
            <p className="resend-code">
                Didn’t receive the code? <a href="#">Resend Code</a>
            </p>
        </div>
    );
};

export default PasswordReset;
