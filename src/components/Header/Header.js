import React from 'react';
import './Header.css'
import logo from './../images/logo2.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-container navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <img className="me-5" src={logo} alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active fs-4 mx-5" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-4 mx-5" to="destination">Destination</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active mx-5 fs-4" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                            <button type="button" className="btn btn-warning mx-5 fs-5 mt-1">Login</button>
                            </li>                          
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;