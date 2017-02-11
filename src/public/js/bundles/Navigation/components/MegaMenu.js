import React from 'react';
import { Link, browserHistory } from 'react-router'

export default class MegaMenu extends React.Component {
    render() {
        return <div>  
                <Link to="/by/format/vinyl">Vinyl</Link>
            </div>;
    }
}