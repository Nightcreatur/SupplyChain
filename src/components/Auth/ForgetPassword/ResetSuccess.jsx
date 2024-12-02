import React from 'react'
import './ResetSuccess.css'
import { Link } from 'react-router-dom'

const ResetSuccess = () => {
    return (
        <div className='container-reset'>
            <div className='reset-container'>
                <h2 className='success-title'>
                    Password Reset Success
                </h2>
                <p className='success-subtitle'>Hooray! your password has been reset.</p>
                <Link to='/login'><button className='btn'>Go back to Login</button></Link>
            </div>
        </div>
    )
}

export default ResetSuccess