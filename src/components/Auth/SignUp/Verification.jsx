import React, { useState } from 'react';
import './Verification.css';

const Verification = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        const value = element.value.replace(/[^0-9]/g, ""); // Allow only numbers
        if (value.length > 1) return; // Allow only single character
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Focus the next input if the value is entered
        if (value && element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleResendCode = () => {
        alert("Verification code resent!");
    };

    const handleSubmit = () => {
        alert(`OTP entered: ${otp.join("")}`);
    };

    return (
        <div className="verify-container">

            <p className="verify-subtitle">
                We’ve sent you a verification number in your email address. Please enter the verification number.
            </p>
            <div className="otp-container">
                {otp.map((data, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()} // Select text when focused
                        className="otp-input"
                    />
                ))}
            </div >
            <div className="confirm-btn">
                <button
                    type="button"
                    className="verify-button"
                    onClick={handleSubmit}
                    disabled={otp.includes("")} // Disable if OTP is incomplete
                >
                    Create account
                </button>
                <button
                    type="button"
                    className="resend-button"
                    onClick={handleResendCode}
                >
                    Resend Code
                </button>
            </div>
        </div>
    );
};

export default Verification;
