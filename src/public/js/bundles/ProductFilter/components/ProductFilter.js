import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store';

import ClassToggler from '../../../modules/ClassToggler';

@connect((store) => {
    return {
        productListing: store.productListing.products
    }
})

export default class ProductFilter extends React.Component {
    constructor(data) {
        super(data);
        this.props = data;
    }

    setClassToggler() {
        let ClassTogglerModules = ClassTogglerModules || {};

        ClassTogglerModules.ProductFilter = new ClassToggler({
            trigger: 'ProductFilter-trigger',
            target: 'ProductFilter-target',
            triggerToggle: 'active',
            targetToggle: 'active',
            outsideClear: true
        });
    }

    componentDidMount() {
        this.setClassToggler();
    }

    render() {
        return <div>
                    <button className="Button" id="ProductFilter-trigger">Filter</button>
                    <div className="ProductFilter" id="ProductFilter-target">
                        Hello
                    </div>
                </div>;
    }
}

