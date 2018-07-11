import React, { Component } from "react";
import Quotes from "./Components/Quotes/QuotesComponent";
import "./App.css";
import "../node_modules/animate.css/animate.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundURL: "",
      quotes: [
        {
          quote:
            "His lips caressed her ear. Best dance of my entire life.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: [
            "romance",
            "military",
            "zeus",
            "mythology",
            "paranormal",
            "bodyguard",
            "muses"
          ],
          pk: 60596,
          image: "https://source.unsplash.com/category/nature/1920x1080"
        },
        {
          quote:
            "Youre mine, she whispered.\tAs long as youll have me.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: [
            "rhea",
            "romance",
            "military",
            "zeus",
            "mythology",
            "paranormal",
            "muses",
            "bodyguard"
          ],
          pk: 60595,
          image: "https://source.unsplash.com/category/sport/1920x1080"
        },
        {
          quote:
            "She danced her way right into his heart. Corny, but true.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: [
            "romance",
            "military",
            "dance",
            "mythology",
            "paranormal",
            "bodyguard"
          ],
          pk: 60594,
          image: "https://source.unsplash.com/category/nature/1920x1080"
        },
        {
          quote:
            "She lifted one arm up, covering her forehead in a mock swoon. Youre sweeping me off my feet.\tHe laughed, shocked by the sound after the shitty day theyd had. He bent his knees and cradled her in his arms, spinning her around while he drank in the magic of her giggles. Finally, he lowered her onto the bed and lay down beside her. Now youve been swept.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: ["romance", "dance", "mythology", "paranormal-romance"],
          pk: 60593,
          image: "https://source.unsplash.com/category/nature/1920x1080"
        },
        {
          quote:
            "Tera, will you dance with me?\tShe sniffled and laughed all at once. You dont dance.\tThat was before I met you.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: ["romance", "military", "dance", "mythology", "paranormal"],
          pk: 60592,
          image: "https://source.unsplash.com/category/nature/1920x1080"
        },
        {
          quote:
            "Youre too beautiful to be worshiped in the dark.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: ["romance", "military", "dance", "paranormal"],
          pk: 60591,
          image: "https://source.unsplash.com/category/nature/1920x1080"
        },
        {
          quote:
            "Come up when youre finished down here.\tHe raised a brow. I dont have any alarms to check up there.\tThat sexy sparkle was back in her eyes. Then I guess youll just have to check me.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: ["romance", "greek-mythology", "paranormal"],
          pk: 60590,
          image: "https://source.unsplash.com/category/nature/1920x1080"
        },
        {
          quote:
            "At its heart, dance is an extension of your soul braided into the music; its not a bunch of steps to be memorized. Everyone can dance.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: ["romance", "mythology", "paranormal"],
          pk: 60589,
          image: "https://source.unsplash.com/category/nature/1920x1080"
        },
        {
          quote:
            "Being in love is risky... the riskiest part is there are no guarantees.\n    \n    Leona Morgan,\n    \n      Back to Us",
          author: "Leona Morgan",
          likes: 0,
          tags: [
            "romance",
            "contemporary-romance",
            "romance-novels",
            "romance-quotes",
            "romance-book-quotes",
            "love-story"
          ],
          pk: 60588,
          image: "https://source.unsplash.com/category/nature/1920x1080"
        },
        {
          quote:
            "That's why fantasies were dangerous. You could make believe all you wanted, but at the end of the day, you couldn't escape reality.\n    \n    Leona Morgan,\n    \n      Worth the Risk",
          author: "Leona Morgan",
          likes: 0,
          tags: [
            "romance",
            "contemporary-romance",
            "love-words",
            "true-love",
            "romance-novels",
            "romance-quotes",
            "love-story"
          ],
          pk: 60587,
          image: "https://source.unsplash.com/category/nature/1920x1080"
        }
      ],
      showAll: true
    };

    this.onShowList = this.onShowList.bind(this);
  }

  componentDidMount() {
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

  render() {
    // document.querySelector("body").background = this.state.backgroundURL;
    // https://source.unsplash.com/category/nature/1920x1080
    const backgroundURL =
      "https://source.unsplash.com/category/nature/1920x1080";
    const quotes = this.state.quotes;
    const showAll = this.state.showAll;
    return (
      <div className={showAll ? "wrap" : ""}>
        <div className="top">
          <h1 style={{ color: "white" }}>
            search bar component will replace this h1
          </h1>
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
