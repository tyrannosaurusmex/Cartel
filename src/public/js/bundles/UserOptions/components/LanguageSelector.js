import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store';
import Config from '../../../Config';

import * as userOptionsActions from '../actions/userOptionsActions';

@connect((store) => {
    return {
        userOptions: store.userOptions.options.language
    }
})

export default class LanguageSelector extends React.Component {
    constructor(data) {
        super();
        this.props = data;
        this.fetchSelectedLanguage();

        this.languageList = [];
        let availableLanguages = Config.getAvailableLanguages();
        for (let lang in availableLanguages) {
            if (availableLanguages.hasOwnProperty(lang)) {
                this.languageList.push(<option value={availableLanguages[lang].code} 
                                                key={availableLanguages[lang].code}>{availableLanguages[lang].name}</option>);
            }
        }
    }
    fetchSelectedLanguage() {
        let userLanguage = this.props.dispatch(userOptionsActions.fetchUserOptionsLanguage());
        this.selectedLanguage = userLanguage.payload.language;
    }
    change(event) {
        this.props.dispatch(userOptionsActions.setUserOptionsLanguage(event.target.value));
        this.fetchSelectedLanguage();
    }
    render() {
        return <div>
                    <label className="u-color-lightgrey">Language:</label>
                    <select id="LanguageSelector"
                        className="Selector"
                        onChange={this.change.bind(this)}
                        value={this.selectedLanguage}>
                            {this.languageList}
                    </select>
                </div>
            
    }
}