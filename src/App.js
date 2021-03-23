import './App.css';
import React, { createContext, useState } from "react";
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(fakedata);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <PrivateRoute path="/destination/:ticketCategory">
              <Destination />
            </PrivateRoute>
            <PrivateRoute path="/destination">
              <Destination />
            </PrivateRoute>
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
