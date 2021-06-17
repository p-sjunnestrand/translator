import {Component} from 'react';
import Option from './option';

class Translator extends Component {

    state = {
        selectedLang: null,
        input: null
    }

    onSubmit = (e) => {
        e.preventDefault();
        //Does nothing if input field is empty or no language is chosen.
        if (this.state.selectedLang === null || this.state.input === null){
            return;
        }
        //Captures the object in prop 'languages' whose language corresponds to the language selected.
        const langCode = this.props.languages.filter(lang => lang.language === this.state.selectedLang)

        this.props.newTranslationMessage(this.state.input, langCode[0].code);
    }

    onSelectChange = (e) => {
        if (e.target.value === "--Välj ett språk--"){
            return;
        }
        const chosenLang = e.target.value;
        this.setState({selectedLang: chosenLang})

    }

    onInputChange = (e) => {
        const stateInput = e.target.value;
        this.setState({input: stateInput})
    }
    
    render () {
        return (
            
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onInputChange}/>
                <select id="langSelector" onChange={this.onSelectChange}>
                    <option>--Välj ett språk--</option>
                    {this.props.languages.map(langObj => 
                        <Option key={langObj.code} language={langObj.language}/>
                )}
                </select>
                <button type="submit">Översätt!</button>
            </form>
        )
    }
}

export default Translator;