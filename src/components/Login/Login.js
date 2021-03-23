import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import facebook from './../images/fblogo.png'
import google from './../images/googlelogo.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const handlefacebookLogin = () => {
        console.log("clicked");
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 form-div">
                    <form action="">
                        <h1>Login</h1>
                        <div>
                            <input type="email" placeholder="Email" required />
                            <br /> <br />
                            <input type="password" placeholder="Password" required />
                            <br /> <br />
                            <input className="login-btn" type="submit" value="Login" />
                        </div>
                        <br />
                        <p>Don’t have an account? <Link style={{ color: 'orange' }} to="/signup">Create an account</Link></p>
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

export default Login;