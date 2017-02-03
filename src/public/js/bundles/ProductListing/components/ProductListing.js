import React from 'react';
import { Connect } from 'react-redux';
import store from '../../../store';
import * as Salsa from '../../../library/salsa';
import ProductHandler from '../../../modules/ProductHandler';

import ProductPanel from '../../ProductPanel/components/ProductPanel';

export default class ProductListing extends React.Component {
    constructor(data) {
        super(data);
        this.props = data;
    }
    generateProductPanels() {
        this.prodList = [];
        for (let prod in this.props.productListing) {
            if (this.props.productListing.hasOwnProperty(prod)) {

                let thisProduct = this.props.productListing[prod],
                    productHandler = new ProductHandler(thisProduct),
                    displayPrice = productHandler.getLowestVariantPrice(this.props.selectedCurrency),
                    productPriceSymbol = productHandler.getSymbolByCurrency(this.props.selectedCurrency),
                    fromPrice = false;

                if (Salsa.objectLength(thisProduct.variants) > 1) {
                    fromPrice = true;
                }
                this.prodList.push(<ProductPanel productImage={thisProduct.product_images.main} brandName={thisProduct.brand_name} productTitle={thisProduct.product_title} fromPrice={fromPrice} productPrice={displayPrice} productPriceSymbol={productPriceSymbol} />)
            }
        }
    }
    render() {
        this.generateProductPanels();
        return <div>{this.prodList}</div>;
    }
}