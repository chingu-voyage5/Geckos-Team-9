import React, { Component } from "react";
import Quotes from "./Components/Quotes/QuotesComponent";
import Search from "./Components/Search/searchComponent";
import { getQuotes, getQuotesRandom } from "./Components/Quotes/QuotesApi";
import {
  getPhotos,
  getPhotosRandom
} from "./Components/Background/BackgroundApi";
import * as Icon from "react-feather";
import "./App.css";
import "../node_modules/animate.css/animate.css";

class App extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      loading: false,
      searchTerm: "",
      backgroundURL: "",
      quotes: [
        {
          quote: "",
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

    // this.joinQuotesWithBackground();
  }

  componentDidMount() {
    this.loadSocialPlugin();
    this.getApiJoinData().then(res =>
      this.setState({
        quotes: res
      })
    );
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

  async getApiJoinData() {
    let quotes = await getQuotesRandom()
      .then(res => res.data.results)
      .catch(err => console.error("Error getQuotesRandom: " + err));
    let background = await getPhotosRandom()
      .then(res => res.data)
      .catch(err => console.error("Error getPhotosRandom: " + err));
    console.log("Quotes " + quotes.length);
    console.log("Background " + background.length);
    // const QuoteBack = quotes.map(item =>
    //              background.map( img => item.image = img.urls.regular));

    quotes.map((q, i) => {
      q.image = background[i].urls.regular;
      q.small = background[i].urls.small;
    });

    return quotes;
  }

  async searchQuoteByKey(tag) {
    let quotes = await getQuotes(tag)
      .then(res => res.data.results)
      .catch(err => console.error("Error getQuotes: " + err));
    let background = await getPhotos(tag)
      .then(res => res.data)
      .catch(err => console.error("Error getPhotos: " + err));
    console.log("Quotes " + quotes.length);
    console.log("Background " + background.length);

    quotes.map((q, i) => {
      q.image = background[i].urls.regular;
      q.small = background[i].urls.small;
    });

    return quotes;
  }

  getQuotesOffline() {
    const quoteTest = [
      {
        quote:
          "Honey, if spending your life with Lysi is what makes you happy, then Im happy.\n    \n    Tiana Warner,\n    \n      Ice Crypt",
        author: "Tiana Warner",
        likes: 0,
        tags: ["happy", "romance", "lgbt", "gay", "love", "happiness"],
        pk: 61647,
        image: null
      },
      {
        quote:
          "But my heart felt swollen, and I finally just knew. It was as obvious as if Id known it my whole life. I was in love with a mermaid.\n    \n    Tiana Warner,\n    \n      Ice Massacre",
        author: "Tiana Warner",
        likes: 0,
        tags: ["romance", "mermaid", "lgbt", "love", "in-love"],
        pk: 61646,
        image: null
      },
      {
        quote:
          "Being in love was something you just knew, because your heart felt swollen and you never stopped thinking about him and you wondered how you were ever happy before.\n    \n    Tiana Warner,\n    \n      Ice Massacre",
        author: "Tiana Warner",
        likes: 0,
        tags: ["romance", "love", "in-love", "heart"],
        pk: 61645,
        image: null
      },
      {
        quote:
          "all i need is your hand in mine and an endless way\n    \n    farzad falsafi",
        author: "farzad falsafi",
        likes: 0,
        tags: ["romance", "love-quotes", "love"],
        pk: 61644,
        image: null
      },
      {
        quote:
          "Anyway. I think forcing yourself to keep up appearances and putting up this identity that isn't yours, a mask you don't wear when you're alone, is phony. If you have to do all that stuff to get someone to love you, then can you really say they love you and who you really are? Once you change yourself to win affection, to win love, I don't even know if you can still call you you. If you've built your relationship on pretense and lies, it'll probably fail in some way or another, and if you've fundamentally changed yourself, then it's not really you.\n    \n    Wataru Watari,\n    \n       5",
        author: "Wataru Watari",
        likes: 0,
        tags: [
          "romance",
          "masks",
          "social-capital",
          "change",
          "hachiman-hikigaya",
          "affection",
          "personality",
          "phony",
          "love"
        ],
        pk: 61643,
        image: null
      }
    ];
    const backgroundTest = [
      {
        id: "5g8exOobDjg",
        created_at: "2018-01-24T15:50:53-05:00",
        updated_at: "2018-05-18T13:57:29-04:00",
        width: 3000,
        height: 2000,
        color: "#CCE0E1",
        description: null,
        urls: {
          raw:
            "https://images.unsplash.com/photo-1516826989513-502b572b924e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=2fddada077ecb4272228e8104dcba003",
          full:
            "https://images.unsplash.com/photo-1516826989513-502b572b924e?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=7864b8f203f79ffb45880ab341f5a790",
          regular:
            "https://images.unsplash.com/photo-1516826989513-502b572b924e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=7e06d460ea2c75f0a27eb23038490ca6",
          small:
            "https://images.unsplash.com/photo-1516826989513-502b572b924e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=5bf1dae9eede060ed16da7c48e0f033b",
          thumb:
            "https://images.unsplash.com/photo-1516826989513-502b572b924e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=9b3147d80217a890cd22fa21b9850ca5"
        },
        links: {
          self: "https://api.unsplash.com/photos/5g8exOobDjg",
          html: "https://unsplash.com/photos/5g8exOobDjg",
          download: "https://unsplash.com/photos/5g8exOobDjg/download",
          download_location:
            "https://api.unsplash.com/photos/5g8exOobDjg/download"
        },
        categories: [],
        sponsored: false,
        likes: 105,
        liked_by_user: false,
        current_user_collections: [],
        slug: null,
        user: {
          id: "GxXYxeDbaas",
          updated_at: "2018-07-16T16:01:19-04:00",
          username: "kellysikkema",
          name: "Kelly Sikkema",
          first_name: "Kelly",
          last_name: "Sikkema",
          twitter_username: "kelsikkema",
          portfolio_url: "http://kelsikkema.myportfolio.com",
          bio:
            "Saved by grace // UX Design Manager //\r\nHobby Photographer & Hand Letterer. Insta: @inkypixels",
          location: "Boston",
          links: {
            self: "https://api.unsplash.com/users/kellysikkema",
            html: "https://unsplash.com/@kellysikkema",
            photos: "https://api.unsplash.com/users/kellysikkema/photos",
            likes: "https://api.unsplash.com/users/kellysikkema/likes",
            portfolio: "https://api.unsplash.com/users/kellysikkema/portfolio",
            following: "https://api.unsplash.com/users/kellysikkema/following",
            followers: "https://api.unsplash.com/users/kellysikkema/followers"
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1526415952331-f83a719c7554?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7ea48567bcbac67f3893754cb92b82dd",
            medium:
              "https://images.unsplash.com/profile-1526415952331-f83a719c7554?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=905a87ac06b6150884dd861a61a622cd",
            large:
              "https://images.unsplash.com/profile-1526415952331-f83a719c7554?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=cc54c9d3fe2eae536574e3da6ab31007"
          },
          instagram_username: "inkypixels",
          total_collections: 59,
          total_likes: 3091,
          total_photos: 446
        },
        exif: {
          make: "NIKON CORPORATION",
          model: "NIKON D500",
          exposure_time: "1/640",
          aperture: "2.8",
          focal_length: "40.0",
          iso: 800
        },
        views: 782835,
        downloads: 4820
      },
      {
        id: "r8sBnXdH63w",
        created_at: "2018-01-13T03:37:47-05:00",
        updated_at: "2018-05-18T13:53:58-04:00",
        width: 4321,
        height: 6548,
        color: "#E4B8A9",
        description: null,
        urls: {
          raw:
            "https://images.unsplash.com/photo-1515832228957-26b9a0f58d0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=80c7d7f1a55c0eb390af095766957565",
          full:
            "https://images.unsplash.com/photo-1515832228957-26b9a0f58d0e?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=9be37b909046c88fe0d0df25b97f6736",
          regular:
            "https://images.unsplash.com/photo-1515832228957-26b9a0f58d0e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=93ba5c6fb67e5c2e1fc097dbd5475904",
          small:
            "https://images.unsplash.com/photo-1515832228957-26b9a0f58d0e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=c34adb2b24505964f54616d1a5fe562b",
          thumb:
            "https://images.unsplash.com/photo-1515832228957-26b9a0f58d0e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=cdf20be1e4aa9852e6361a2303943959"
        },
        links: {
          self: "https://api.unsplash.com/photos/r8sBnXdH63w",
          html: "https://unsplash.com/photos/r8sBnXdH63w",
          download: "https://unsplash.com/photos/r8sBnXdH63w/download",
          download_location:
            "https://api.unsplash.com/photos/r8sBnXdH63w/download"
        },
        categories: [],
        sponsored: false,
        likes: 89,
        liked_by_user: false,
        current_user_collections: [],
        slug: null,
        user: {
          id: "iA8lPs0eMVY",
          updated_at: "2018-07-10T11:59:49-04:00",
          username: "zohre_nemati",
          name: "Zohre Nemati",
          first_name: "Zohre",
          last_name: "Nemati",
          twitter_username: "Zohre_nemati",
          portfolio_url: null,
          bio:
            "Photographer and Graphic Designer ** \r\nzeno.artstudio@gmail.com **\r\nMy instagram: Zohre_nematii",
          location: "Metairie LA",
          links: {
            self: "https://api.unsplash.com/users/zohre_nemati",
            html: "https://unsplash.com/@zohre_nemati",
            photos: "https://api.unsplash.com/users/zohre_nemati/photos",
            likes: "https://api.unsplash.com/users/zohre_nemati/likes",
            portfolio: "https://api.unsplash.com/users/zohre_nemati/portfolio",
            following: "https://api.unsplash.com/users/zohre_nemati/following",
            followers: "https://api.unsplash.com/users/zohre_nemati/followers"
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1510571714303-f03cef3982a6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=f265216f622061283a2f3f215b12362d",
            medium:
              "https://images.unsplash.com/profile-1510571714303-f03cef3982a6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=0d9138d3a58da48c10ecf739af5280aa",
            large:
              "https://images.unsplash.com/profile-1510571714303-f03cef3982a6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=3c8054959bbd5a89eeb5846568681ef1"
          },
          instagram_username: "zohre_nematii",
          total_collections: 0,
          total_likes: 13,
          total_photos: 29
        },
        exif: {
          make: "Canon",
          model: "Canon EOS 5D Mark IV",
          exposure_time: "1/125",
          aperture: "2.2",
          focal_length: "50.0",
          iso: 100
        },
        views: 498352,
        downloads: 2514
      },
      {
        id: "TRMLSoaqXh8",
        created_at: "2016-04-12T10:20:54-04:00",
        updated_at: "2018-05-18T13:05:42-04:00",
        width: 3888,
        height: 2592,
        color: "#D4C263",
        description:
          "Man and woman kissing in a field at La Fresneda, partially obscured by long waving grasses",
        urls: {
          raw:
            "https://images.unsplash.com/photo-1460470816937-cf9e02b6e266?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=dd57b4fca94375511431444197bb2c12",
          full:
            "https://images.unsplash.com/photo-1460470816937-cf9e02b6e266?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=15a3a7d093da7828fa73e3bee6cc4d76",
          regular:
            "https://images.unsplash.com/photo-1460470816937-cf9e02b6e266?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=f1ce0852f8f9c10bce6717513c24a865",
          small:
            "https://images.unsplash.com/photo-1460470816937-cf9e02b6e266?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=15fdb0397357c65d11b8c043f071602d",
          thumb:
            "https://images.unsplash.com/photo-1460470816937-cf9e02b6e266?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=640d2d01ec2c0092337e3e7bc4882549"
        },
        links: {
          self: "https://api.unsplash.com/photos/TRMLSoaqXh8",
          html: "https://unsplash.com/photos/TRMLSoaqXh8",
          download: "https://unsplash.com/photos/TRMLSoaqXh8/download",
          download_location:
            "https://api.unsplash.com/photos/TRMLSoaqXh8/download"
        },
        categories: [],
        sponsored: false,
        likes: 256,
        liked_by_user: false,
        current_user_collections: [],
        slug: null,
        user: {
          id: "z5HtScLZnEs",
          updated_at: "2018-06-28T18:06:19-04:00",
          username: "monmo",
          name: "Montse Monmo",
          first_name: "Montse",
          last_name: "Monmo",
          twitter_username: null,
          portfolio_url: "http://www.montsemorales.es",
          bio: "Breathing and creating since 1985",
          location: "Madrid",
          links: {
            self: "https://api.unsplash.com/users/monmo",
            html: "https://unsplash.com/@monmo",
            photos: "https://api.unsplash.com/users/monmo/photos",
            likes: "https://api.unsplash.com/users/monmo/likes",
            portfolio: "https://api.unsplash.com/users/monmo/portfolio",
            following: "https://api.unsplash.com/users/monmo/following",
            followers: "https://api.unsplash.com/users/monmo/followers"
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-fb-1460468718-82e7eb96555c.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=70c086a325b2ad50a33450f6f218fbd3",
            medium:
              "https://images.unsplash.com/profile-fb-1460468718-82e7eb96555c.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5828edbe5170abc118ab3c8d1582fd4d",
            large:
              "https://images.unsplash.com/profile-fb-1460468718-82e7eb96555c.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=5cc8bb458bac3a012391ead3972ac24a"
          },
          instagram_username: "montx22",
          total_collections: 1,
          total_likes: 6,
          total_photos: 17
        },
        exif: {
          make: "Canon",
          model: "Canon EOS 1000D",
          exposure_time: "1/200",
          aperture: "5.6",
          focal_length: "300.0",
          iso: 400
        },
        views: 17139250,
        downloads: 32003
      },
      {
        id: "7i9Ze0yitdc",
        created_at: "2015-05-28T02:07:53-04:00",
        updated_at: "2018-05-18T12:59:30-04:00",
        width: 3757,
        height: 2874,
        color: "#6A5B44",
        description: "Two people walking through a foggy area during sunset",
        urls: {
          raw:
            "https://images.unsplash.com/photo-1432793246943-0d41c5411eb3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=c7ee7bd39dc67efa92273893dab83796",
          full:
            "https://images.unsplash.com/photo-1432793246943-0d41c5411eb3?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=9c7c9fe7d6a3998944c5f68f879483a7",
          regular:
            "https://images.unsplash.com/photo-1432793246943-0d41c5411eb3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=78d3083c2012ade08b7c36b7f281599d",
          small:
            "https://images.unsplash.com/photo-1432793246943-0d41c5411eb3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=e81dad7c03faa54c0caa0f7a14916fad",
          thumb:
            "https://images.unsplash.com/photo-1432793246943-0d41c5411eb3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=8416102aa3959854fd55cf2417f7c042"
        },
        links: {
          self: "https://api.unsplash.com/photos/7i9Ze0yitdc",
          html: "https://unsplash.com/photos/7i9Ze0yitdc",
          download: "https://unsplash.com/photos/7i9Ze0yitdc/download",
          download_location:
            "https://api.unsplash.com/photos/7i9Ze0yitdc/download"
        },
        categories: [],
        sponsored: false,
        likes: 270,
        liked_by_user: false,
        current_user_collections: [],
        slug: null,
        user: {
          id: "4PVY13Txo7I",
          updated_at: "2018-06-27T11:00:05-04:00",
          username: "tlc",
          name: "Trina Christian",
          first_name: "Trina",
          last_name: "Christian",
          twitter_username: null,
          portfolio_url: null,
          bio: null,
          location: null,
          links: {
            self: "https://api.unsplash.com/users/tlc",
            html: "https://unsplash.com/@tlc",
            photos: "https://api.unsplash.com/users/tlc/photos",
            likes: "https://api.unsplash.com/users/tlc/likes",
            portfolio: "https://api.unsplash.com/users/tlc/portfolio",
            following: "https://api.unsplash.com/users/tlc/following",
            followers: "https://api.unsplash.com/users/tlc/followers"
          },
          profile_image: {
            small:
              "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc",
            medium:
              "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358",
            large:
              "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d"
          },
          instagram_username: null,
          total_collections: 0,
          total_likes: 0,
          total_photos: 12
        },
        exif: {
          make: "SONY",
          model: "DSC-TX10",
          exposure_time: "1/1600",
          aperture: "9.0",
          focal_length: "17.7",
          iso: 125
        },
        views: 2295558,
        downloads: 12358
      },
      {
        id: "csHw20wsqfs",
        created_at: "2016-12-07T01:45:52-05:00",
        updated_at: "2018-06-03T00:10:11-04:00",
        width: 5409,
        height: 3606,
        color: "#311C0F",
        description:
          "Happy, romantic couple holding each other on a sand beach during sunset in Praia de Grumari",
        urls: {
          raw:
            "https://images.unsplash.com/photo-1481093096777-9a83e3a284f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=4522745b61181eff614fe1e8db941275",
          full:
            "https://images.unsplash.com/photo-1481093096777-9a83e3a284f1?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=d2eea15c3b66f121182c82f79f1c23fd",
          regular:
            "https://images.unsplash.com/photo-1481093096777-9a83e3a284f1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=25f953f8168cda4fdb52fbb079a3eb51",
          small:
            "https://images.unsplash.com/photo-1481093096777-9a83e3a284f1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=66a0f25aa35702fab7d45f89fefcf720",
          thumb:
            "https://images.unsplash.com/photo-1481093096777-9a83e3a284f1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMxNjE3fQ&s=3aeb7f049f111288398fd0273f7e4b07"
        },
        links: {
          self: "https://api.unsplash.com/photos/csHw20wsqfs",
          html: "https://unsplash.com/photos/csHw20wsqfs",
          download: "https://unsplash.com/photos/csHw20wsqfs/download",
          download_location:
            "https://api.unsplash.com/photos/csHw20wsqfs/download"
        },
        categories: [],
        sponsored: false,
        likes: 201,
        liked_by_user: false,
        current_user_collections: [],
        slug: null,
        user: {
          id: "DRwLa2zqTv4",
          updated_at: "2018-07-08T16:36:00-04:00",
          username: "henrimeilhac",
          name: "henri meilhac",
          first_name: "henri",
          last_name: "meilhac",
          twitter_username: "byhenrimeilhac",
          portfolio_url: "http://www.henrimeilhac.com",
          bio:
            "director of this film > www.bluehydrangeafilm.com\r\nmake me famous henrimeilhac@icloud.com",
          location: null,
          links: {
            self: "https://api.unsplash.com/users/henrimeilhac",
            html: "https://unsplash.com/@henrimeilhac",
            photos: "https://api.unsplash.com/users/henrimeilhac/photos",
            likes: "https://api.unsplash.com/users/henrimeilhac/likes",
            portfolio: "https://api.unsplash.com/users/henrimeilhac/portfolio",
            following: "https://api.unsplash.com/users/henrimeilhac/following",
            followers: "https://api.unsplash.com/users/henrimeilhac/followers"
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1498435860869-925bd0f10a56?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=baa3b5b947d7a5ce5202269878bfe2da",
            medium:
              "https://images.unsplash.com/profile-1498435860869-925bd0f10a56?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=d6a5521fb93832d1fff2ca42e6043755",
            large:
              "https://images.unsplash.com/profile-1498435860869-925bd0f10a56?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=5fbb584f3ec2913374e5eab914671a54"
          },
          instagram_username: "henrimeilhac",
          total_collections: 0,
          total_likes: 26,
          total_photos: 17
        },
        exif: {
          make: "Canon",
          model: "Canon EOS 6D",
          exposure_time: "1/1250",
          aperture: "5.0",
          focal_length: "50.0",
          iso: 100
        },
        location: {
          title: "Praia de Grumari, Rio de Janeiro, Brazil",
          name: "Praia de Grumari",
          city: "Rio de Janeiro",
          country: "Brazil",
          position: {
            latitude: -23.0483215,
            longitude: -43.5235088
          }
        },
        views: 1681348,
        downloads: 8491
      }
    ];

    quoteTest.map((q, i) => {
      q.image = backgroundTest[i].urls.regular;
      q.small = backgroundTest[i].urls.small;
    });
    return quoteTest;
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
      this.searchQuoteByKey(tag)
        .then(res => {
          this.setState({ quotes: res });
        })
        .catch(err => console.log(err));
    } else {
      console.log("Ninguna palabra");
    }
  }

  render() {
    let quotes = this.state.quotes;
    const showAll = this.state.showAll;
    const loading = this.state.loading;

    if (loading) {
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
            showAll={showAll}
            onShowList={this.onShowList}
          />
        </div>
      );
    } else {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{height:window.innerHeight}}> 
          
          <div>
            <Icon.Loader size={72} color="black" />
          </div>
          
        </div>
      );
    }
  }
}

export default App;
