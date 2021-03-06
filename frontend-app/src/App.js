import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import SignUp from "./components/SignUpPage";
import About from "./components/About";
import Footer from "./components/Footer";
import GameDetailPage from "./components/GameDetailPage";

import testGame from "./testGame.json";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="appNavbar">
          <Navbar />
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/about" component={About} />
          <Route path="/game/:id">
            <GameDetailPage game={testGame} />
          </Route>
        </Switch>

        <div className="footer-wrap">
          <Footer />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
