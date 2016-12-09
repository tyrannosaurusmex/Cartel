import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

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
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="es">Spanish</option>
                    </select>
                </div>
            
    }
}