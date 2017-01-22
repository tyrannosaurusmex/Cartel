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
        this.prodList = [];

        this.props.dispatch(ProductListingActions.fetchProductListings());

        this.prods = this.props.productListing;
        for (let prod in this.prods) {
            if (this.prods.hasOwnProperty(prod)) {
                this.prodList.push(<div>{this.prods[prod].artist_title}</div>)
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