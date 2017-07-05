import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';

import Config from './Config';

import CurrencySelector from './bundles/UserOptions/components/CurrencySelector';
import LanguageSelector from './bundles/UserOptions/components/LanguageSelector';
import ProductListingContainer from './bundles/ProductListing/components/ProductListingContainer';

import ClassToggler from './modules/ClassToggler';

let ClassTogglerModules = {};
ClassTogglerModules.NavCurrLangOptions = new ClassToggler({
    trigger: 'NavCurrLangOptions-trigger',
    target: 'NavCurrLangOptions-target',
    triggerToggle: 'Nav_options_item-active',
    targetToggle: 'Nav_currLangOptions-active',
    outsideClear: true
});

ClassTogglerModules.NavSocial = new ClassToggler({
    trigger: 'NavSocial-trigger',
    target: 'NavSocial-target', 
    triggerToggle: 'Nav_options_item-active',
    targetToggle: 'Nav_social-active',
    outsideClear: true
});

ClassTogglerModules.MegaMenu = new ClassToggler({
    trigger: 'MegaMenu-trigger',
    target: 'MegaMenu-target',
    triggerToggle: 'Nav_menu_item-active',
    targetToggle: 'MegaMenu-active',
    outsideClear: true,
    insideCloser: 'MegaMenu-closer'
});

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