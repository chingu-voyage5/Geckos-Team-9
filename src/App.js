import React, { Component } from "react";
import "./App.css";
import { Button } from "reactstrap";
import { Alert } from "reactstrap";
import Search from './components/searchComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.searchThis = this.searchThis.bind(this)

  }

    searchThis(e){
      this.setState({
        searchTerm: e.target.value
      });
    }

  render() {
    return (
      <div className="App">

        <Search searchTerm={this.state.searchTerm}
                searchThis={this.searchThis}
        />

      </div>
    );
  }
}

export default App;
