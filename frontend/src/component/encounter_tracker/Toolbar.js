import React, {Component} from 'react';

class Toolbar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <h3>{this.props.name}</h3>
                <div className='toolbar'>
                    {this.props.content}
                </div>
            </React.Fragment>
        )
    }
}

export default Toolbar;