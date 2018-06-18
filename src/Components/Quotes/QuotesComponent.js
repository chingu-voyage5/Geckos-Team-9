import React from "react";
import { getQuote } from "./QuotesApi";

class Quotes extends React.Component {
  state = {
    quotes: [
      {
          "quote": "His lips caressed her ear. Best dance of my entire life.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          "author": "Lisa Kessler",
          "likes": 0,
          "tags": [
              "romance",
              "military",
              "zeus",
              "mythology",
              "paranormal",
              "bodyguard",
              "muses"
          ],
          "pk": 60596,
          "image": null
      },
      {
          "quote": "Youre mine, she whispered.\tAs long as youll have me.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          "author": "Lisa Kessler",
          "likes": 0,
          "tags": [
              "rhea",
              "romance",
              "military",
              "zeus",
              "mythology",
              "paranormal",
              "muses",
              "bodyguard"
          ],
          "pk": 60595,
          "image": null
      },
      {
          "quote": "She danced her way right into his heart. Corny, but true.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          "author": "Lisa Kessler",
          "likes": 0,
          "tags": [
              "romance",
              "military",
              "dance",
              "mythology",
              "paranormal",
              "bodyguard"
          ],
          "pk": 60594,
          "image": null
      },
      {
          "quote": "She lifted one arm up, covering her forehead in a mock swoon. Youre sweeping me off my feet.\tHe laughed, shocked by the sound after the shitty day theyd had. He bent his knees and cradled her in his arms, spinning her around while he drank in the magic of her giggles. Finally, he lowered her onto the bed and lay down beside her. Now youve been swept.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          "author": "Lisa Kessler",
          "likes": 0,
          "tags": [
              "romance",
              "dance",
              "mythology",
              "paranormal-romance"
          ],
          "pk": 60593,
          "image": null
      },
      {
          "quote": "Tera, will you dance with me?\tShe sniffled and laughed all at once. You dont dance.\tThat was before I met you.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          "author": "Lisa Kessler",
          "likes": 0,
          "tags": [
              "romance",
              "military",
              "dance",
              "mythology",
              "paranormal"
          ],
          "pk": 60592,
          "image": null
      },
      {
          "quote": "Youre too beautiful to be worshiped in the dark.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          "author": "Lisa Kessler",
          "likes": 0,
          "tags": [
              "romance",
              "military",
              "dance",
              "paranormal"
          ],
          "pk": 60591,
          "image": null
      },
      {
          "quote": "Come up when youre finished down here.\tHe raised a brow. I dont have any alarms to check up there.\tThat sexy sparkle was back in her eyes. Then I guess youll just have to check me.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          "author": "Lisa Kessler",
          "likes": 0,
          "tags": [
              "romance",
              "greek-mythology",
              "paranormal"
          ],
          "pk": 60590,
          "image": null
      },
      {
          "quote": "At its heart, dance is an extension of your soul braided into the music; its not a bunch of steps to be memorized. Everyone can dance.\n    \n    Lisa Kessler,\n    \n      Dance of the Heart",
          "author": "Lisa Kessler",
          "likes": 0,
          "tags": [
              "romance",
              "mythology",
              "paranormal"
          ],
          "pk": 60589,
          "image": null
      },
      {
          "quote": "Being in love is risky... the riskiest part is there are no guarantees.\n    \n    Leona Morgan,\n    \n      Back to Us",
          "author": "Leona Morgan",
          "likes": 0,
          "tags": [
              "romance",
              "contemporary-romance",
              "romance-novels",
              "romance-quotes",
              "romance-book-quotes",
              "love-story"
          ],
          "pk": 60588,
          "image": null
      },
      {
          "quote": "That's why fantasies were dangerous. You could make believe all you wanted, but at the end of the day, you couldn't escape reality.\n    \n    Leona Morgan,\n    \n      Worth the Risk",
          "author": "Leona Morgan",
          "likes": 0,
          "tags": [
              "romance",
              "contemporary-romance",
              "love-words",
              "true-love",
              "romance-novels",
              "romance-quotes",
              "love-story"
          ],
          "pk": 60587,
          "image": null
      }
  ]
  };

  componentDidMount() {
    // getQuote()
    //   .then(res => {
    //     const quotes = res.data.results;
    //     this.setState({ quotes });
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    return (
        <div className="fullpage">
          {this.state.quotes.map(quotes => (
            <div className="section" key={quotes.pk}>
              {quotes.quote}
            </div>
          ))}
        </div>
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
