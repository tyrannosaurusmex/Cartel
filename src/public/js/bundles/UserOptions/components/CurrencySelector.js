import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store';
import Config from '../../../Config';

import * as userOptionsActions from '../actions/userOptionsActions';

@connect((store) => {
    return {
        selectedCurrency: store.userOptions.options.currency
    }
})

export default class CurrencySelector extends React.Component {
    constructor(data) {
        super();
        this.props = data;

        this.currencyList = [];
        let availableCurrencies = Config.getAvailableCurrencies();
        for (let curr in availableCurrencies) {
            if (availableCurrencies.hasOwnProperty(curr)) {
                this.currencyList.push(<option value={availableCurrencies[curr].code} 
                                                key={availableCurrencies[curr].code}>{availableCurrencies[curr].code.toUpperCase()} {availableCurrencies[curr].symbol}</option>);
            }
        }
    }
    change(event) {
        this.props.dispatch(userOptionsActions.setUserOptionsCurrency(event.target.value));
    }
    render() {
        return <div className="u-push-bot-small">
        <label className="u-color-lightgrey">Currency:</label>
                    <select id="CurrencySelector"
                        className="Selector"
                        onChange={this.change.bind(this)}
                        value={this.props.selectedCurrency}>
                            {this.currencyList}
                    </select>
                </div>
            
    }
}