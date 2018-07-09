import React, { Component } from "react";
import Quotes from "./Components/Quotes/QuotesComponent";
import { Animated } from "react-animated-css";
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
          image:
            "https://images.unsplash.com/photo-1484910292437-025e5d13ce87?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b26342fc7cb1addb776c8c86a202afa1&auto=format&fit=crop&w=1388&q=80"
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
          image:
            "https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a68d52674735e061380321383859eb17&auto=format&fit=crop&w=1500&q=80"
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
          image: null
        },
        {
          quote:
            "She lifted one arm up, covering her forehead in a mock swoon. Youre sweeping me off my feet.\tHe laughed, shocked by the sound after the shitty day theyd had. He bent his knees and cradled her in his arms, spinning her around while he drank in the magic of her giggles. Finally, he lowered her onto the bed and lay down beside her. Now youve been swept.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: ["romance", "dance", "mythology", "paranormal-romance"],
          pk: 60593,
          image: null
        },
        {
          quote:
            "Tera, will you dance with me?\tShe sniffled and laughed all at once. You dont dance.\tThat was before I met you.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: ["romance", "military", "dance", "mythology", "paranormal"],
          pk: 60592,
          image: null
        },
        {
          quote:
            "Youre too beautiful to be worshiped in the dark.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: ["romance", "military", "dance", "paranormal"],
          pk: 60591,
          image: null
        },
        {
          quote:
            "Come up when youre finished down here.\tHe raised a brow. I dont have any alarms to check up there.\tThat sexy sparkle was back in her eyes. Then I guess youll just have to check me.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: ["romance", "greek-mythology", "paranormal"],
          pk: 60590,
          image: null
        },
        {
          quote:
            "At its heart, dance is an extension of your soul braided into the music; its not a bunch of steps to be memorized. Everyone can dance.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          author: "Lisa Kessler",
          likes: 0,
          tags: ["romance", "mythology", "paranormal"],
          pk: 60589,
          image: null
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
          image: null
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
          image: null
        }
      ],
      fadeIn: true
    };

    this.toggleAnimation = this.toggleAnimation.bind(this);
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

  toggleAnimation() {
    console.log("Clicked!!!");
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }

  render() {
    // document.querySelector("body").background = this.state.backgroundURL;
    // https://source.unsplash.com/category/nature/1920x1080
    const backgroundURL =
      "https://source.unsplash.com/category/nature/1920x1080";
    const quotes = this.state.quotes;
    const fadeIn = this.state.fadeIn;
    return (
      <div className={fadeIn ? "wrap" : "container"}>
        
        <div className="screen">
          <img src={backgroundURL} />
        </div>

        <div className="top">
          <h1 style={{ color: "white" }}>
            search bar component will replace this h1
          </h1>
        </div>

        <Quotes
          quotes={quotes}
          fadeIn={fadeIn}
          toggleAnimation={this.toggleAnimation}
        />

        <div className={fadeIn ? "bottom" : "bottomCenter"}>
          <h1 style={{ color: "white" }}>
            social component will replace this h1
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
