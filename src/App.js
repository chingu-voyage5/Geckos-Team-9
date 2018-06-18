import React, { Component } from "react";
import Quotes from "./Components/Quotes/QuotesComponent"
import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import { Alert } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Quotes></Quotes>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to our awesome project!</h1>
        </header> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <Alert color="primary">The application has boostrap installed.. Woola!! </Alert> */}
      </div>
    );
  }
}

export default App;
