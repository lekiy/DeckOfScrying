import React, {Component} from 'react';
import {Dots} from '../StaticComponents';

class DropDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            showDropDown: false
        }
    }

    toggleDropDown=()=>{
        this.setState({showDropDown: !this.state.showDropDown});
    }

    render(){

        return (
            <div className={this.props.className+' drop-down'}>
                <button className={'drop-down-btn '+this.props.btnClass} onClick={this.toggleDropDown}> {this.props.buttonName} {this.props.isDots ? (<Dots color='gray'/>) : (React.Fragment)} </button>
                
                {this.state.showDropDown ? (<div className='drop-down-content'> {this.props.options} </div>) : <React.Fragment/>}
            </div>
        )
    }
}

export default DropDown;