import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';

import Config from './Config';
import modules from './modules/index.js';

import CurrencySelector from './components/CurrencySelector';
import LanguageSelector from './components/LanguageSelector';

const currencySelectorDOM = document.getElementById('CurrencySelector');
ReactDOM.render(<Provider store={store}>
    <CurrencySelector />
</Provider>, currencySelectorDOM);

const languageSelectorDOM = document.getElementById('LanguageSelector');
ReactDOM.render(<Provider store={store}>
    <LanguageSelector />
</Provider>, languageSelectorDOM);