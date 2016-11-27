 import React from 'react';
 import ReactDOM from 'react-dom';
 import { createStore } from 'redux';
 import { Provider } from 'react-redux';

 import Layout from './components/Layout';
 import store from './store';

 import modules from './modules/index.js';

 const app = document.getElementById('app');

 /*ReactDOM.render(<Provider store={store}>
    <Layout />
</Provider>, app);
*/