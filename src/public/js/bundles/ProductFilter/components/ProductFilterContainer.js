import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store';

@connect((store) => {
    return {
        productListing: store.productListing.products
    }
})

export default class ProductFilterContainer extends React.Component {
    constructor(data) {
        super(data);
        this.props = data;
    }

    render() {
        return <div class="ProductFilter">
                    Hello
                </div>;
    }
}

