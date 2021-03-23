import React, { useContext } from 'react';
import './SignUp.css'
import facebook from './../images/fblogo.png'
import google from './../images/googlelogo.png'
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { useHistory, useLocation } from 'react-router-dom'
import { UserContext } from '../../App';


// manually signup from niye kaj kora hoini sorry

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const SignUp = () => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/destination" } };
    const [  setLoggedInUser] = useContext(UserContext);



    const handleSignUpWithFb = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }

                // The signed-in user info.
                setLoggedInUser(signInUser);
                history.replace(from);
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                console.log(errorCode, errorMessage);
            });
        console.log("clicked");
    }


    const handleSignUpWithGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }

                // The signed-in user info.
                setLoggedInUser(signInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 form-div">
                    <form action="" >
                        {

                        }
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
                        <button onClick={handleSignUpWithFb}> <img src={facebook} alt="" /> Continue with Facebook</button>
                        <br /> <br />
                        <button onClick={handleSignUpWithGoogle}> <img src={google} alt="" /> Continue with Google</button>
                    </div>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        </div>
    );
};

export default SignUp;