import React from 'react';

export default class PsuedoSelector extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            selected: this.props.selected,
        }
        this.change = this.change.bind(this);
    }
    change() {
        this.setState({
            selected: e.target.value
        });
        document.cookie = "Cartel.userOptions.currency=" + this.state.selected;
    }
    render() {
        return <select id={this.props.id}
                name={this.props.name} 
                className={this.props.class}
                onChange={this.change}>
            </select>
    }
}