import React from 'react';
import { Connect } from 'react-redux';
import store from '../../../store';
import ProductHandler from '../../../modules/ProductHandler';

export default class ProductListing extends React.Component {
    constructor(data) {
        super(data);
        this.props = data;
        this.prodList = [];
    }
    generateProductPanels() {
        this.prodList = [];
        for (let prod in this.props.productListing) {
            let product = this.props.productListing[prod];
            if (this.props.productListing.hasOwnProperty(prod)) {
                let productHandler = new ProductHandler(product);
                this.prodList.push(<div>{productHandler.getSymbolByCurrency(this.props.selectedCurrency)}{product.price[this.props.selectedCurrency]}</div>)
            }
        }
    }
    render() {
        this.generateProductPanels();

        return <div>{this.prodList}</div>
    }
}