import {Component} from 'react';
// import './App.css';
import Translator from './translator';
import Results from './results';

class App extends Component{

  //code is ISO standard and used in API URI.
  state = {
    languages: [
      {language: "Engelska", code: "en"},
      {language: "Sorani", code: "ckb"},
      {language: "Arabiska", code: "ar"},
      {language: "Hebreiska", code: "he"}
    ],
    translation: null
  }

  newTranslationMessage = (message, lang) => {

    //Encodes entered message to a URI friendly string.
    let messageURI = encodeURI(message);

    //Fetches translation API with URI friendly message and chosen language.
    fetch(`https://api.mymemory.translated.net/get?q=${messageURI}&langpair=sv|${lang}`)
    .then(result => result.json())
    .then(data => {
      this.setState({translation: data.responseData.translatedText})
    })
  }

  render () {
    return (
      <main>
        <section id="translator">
          <h1>Översättaren</h1>
          <Translator languages={this.state.languages} newTranslationMessage={this.newTranslationMessage}/>
        </section>
        <section id="translationDisplay">
          {this.state.translation? <h1>Översättning</h1>: null}
          <Results translation={this.state.translation}/>
        </section>
      </main>
    )
  }
}

export default App;
