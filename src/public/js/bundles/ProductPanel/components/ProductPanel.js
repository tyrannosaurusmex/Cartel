import React from 'react';

export default class ProductPanel extends React.Component {
    constructor(data) {
        super(data);
        this.props = data;
    }
    render() {
        <div className="ProductPanel">
            <img src="" className="productPanel-productImage" />
            <p className="ProductPanel-productTitle">{this.props.productTitle}</p>
            <p className="ProductPanel-productPrice">{this.props.fromPrice}{this.props.productPriceSymbol}{this.props.productPrice}</p>
            <button className="Button">View</button>
        </div>
    }
}