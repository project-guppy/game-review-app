import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import LogIn from "./components/login";
import Home from "./components/home";
import SignUp from "./components/signup";
import About from "./components/about";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div className="appNavbar">
            <Navbar />
          </div>
          
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/login" component = {LogIn} />
            <Route exact path = "/signup" component = {SignUp} />
            <Route exact path = "/About" component = {About} />
          </Switch>
        </BrowserRouter>     
    </div>
  );
}

export default App;