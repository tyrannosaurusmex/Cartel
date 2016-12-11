import React from 'react';
import { Connect } from 'react-redux';
import store from '../store';
import Config from '../Config';

import ProductPanel from './ProductPanel';

import ProductHandler from '../modules/ProductHandler';
import CookieHandler from '../modules/CookieHandler';

const cookieHandler = new CookieHandler();

export default class ProductListing extends React.component {
    constructor(data) {
        this.props = data;
        this.userCurrency = CookieHandler.getUserOptionsCurrency();

        this.ProductElements = [];
        for(prod in this.props.products) {
            ProductElements.push(<ProductPanel userCurrency={this.userCurrency} />)
        }
    }
    render() {
        return <div className="ProductListing">
                    {this.ProductElements}
                </div>
    }
}