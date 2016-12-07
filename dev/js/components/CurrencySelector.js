import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

import * as userOptionsActions from '../actions/userOptionsActions';

@connect((store) => {
    return {
        userOptions: store.userOptions.options.currency
    }
})

export default class CurrencySelector extends React.Component {
    constructor(data) {
        super();
        this.props = data;
        let userCurrency = this.props.dispatch(userOptionsActions.fetchUserOptionsCurrency());
        this.selectedCurrency = userCurrency.payload.currency;
    }
    change(event) {
        this.props.dispatch(userOptionsActions.setUserOptionsCurrency(event.target.value));
        let userCurrency = this.props.dispatch(userOptionsActions.fetchUserOptionsCurrency());
        this.selectedCurrency = userCurrency.payload.currency;
    }
    render() {
        return <select id="CurrencySelector"
                className="Selector"
                onChange={this.change.bind(this)}
                value={this.selectedCurrency}>
                    <option value="gbp">GBP £</option>
                    <option value="eur">EUR $</option>
                    <option value="usd">USD $</option>
            </select>
    }
}