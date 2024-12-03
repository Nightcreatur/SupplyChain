import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

import Facebook from '../../../assets/images/Facebook.svg'
import Google from '../../../assets/images/Google.svg'
import Background from '../../../assets/images/bg.svg'
import { useState } from 'react';
import { motion } from "framer-motion"

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            navigate("/dashboard");
        } catch (err) { err }
    };


    const [shown, setShown] = useState(false);



    const isShown = () => {
        setShown(!shown)
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .4 }}
            exit={{ opacity: 0 }}


            className='login-app-container'>
            <div className='login-left-panel'>
                <img className='bg' src={Background} alt="" />
            </div>
            <div className='login-right-panel'>
                <div className="login-form">
                    <h1 className='login-text'>Login</h1>
                    <form className='reset-style'>
                        <div className="login-form-group">
                            <label>Email Address</label>
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="username@gmail.com" />
                        </div>
                        <div className="login-form-group">
                            <label>Password</label>
                            <input type={shown ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="********" />

                            {/* {isShown ? <EyeClosed onClick={isShown} /> : <Eye onClick={isShown} />} */}

                        </div>
                        <Link to={'/forget'}><a className="forgot-password">Forgot Password?</a></Link>
                        <button onClick={handleSubmit} className="btn primary">Sign In</button>
                        <p className='or'>Or</p>
                        <button className="btn secondary "><img className='google' src={Google} alt="" /> Sign in with Google</button>
                        <button className="btn secondary "><img className='facebook' src={Facebook} alt="" /> Sign in with Facebook</button>
                    </form>
                    <p className='noacc'>
                        Don&#39;t have an account? <Link to='/signup' className='signup-text' >Sign up</Link>
                    </p>
                </div>
            </div>

        </motion.div>
    );
};

export default LoginForm;
