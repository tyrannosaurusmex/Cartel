import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store';

import * as ProductListingActions from '../actions/ProductListingActions';

@connect((store) => {
    return {
        productListing: store.productListing.products
    }
})

export default class ProductListingContainer extends React.Component {
    constructor(data) {
        super();
        this.props = data;
        this.fetchProductListing();
    }
    fetchProductListing() {
        let shit = this.props.dispatch(ProductListingActions.fetchProductListings());
    }
    render() {
        return <div></div>;
    }
}