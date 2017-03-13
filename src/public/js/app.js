import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store';

import Config from './Config';

import * as ClassToggler from './modules/ClassToggler';

import CurrencySelector from './bundles/UserOptions/components/CurrencySelector';
import LanguageSelector from './bundles/UserOptions/components/LanguageSelector';
import ProductListingContainer from './bundles/ProductListing/components/ProductListingContainer';
import MegaMenu from './bundles/Navigation/components/MegaMenu';

const currencySelectorDOM = document.getElementById('CurrencySelector');
ReactDOM.render(<Provider store={store}>
    <CurrencySelector />
</Provider>, currencySelectorDOM);

const languageSelectorDOM = document.getElementById('LanguageSelector');
ReactDOM.render(<Provider store={store}>
    <LanguageSelector />
</Provider>, languageSelectorDOM);

const history = syncHistoryWithStore(browserHistory, store)
const rootDOM = document.getElementById('app');
ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="by/:category/:type" component={ProductListingContainer} />
        </Router>
    </Provider>
), rootDOM);