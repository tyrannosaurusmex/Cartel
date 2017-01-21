import Config from '../../../Config.js';
import store from '../../../store.js';
import axios from 'axios';

export function fetchProductListings() {
    store.dispatch({
        type: "FETCH_PRODUCT_LISTINGS",
        payload: axios.get(Config.getConfigAPIUrl() + '/cartel/products')
    })
}