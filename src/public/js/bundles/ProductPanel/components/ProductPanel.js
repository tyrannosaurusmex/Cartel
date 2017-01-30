import React from 'react';

export default class ProductPanel extends React.Component {
    constructor(data) {
        super(data);
        this.props = data;

        if (this.props.fromPrice) {
            this.fromPrice = <span className="ProductPanel-fromPrice">from </span>;
        }
    }
    render() {
        return <div className="ProductPanel">
            <img src="http://zumic.com/wp-content/uploads/2015/06/eagles-of-death-metal-zipper-down-album-cover-art-600x600.jpg" className="ProductPanel-productImage" />
            <p className="ProductPanel-productTitle">{this.props.brandName} - {this.props.productTitle}</p>
            <p className="ProductPanel-productPrice">{this.fromPrice}{this.props.productPriceSymbol}{this.props.productPrice}</p>
            <button className="ProductPanel-button Button">View</button>
        </div>;
    }
}