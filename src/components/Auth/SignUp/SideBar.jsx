import React from 'react'
import './ChooseRole.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="logo">SCALA TECHNOLOGIES</div>
            <ul className="step-list">
                <li className="step active-step">
                    <span className="step-number">1</span> CHOOSE ROLE
                </li>
                <li className="step inactive-step">
                    <span className="step-number">2</span> USER INFO
                </li>
                <li className="step inactive-step">
                    <span className="step-number">3</span> BUSINESS DETAILS
                </li>
                <li className="step inactive-step">
                    <span className="step-number">4</span> TERMS & POLICIES
                </li>
                <li className="step inactive-step">
                    <span className="step-number">5</span> VERIFICATION
                </li>
            </ul>
        </div>
    )
}

export default SideBar