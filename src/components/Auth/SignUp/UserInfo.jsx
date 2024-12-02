import React from 'react';
import './UserInfo.css';

const UserInfo = () => {
    return (
        <div className="user-info-form">

            <p>
                Please fill out the user information form. Make sure all the details and information are absolutely true.
            </p>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">Full Name</label>
                    <div className="name-fields">
                        <input type="text" id="firstName" placeholder="First Name" />
                        <input type="text" id="lastName" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Email Address" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" placeholder="User Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="Confirm Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" placeholder="Phone Number" />
                </div>

            </form>
        </div>
    );
};

export default UserInfo;
