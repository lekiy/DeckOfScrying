import React, {Component} from 'react';
import DropDown from './DropDown';

class DropDownItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <span className='drop-down-item' onClick={this.props.onClick}>{this.props.children}</span>
    }
}

export default DropDownItem;