import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store';
import ProductHandler from '../../../modules/ProductHandler';

import * as ProductListingActions from '../actions/ProductListingActions';

@connect((store) => {
    return {
        productListing: store.productListing.products,
        selectedCurrency: store.userOptions.options.currency
    }
})

export default class ProductListingContainer extends React.Component {
    constructor(data) {
        super();
        this.props = data;
        this.props.dispatch(ProductListingActions.fetchProductListings());
    }
    render() {
        this.prodList = [];

        for (let prod in this.props.productListing) {
            if (this.props.productListing.hasOwnProperty(prod)) {
                let productHandler = new ProductHandler(this.props.productListing[prod]);
                this.prodList.push(<div>{productHandler.getSymbolByCurrency(this.props.selectedCurrency)}{this.props.productListing[prod].price[this.props.selectedCurrency]}</div>)
            }
        }

        return <div>{this.prodList}</div>;
    }
}