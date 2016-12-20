import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Config from '../Config';

import ProductHandler from '../modules/ProductHandler';
import CookieHandler from '../modules/CookieHandler';

const cookieHandler = new CookieHandler();
const productHandler = new ProductHandler(data);

export default class ProductPanel extends React.Component {
    constructor(data) {
        this.props = data;

        this.currPrice = ProductHandler.getPriceByCurrency(this.props.userCurrency);
        this.currSymbol = ProductHandler.getSymbolByCurrency(this.props.userCurrency);
    }
    render() {
        <div class="ProductPanel">
            <img src={this.props.images.thumbnail} 
                    alt={this.props.title} 
                    className="ProductPanel_image" />
            <p className="ProductPanel_title">{this.props.title}</p>
            <p className="ProductPanel_price">{this.currSymbol}{this.currPrice}</p>
            <span class="Button">View</span>
        </div>
    }
}