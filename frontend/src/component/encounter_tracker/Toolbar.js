import React, {Component} from 'react';

class Toolbar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <h3 className='toolbar-title'>
                    {this.props.name} 
                </h3>
                <div className='toolbar'>
                    {this.props.content}
                    <button className='toolbar-btn close-btn' onClick={this.props.closeAction}>X</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Toolbar;