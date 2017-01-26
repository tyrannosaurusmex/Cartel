import React from 'react';
import { Connect } from 'react-redux';
import store from '../../../store';

import ProductPanel from '../../ProductPanel/components/ProductPanel';

export default class ProductListing extends React.Component {
    constructor(data) {
        super(data);
        this.props = data;
    }
    generateProductPanels() {
        let prodList = [];
        for (let prod in this.props.productListing) {
            if (this.props.productListing.hasOwnProperty(prod)) {
                // Do maths from ProductPanel here instead

                let product = JSON.stringify(this.props.productListing[prod]);
                prodList.push(<ProductPanel selectedCurrency={this.props.selectedCurrency} productData={product} />)
            }
        }

        return prodList;
    }
    render() {
        return <div>{this.generateProductPanels()}</div>
    }
}