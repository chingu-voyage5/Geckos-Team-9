import React from "react";
import { getQuote } from "./QuotesApi";
import { Section, SectionsContainer } from "react-fullpage";

class Quotes extends React.Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    getQuote()
      .then(res => {
        const quotes = res.data.results;
        this.setState({ quotes });
      })
      .catch(err => console.log(err));
  }

  render() {
    let options = {
      activeClass: "active", // the class that is appended to the sections links
      anchors: [], // the anchors for each sections
      arrowNavigation: true, // use arrow keys
      className: "SectionContainer", // the class name for the section container
      delay: 1000, // the scroll animation speed
      navigation: true, // use dots navigatio
      scrollBar: false, // use the browser default scrollbar
      sectionClassName: "Section", // the section class name
      sectionPaddingTop: "10px", // the section top padding
      sectionPaddingBottom: "10px", // the section bottom padding
      verticalAlign: false // align the content of each section vertical
    };

    return (
      //   <div className="fullpage">
      //     {this.state.quotes.map(quotes => (
      //       <div className="section" key={quotes.pk}>
      //         {quotes.quote}
      //       </div>
      //     ))}
      //   </div>
      <SectionsContainer {...options}>
        <Section>Page 1</Section>
        <Section>Page 2</Section>
        <Section>Page 3</Section>
      </SectionsContainer>
    );
  }
}

// function Quotes() {
/*
<SectionsContainer {...options} >
        <Section>Page 1</Section>
        <Section>Page 2</Section>
        <Section>Page 3</Section>
      </SectionsContainer>
       */
//   return <div>{test}</div>;
// }

export default Quotes;
