import React from 'react';
import { Connect } from 'react-redux';
import store from '../../../store';
import ProductHandler from '../../../modules/ProductHandler';

export default class ProductListing extends React.Component {
    constructor(data) {
        super(data);
        this.props = data;
    }
    generateProductPanels() {
        let prodList = [];
        for (let prod in this.props.productListing) {
            let product = this.props.productListing[prod];
            if (this.props.productListing.hasOwnProperty(prod)) {
                let productHandler = new ProductHandler(product);
                prodList.push(<div>{productHandler.getSymbolByCurrency(this.props.selectedCurrency)}{product.variants[0].price[this.props.selectedCurrency]}</div>)
            }
        }

        return prodList;
    }
    render() {
        return <div>{this.generateProductPanels()}</div>
    }
}