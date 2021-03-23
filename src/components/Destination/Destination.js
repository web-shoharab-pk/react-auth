import React from 'react';
import './Destination.css'
import mapImg from './../images/mapImage.png'

const Destination = () => {
    return (
        <div className="container mt-5">
            <div className="row destination">
                <div className="col-md-3 pick-div p-3">
                    <form className="py-3">
                        <p>Pick From</p>
                        <input type="text"  placeholder="From"/>
                        <br /> <br />
                        <p>Pick To</p>
                        <input type="text" placeholder="To"/> 
                        <br />  <br /> 
                        <input type="date" placeholder="To"/> 
                        <br /> <br />
                        <input className="login-btn" type="submit" value="Search" />
                    </form>
                </div>
                <div className="col-md-9">
                    <img src={mapImg} alt="map" />
                </div>
            </div>
        </div>
    );
};

export default Destination;