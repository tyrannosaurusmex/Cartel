import { combineReducers } from 'redux';

import userOptions from './bundles/UserOptions/reducers/userOptionsReducer';
import productListing from './bundles/ProductListing/reducers/ProductListingReducer';

export default combineReducers({
    userOptions, productListing
});