import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import facebook from './../images/fblogo.png'
import google from './../images/googlelogo.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/destination" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);



    const loginWithEmailPassword = () => {
        firebase.auth().signInWithEmailAndPassword()
            .then((userCredential) => {
                // Signed in 
                const { displayName, email } = userCredential.user;
                const signInUser = { name: displayName, email }
                console.log(signInUser);
                setLoggedInUser(signInUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const handlefacebookLogin = () => {
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

    const handleGoogleLogin = () => {
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
                    <form action="">
                        <h1>Login: {loggedInUser.name}</h1>
                        <div>
                            <input type="email" placeholder="Email" required />
                            <br /> <br />
                            <input type="password" placeholder="Password" required />
                            <br /> <br />
                            <input onClick={loginWithEmailPassword} className="login-btn" type="submit" value="Login" />
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
                        <button onClick={handleGoogleLogin}> <img src={google} alt="" /> Continue with Google</button>
                    </div>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        </div>
    );
};

export default Login;