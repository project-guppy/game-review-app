import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import LogIn from "./components/login";
import Home from "./components/home";
import SignUp from "./components/signup";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
          </div>
          
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/login" component = {LogIn} />
            <Route exact path = "/signup" component = {SignUp} />
          </Switch>
        </BrowserRouter>     
    </div>
  );
}

export default App;