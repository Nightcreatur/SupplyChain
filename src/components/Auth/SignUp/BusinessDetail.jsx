import React from 'react';
import './BusinessDetails.css';

const BusinessDetails = () => {
    return (
        <div className="business-details-container">

            <p className="form-subtitle">
                Please fill out the business details form. Make sure all the details and information are absolutely true.
            </p>
            <form className="business-details-form">
                <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" id="companyName" placeholder="Enter company name" />
                </div>
                <div className="form-group">
                    <label htmlFor="registrationNumber">Registration Number</label>
                    <input type="text" id="registrationNumber" placeholder="Enter registration number" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" placeholder="Enter location" />
                </div>
                <div className="form-group">
                    <label htmlFor="verificationDocuments">Verification Documents</label>
                    <div className="file-upload">
                        <input type="file" id="verificationDocuments" accept=".pdf" />
                        <p>Drag & Drop or <span>choose file</span> to upload</p>
                        <small>Supported format: pdf</small>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default BusinessDetails;
