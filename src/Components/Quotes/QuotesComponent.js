import React from "react";
import { Animated } from "react-animated-css";
import { Button } from "reactstrap";
import CardComponent from "./CardComponent";
import SocialMedia from "../SocialMedia";
import "./Quote.css";

// import { getQuote } from "./QuotesApi";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0,
      animated: false
    };
    this.animationTime();

    // this.onNextQuote = this.nextQuote.bind(this);
    // this.onPreviousQuote = this.previousQuote.bind(this);
  }

  componentDidMount() {
    // this.loadSocialPlugin();
    // getQuote()
    //   .then(res => {
    //     const quotes = res.data.results;
    //     this.setState({ quotes });
    //   })
    //   .catch(err => console.log(err));
  }

  onNextQuote() {
    const index = this.state.quoteIndex;
    const quoteSize = this.props.quotes.length - 1;
    console.log("nextQuote");
    if (index < quoteSize) {
      this.setState({
        quoteIndex: index + 1,
        animated: false
      });
    } else {
      this.setState({
        quoteIndex: 0,
        animated: false
      });
    }
    this.animationTime();
  }

  loadSocialPlugin() {
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


  onPreviousQuote() {
    const index = this.state.quoteIndex;
    const quoteSize = this.props.quotes.length - 1;
    if (index < quoteSize && index > 0) {
      console.log(this.state.quoteIndex);
      this.setState({
        quoteIndex: this.state.quoteIndex - 1,
        animated: false
      });
    }
    this.animationTime();
  }

  animationTime() {
    setTimeout(() => {
      this.setState({ animated: true });
    }, 50);
  }

  renderQuoteAnimate() {
    let quotes = this.props.quotes[this.state.quoteIndex];
    const style = {
      display: this.state.animated ? "" : "none"
    };
    return (
      // <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
      //   <p>"{quotes.quote}"</p>
      // </Fade>

      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={true}
        style={style}
      >
        <span className="quotation">{quotes.quote}</span>
      </Animated>
    );
  }

  render() {
    const showAll = this.props.showAll;
    const quotes = this.props.quotes;
    let quote = quotes[this.state.quoteIndex].quote;
    let image = quotes[this.state.quoteIndex].image;
    // let styleBack = {
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    //   backgroundImage: `url(${image})`
    // };
    return (
      <div className={showAll ? "wrap" : "container"}>
        <div className="screen">
          {/* BackgroundComponent */}
          <img src={image} />
        </div>

        <div className="d-flex justify-content-center p-3">
          <Button onClick={this.props.onShowList}>
            {showAll ? "Show All" : "Slide"}
          </Button>
        </div>
        {showAll ? (
          <div style={{ display: showAll ? "block" : "none" }}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="p-2">
                <i
                  className="arrow left"
                  onClick={this.onPreviousQuote.bind(this)}
                />
              </div>
              <div className="slide-content p-5">
                {this.renderQuoteAnimate()} <br />
              </div>
              <div className="p-2">
                <i
                  className="arrow right"
                  onClick={this.onNextQuote.bind(this)}
                />
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: showAll ? "none" : "block" }}>
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div>
                <CardComponent quote={quotes} />
              </div>
            </Animated>
          </div>
        )}
        <div className={showAll ? "bottom" : "bottomCenter"}>
          <SocialMedia 
          quote={quote} />
        </div>
      </div>
    );
  }
}

export default Quotes;
