import React, {Component, useRef} from 'react';
import {Dots} from '../StaticComponents';
import DropDownItem from './DropDownItem';

class DropDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            showDropDown: false
        }

        this.dropdownRef = React.createRef();
    }

    componentDidMount = () =>{
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount=() =>{
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (e) => {
        if(this.dropdownRef && !this.dropdownRef.current.contains(e.target)){
            this.setState({showDropDown: false});
        }
    }

    toggleDropDown=()=>{
        this.setState({showDropDown: !this.state.showDropDown});
    }

    render(){
        let children = <div></div>;
        if(this.props.children){
            children = this.props.children.map(child => <DropDownItem>{child}</DropDownItem>);
        }

        return (
            <div ref={this.dropdownRef} className={this.props.className+' drop-down'}>
                <button className={'drop-down-btn '+this.props.btnClass} onClick={this.toggleDropDown}> {this.props.buttonName} {this.props.isDots ? (<Dots color='gray'/>) : (React.Fragment)} </button>
                
                {this.state.showDropDown ? (<div className='drop-down-content'> {children} </div>) : <React.Fragment/>}
            </div>
        )
    }
}

export default DropDown;