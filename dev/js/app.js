import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Config from './Config';

import * as ClassToggler from './modules/ClassToggler';

import CurrencySelector from './bundles/UserOptions/components/CurrencySelector';
import LanguageSelector from './bundles/UserOptions/components/LanguageSelector';

const currencySelectorDOM = document.getElementById('CurrencySelector');
ReactDOM.render(<Provider store={store}>
    <CurrencySelector />
</Provider>, currencySelectorDOM);

const languageSelectorDOM = document.getElementById('LanguageSelector');
ReactDOM.render(<Provider store={store}>
    <LanguageSelector />
</Provider>, languageSelectorDOM);