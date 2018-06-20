import React, { Component } from "react";
import Quotes from "./Components/Quotes/QuotesComponent";
import "./App.css";
import "../node_modules/animate.css/animate.css";

class App extends Component {
  render() {
    return (
      <div>
        <Quotes />
      </div>
    );
  }
}

export default App;
