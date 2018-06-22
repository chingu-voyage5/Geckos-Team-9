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

const images = [
    {
      "id": "eOLpJytrbsQ",
      "created_at": "2014-11-18T14:35:36-05:00",
      "width": 4000,
      "height": 3000,
      "color": "#A7A2A1",
      "likes": 286,
      "liked_by_user": false,
      "description": "A man drinking a coffee.",
      "user": {
        "id": "Ul0QVz12Goo",
        "username": "ugmonk",
        "name": "Jeff Sheldon",
        "first_name": "Jeff",
        "last_name": "Sheldon",
        "instagram_username": "instantgrammer",
        "twitter_username": "ugmonk",
        "portfolio_url": "http://ugmonk.com/",
        "profile_image": {
          "small": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41",
          "medium": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
          "large": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202"
        },
        "links": {
          "self": "https://api.unsplash.com/users/ugmonk",
          "html": "http://unsplash.com/@ugmonk",
          "photos": "https://api.unsplash.com/users/ugmonk/photos",
          "likes": "https://api.unsplash.com/users/ugmonk/likes"
        }
      },
      "current_user_collections": [],
      "urls": {
        "raw": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f",
        "full": "https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f",
        "regular": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
        "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
        "thumb": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
      },
      "links": {
        "self": "https://api.unsplash.com/photos/eOLpJytrbsQ",
        "html": "http://unsplash.com/photos/eOLpJytrbsQ",
        "download": "http://unsplash.com/photos/eOLpJytrbsQ/download"
      }
    },
    // more photos ...
  ]



class Search extends Component {
  //set the initial state of search to empty string
  constructor(){
    super();
    this.state = {
      search: '',
      quotes: quotes,
      paragraph: '',
      images: images
    };
    this.updateSearch = this.updateSearch.bind(this)
    this.displayQuote = this.displayQuote.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.displayImage = this.displayImage.bind(this)
    console.log(this);
  }



  displayQuote(quotes){

    return quotes.map((currentQuote) =>

         currentQuote.quote.includes(this.state.search) || currentQuote.author.includes(this.state.search) || currentQuote.tags.includes(this.state.search)
         ?
         this.state.paragraph = currentQuote.quote + currentQuote.author
         :
         console.log('Sorry, try again')
       )
     }

  updateSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  handleClick (e){
    e.preventDefault();
    this.state.search !== ""
    ?
    this.setState({
      paragraph: this.displayQuote(quotes)
    })
    :
    null

  }

  displayImage (images) {
    return images.forEach(image)

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

    <br/>

    <p>{this.state.paragraph}</p>

    {this.displayImage()}

    </div>

  )}
}


export default Search;
