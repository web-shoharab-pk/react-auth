import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import fakedata from './components/FakeData/FakeData.js'
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import SignUp from './components/SignUP/SignUp';

function App() {
  console.log(fakedata);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/destination/:ticketCategory">
              <Destination />
          </Route>
          <Route path="/destination">
              <Destination />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/">
            {/* {
              fakedata.map(data => <Home data={data} />)
            } */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
