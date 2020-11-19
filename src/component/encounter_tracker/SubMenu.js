import React, {Component} from 'react';

class SubMenu extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div>{this.props.options}</div>
    }
}

export default SubMenu;