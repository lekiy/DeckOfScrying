import React, {Component} from 'react';

class Toolbar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <div className='toolbar'>
                    <h4 className='main-title'>
                        {this.props.name} 
                    </h4>
                    {this.props.content}
                    <button className='toolbar-btn close-btn' onClick={this.props.closeAction}>X</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Toolbar;