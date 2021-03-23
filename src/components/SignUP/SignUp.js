import React from 'react';
import './SignUp.css'
import facebook from './../images/fblogo.png'
import google from './../images/googlelogo.png'
import { Link } from 'react-router-dom';


const SignUp = () => {
    const handlefacebookLogin = () => {
        console.log("clicked");
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 form-div">
                    <form action="">
                        <h1>Sign Up</h1>
                        <div>
                            <input type="text" placeholder="Name" required />
                            <br /> <br />
                            <input type="email" placeholder="Email" required />
                            <br /> <br />
                            <input type="password" placeholder="Password" required />
                            <br /> <br />
                            <input type="password" placeholder="Confirm Password" required />
                            <br /> <br />
                            <input className="login-btn" type="submit" value="Sign Up" />
                        </div>
                        <br />
                        <p> have an account? <Link style={{ color: 'orange' }} to="/login">Login</Link></p>
                    </form>
                    <br />
                    <h4> or </h4>
                    <br />
                    <div className="loginWithfg">
                        <button onClick={handlefacebookLogin}> <img src={facebook} alt="" /> Continue with Facebook</button>
                        <br /> <br />
                        <button> <img src={google} alt="" /> Continue with Google</button>
                    </div>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        </div>
    );
};

export default SignUp;