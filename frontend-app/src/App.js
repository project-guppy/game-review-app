import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import LogIn from "./components/login";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/login" component = {LogIn} />
          </Switch>
        </BrowserRouter>     
    </div>
  );
}

export default App;