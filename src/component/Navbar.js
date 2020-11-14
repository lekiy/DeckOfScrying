import React, {Component} from 'react';

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (<div className="navbar">{this.props.content}</div>)
    }

}

export default Navbar;