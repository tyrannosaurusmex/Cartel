import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store';

import * as ProductListingActions from '../actions/ProductListingActions';

@connect((store) => {
    return {
        productListing: store.productListing.products,
        selectedCurrency: store.userOptions.currency
    }
})

export default class ProductListingContainer extends React.Component {
    constructor(data) {
        super();
        this.props = data;

        this.prodList = [];
        this.props.dispatch(ProductListingActions.fetchProductListings());

        for (let prod in this.props.productListing) {
            if (this.props.productListing.hasOwnProperty(prod)) {
                this.prodList.push(<div>{this.props.productListing[prod].artist_title}</div>)
            }
        }
    }
    render() {
        let prods = this.props.productListing;
        for (let prod in prods) {
            if (prods.hasOwnProperty(prod)) {
                this.prodList.push(<div>{prods[prod].artist_title}</div>)
            }
        }

        return <div>{this.prodList}</div>;
    }
}