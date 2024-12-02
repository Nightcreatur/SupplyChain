import React, { useState } from "react";
import "./SetNewPassword.css";
import { useNavigate } from "react-router-dom";


const SetNewPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {

            navigator('/resetSuccesful')
        }




    };

    return (
        <div className="reset-password-container">
            <h2 className="title">Set new password</h2>
            <p className="subtitle">
                At least 8 characters, one uppercase letter, one number, one special character
            </p>
            <form className="reset-form" onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input-field"
                    required
                />
                <button type="submit" className="reset-button">Reset Password</button>
            </form>
        </div>
    );
};

export default SetNewPassword;
