import React, {Component} from 'react';

class SubMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            showSubMenu: false
        }
    }

    toggleSubMenu=()=>{
        this.setState({showSubMenu: !this.state.showSubMenu});
    }

    render(){
        return (
            <div className={this.props.className+' drop-down'}>
                <button className='drop-down-btn' onClick={this.toggleSubMenu}><span className='dot-container'><span className={'dot '+this.props.color}> </span><span className={'dot '+this.props.color}> </span><span className={'dot '+this.props.color}></span></span></button>
                {this.state.showSubMenu ? (<div className='drop-down-content'>
                    {this.props.options}
                </div>) : <React.Fragment/>}
                
            </div>
        )
    }
}

export default SubMenu;