import React from 'react';
import { connect } from 'react-redux';

import * as userOptionsActions from '../actions/userOptionsActions';

@connect((store) => {
    return {
        userOptions: store.userOptions.options
    }
})

export default class PsuedoSelector extends React.Component {
    componentWillMount() {
        this.props.dispatch(userOptionsActions.fetchUserOptions());
    }
    render() {

    }
}