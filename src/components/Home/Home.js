import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css'

const Home = () => {

    const history = useHistory();
    const handleBookingTicket = (ticketCategory) => {
        history.push(`/destination/${ticketCategory}`)
        console.log("clicked");
    }


    return (
        <div className="container d-flex d-flex justify-content-around align-items-center">
            <div className="row">
                <div className="col-md-3 my-3">
                    <div className="ticket-div-1 background">
                        <h1>one time ticket</h1>
                        <button onClick={() => handleBookingTicket("one-time-ticket")} className="btn my-5 btn-warning py-3 px-5 fs-5">BUY NOW</button>
                        <h1>$100</h1>
                    </div>
                </div>
                <div className="col-md-3 my-3">
                    <div className="ticket-div-2 background">
                        <h1>one day pass</h1>
                        <button  onClick={() => handleBookingTicket("one-day-pass")} className="btn my-5 btn-warning py-3 px-5 fs-5">BUY NOW</button>
                        <h1>$500</h1>
                    </div>
                </div>
                <div className="col-md-3 my-3">
                    <div className="ticket-div-3 background">
                        <h1>monthly pass</h1>
                        <button  onClick={() => handleBookingTicket("monthly-pass")} className="btn my-5 btn-warning py-3 px-5 fs-5">BUY NOW</button>
                        <h1>$1500</h1>
                    </div>
                </div>
                <div className="col-md-3 my-3">
                    <div className="ticket-div-4 background">
                        <h1>annual pass</h1>
                        <button onClick={() => handleBookingTicket("annual-pass")} className="btn my-5 btn-warning py-3 px-5 fs-5">BUY NOW</button>
                        <h1>$9000</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;