import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundURL: ''
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
        })
    document.body.style.background = this.state.backgroundURL;
  }
  render() {
    console.log("from render", document.body.background);
    document.querySelector("body").background = this.state.backgroundURL;
    return (
      <div className="App">
        <h1>search bar component will replace this h1</h1>
        <h1>quote cards or slider component will replace this h1</h1>
        <h2>
          it might contain the picker for cards/slider or maybe that is it's own
          component?
        </h2>
        <h1>social component will replace this h1</h1>
      </div>
    );
  }
}

export default App;
