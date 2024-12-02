import React, { useState } from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = ({ handleNext, }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("A reset link has been sent to your email address.");
        // Add logic to handle sending the reset link
    };

    return (
        <div className="forgot-password-container">

            <div >
                <div className="forget-form-container">
                    <h2>Forgot Password?</h2>
                    <p>Enter your registered email to reset your password.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="forget-form-group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button onClick={handleNext} type="submit" className="btn primary">
                            Send Reset Link
                        </button>
                    </form>
                    <Link to='/login'> <button className="btn secondary" >
                        Back to Login Page
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
