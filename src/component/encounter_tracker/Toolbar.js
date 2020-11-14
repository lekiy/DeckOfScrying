import React, {Component} from 'react';

class Toolbar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='toolbar'>
                {this.props.content}
            </div>
        )
    }
}

export default Toolbar;