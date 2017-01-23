import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import userOptions from './bundles/UserOptions/reducers/userOptionsReducer';
import productListing from './bundles/ProductListing/reducers/ProductListingReducer';

export default combineReducers({
    userOptions, 
    productListing,
    routing: routerReducer
});