import React from 'react';
import * as Salsa from '../../../library/salsa';
import ProductHandler from '../../../modules/ProductHandler';

export default class ProductPanel extends React.Component {
    constructor(data) {
        super(data);
        this.props = data;
        this.product = JSON.parse(this.props.productData);
        this.productHandler = new ProductHandler(this.product);
        this.displayPrice = this.productHandler.getLowestVariantPrice(this.props.selectedCurrency);
        if (Salsa.objectLength(this.product.variants) > 1) {
            this.from = <span className="ProductPanel-fromPrice">from </span>
        } else {
            this.from = '';
        }
    }
    render() {
        <div className="ProductPanel">
            <img src="" className="productPanel-productImage" />
            <p className="ProductPanel-productTitle">{this.product.productTitle}</p>
            <p className="ProductPanel-productPrice">{this.from}{this.productHandler.getSymbolByCurrency(this.props.selectedCurrency)}{this.displayPrice}</p>
            <button className="Button">View</button>
        </div>
    }
}