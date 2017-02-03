import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store';

import * as ProductListingActions from '../actions/ProductListingActions';

import ProductListing from './ProductListing';

@connect((store) => {
    return {
        productListing: store.productListing.products,
        selectedCurrency: store.userOptions.options.currency
    }
})

export default class ProductListingContainer extends React.Component {
    constructor(data) {
        super(data);
        this.props = data;
        this.props.dispatch(ProductListingActions.fetchProductListings(this.props.params.category, this.props.params.type));
    }
    render() {
        return <ProductListing productListing={this.props.productListing}
                                selectedCurrency={this.props.selectedCurrency} />;
    }
}