import React, { Component } from "react";
import "./App.css";
import SocialMedia from "./Components/SocialMedia";

class App extends Component {
  componentDidMount() {
    /*eslint-disable no-undef*/
    window.fbAsyncInit = function() {
      FB.init({
        appId            : '1907512692601823',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.0'
      });
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
     /*eslint-disable no-undef*/
     
}
  render() {
    return (
      <div className="App">
        <SocialMedia quote="That's why fantasies were dangerous. You could make believe all you wanted, but at the end of the day, you couldn't escape reality.Leona Morgan,Worth the Risk"/>
      </div>
    );
  }
}

export default App;
