import React, { Component } from "react";
import Quotes from "./Components/Quotes/QuotesComponent";
import Search from "./Components/searchComponent";
import { getQuotes, getQuotesRandom } from "./Components/Quotes/QuotesApi";

import "./App.css";
import "../node_modules/animate.css/animate.css";

class App extends Component {
 

  constructor() {
    super();

  
    this.myRef = React.createRef();
    this.state = {
      searchTerm: "",
      backgroundURL: "",
      quotes: [
        {
          quote:
            "",
          author: "",
          likes: 0,
          tags: [],
          pk: 0,
          image: ""
        }
      ],
      showAll: true
    };
    this.onSearchThis = this.onSearchThis.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onShowList = this.onShowList.bind(this);

    getQuotesRandom()
      .then(res => {
        const quotes = res.data.results;
        this.setState({quotes});
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.loadSocialPlugin();

    // fetch("https://api.unsplash.com/photos/random", {
    //   headers: {
    //     Authorization:
    //       "Client-ID d870e34414bd653b93aba9430261a7535a80cedede08dca342de5b0424cb6f46"
    //   }
    // })
    //   .then(result => result.json())
    //   .then(json => {
    //     this.setState({ backgroundURL: json.urls.regular });
    //   });
  }

  loadSocialPlugin() {
    console.log("Fb init");
    /*eslint-disable no-undef*/
    window.fbAsyncInit = function() {
      FB.init({
        appId: "1907512692601823",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v3.0"
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    /*eslint-disable no-undef*/
  }

  onShowList() {
    console.log("Clicked!!!");
    this.setState({
      showAll: !this.state.showAll
    });
  }

  onSearchThis(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  onSearch(e) {
    e.preventDefault();
    console.log("Clicked onSearch");
    let tag = this.state.searchTerm;
    if (tag !== "") {
      console.log("Button clicked: " + tag);
      getQuotes(tag)
        .then(res => {
          const quotes = res.data.results;
          this.setState({quotes});
        })
        .catch(err => console.log(err));
    } else {
      console.log("Ninguna palabra");
    }
  }

  render() {
    // document.querySelector("body").background = this.state.backgroundURL;
    // https://source.unsplash.com/category/nature/1920x1080
    const backgroundURL =
      "https://source.unsplash.com/category/nature/1920x1080";
    let quotes = this.state.quotes;
    const showAll = this.state.showAll;
    return (
      <div className={showAll ? "wrap" : ""}>
        <div className="top d-flex flex-row justify-content-center">
          <Search
            searchTerm={this.state.searchTerm}
            onSearch={this.onSearch}
            onSearchThis={this.onSearchThis}
          />
        </div>

        <Quotes
          quotes={quotes}
          background={backgroundURL}
          showAll={showAll}
          onShowList={this.onShowList}
        />
      </div>
    );
  }
}

export default App;
