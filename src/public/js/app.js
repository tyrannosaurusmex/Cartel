import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Config from './Config';

import * as ClassToggler from './modules/ClassToggler';

import CurrencySelector from './bundles/UserOptions/components/CurrencySelector';
import LanguageSelector from './bundles/UserOptions/components/LanguageSelector';
import ProductListing from './bundles/ProductListing/components/ProductListingContainer';

const currencySelectorDOM = document.getElementById('CurrencySelector');
ReactDOM.render(<Provider store={store}>
    <CurrencySelector />
</Provider>, currencySelectorDOM);

const languageSelectorDOM = document.getElementById('LanguageSelector');
ReactDOM.render(<Provider store={store}>
    <LanguageSelector />
</Provider>, languageSelectorDOM);

const rootDOM = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
    <ProductListing />
</Provider>, rootDOM);