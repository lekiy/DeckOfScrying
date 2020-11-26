import React, {Component} from "react";

class SearchItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<a className='search-item' onClick={this.props.onClick}><img src={this.props.thumbnail} /><h4>{this.props.name}</h4></a>);
    }
}

export default SearchItem;