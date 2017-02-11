import React from 'react';
import { Link, browserHistory } from 'react-router'

export default class MegaMenu extends React.Component {
    render() {
        return <div>  
                <div className="MegaMenu_col">
                    <h2 className="MegaMenu_heading">By Format</h2>
                    <ul className="MegaMenu_list">
                        <li><Link to="/by/format/vinyl">Vinyl</Link></li>
                        <li><a href="/by/format/cd">CD</a></li>
                        <li><a href="/by/format/digital">Digital</a></li>
                    </ul>
                </div>
                <div className="MegaMenu_col">
                    <h2 className="MegaMenu_heading">By Genre</h2>
                    <ul className="MegaMenu_list">
                        <li><a href="/by/genre/punk">Punk</a></li>
                        <li><a href="/by/genre/metal">Metal</a></li>
                        <li><a href="/by/genre/grunge">Grunge</a></li>
                        <li><a href="/by/genre/rock">Rock</a></li>
                    </ul>
                </div>
                <div className="MegaMenu_col">
                    <h2 className="MegaMenu_heading">Artist A-Z</h2>
                </div>
            </div>;
    }
}