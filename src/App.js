import React, { Component } from "react";
import Quotes from "./Components/Quotes/QuotesComponent";
import "./App.css";
import "../node_modules/animate.css/animate.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundURL: ""
    };
  }
  
  componentDidMount() {
    fetch("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization:
          "Client-ID d870e34414bd653b93aba9430261a7535a80cedede08dca342de5b0424cb6f46"
      }
    })
      .then(result => result.json())
      .then(json => {
        this.setState({ backgroundURL: json.urls.regular });
      });
  }
  render() {
    document.querySelector("body").background = this.state.backgroundURL;
    return (
      <div className="wrap">
        <div className="container">
          <h1 style={{ color: "white" }}>
            search bar component will replace this h1
          </h1>
        </div>
        <Quotes />
        <h1 style={{ color: "white" }}>
          social component will replace this h1
        </h1>
      </div>
    );
  }
}

export default App;
