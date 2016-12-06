import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';
import Config from './Config';
import modules from './modules/index.js';

const app = document.getElementById('CurrencyPsuedoSelecter');
import CookieSelector from './components/CookieSelector';

let data = {
    gbp: {
        value: "gbp",
        display: "GBP £"
    },
    eur: {
        value: "eur",
        display: "EUR €"
    },
    usd: {
        value: "usd",
        display: "USD $"
    }
};



ReactDOM.render(<CookieSelector selected={"gbp"} 
                                options={data}
                                class="testclass"
                                id="idtest" />, app);