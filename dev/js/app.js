import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';

import Config from './Config';
import modules from './modules/index.js';

const app = document.getElementById('CurrencySelector');
import CurrencySelector from './components/CurrencySelector';

ReactDOM.render(<Provider store={store}>
    <CurrencySelector />
</Provider>, app);