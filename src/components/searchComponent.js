import React, { Component } from 'react';
// Here we will import the quotesComponent and the backgroundComponent.
// The idea is to work with what they give back as response.


const quotes = [

  {
          "quote": "In fact, it comes to this: nobody is capable of really thinking about anyone, even in the worst calamity. For really to think about someone means thinking about that person every minute of the day, without letting ones thoughts be diverted by anything- by meals, by a fly that settles on ones cheek, by household duties, or by a sudden itch somewhere. But there are always flies and itches. Thats why life is difficult to live.\n    \n    Albert Camus,\n    \n      The Plague",
          "author": "Albert Camus",
          "likes": 95,
          "tags": [
              "life"
          ],
          "pk": 60494,
          "image": null
  },

  {
          "quote": "Diamonds are glorified stones",
          "author": "Marilyn Monroe",
          "likes": 100,
          "tags": [
              "diamonds"
          ],
          "pk": 60494,
          "image": null
  },

  {
          "quote": "I'm freakin' smart y'all.",
          "author": "Albert Einstein",
          "likes": 195,
          "tags": [
              "smart"
          ],
          "pk": 60494,
          "image": null
  }
];

class Search extends Component {
  //set the initial state of search to empty string
  constructor(){
    super();
    this.state = {
      search: '',
      quotes: quotes
    };
    this.updateSearch = this.updateSearch.bind(this)
    this.displayQuote = this.displayQuote.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  displayQuote(quotes){

    return this.state.quotes.map((currentQuote) =>

         currentQuote.quote.includes(this.state.search) || currentQuote.author.includes(this.state.search) || currentQuote.tags.includes(this.state.search)
         ?
         currentQuote.quote + currentQuote.author
         :
         console.log('Sorry, try again')

       )
     }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  handleClick (e){
    e.preventDefault();
    this.state.search !== ""
    ?
    this.displayQuote()
    :
    null

  }

  render(

  ) {

//To show the image in the background.
// Take the response from Unsplash
// if the keyword matches any of the tags of the image,
// show the image
// Option 1: Set the image of the quote as this image and set it a background
// Option 2: Set the image as a background of the element where the quote appears

  return(
    <div>

      <input
       type='text'
       placeholder='Insert a keyword'
       value={this.state.search}
       onChange={this.updateSearch}
      />
      <button
        onClick={this.handleClick}>
        Search
      </button>
    </div>

  )}
}


export default Search;
