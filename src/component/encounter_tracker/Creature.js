import React, {Component} from 'react';

class Creature extends Component {
    constructor(props){
        super(props);
        this.state = {
            showHPAdjustMenu: false,
            showSubMenu: false,
        } 

        this.toggleSubMenu = this.toggleSubMenu.bind(this);
        this.toggleHPAdjustMenu = this.toggleHPAdjustMenu.bind(this);
        this.adjustHP = this.adjustHP.bind(this);
    }

    toggleHPAdjustMenu(){
        this.setState({showHPAdjustMenu: !this.state.showHPAdjustMenu});
    }

    toggleSubMenu(){
        this.setState({showSubMenu: !this.state.showSubMenu});
    }

    adjustHP(e){
        e.preventDefault();
        const amount = parseInt(e.target[0].value);
        this.props.modifyHP(this.props.index, amount);
        this.toggleHPAdjustMenu();
    }

    render(){
        const editHpMenu = () => {
            if(this.state.showHPAdjustMenu){
                return (
                <form className='edit-hp-menu' onSubmit={this.adjustHP}>
                    <input type='number' />
                    <input type='submit'></input>
                </form>)
            }
            return <React.Fragment />
        }
            

        return (
            <li className='creature' style={this.props.active ? {'marginLeft': '-20px'} : {'marginLeft': '10px'}}>
                <img src={this.props.thumbnail} />
                <h3>{this.props.name}</h3> 
                <div>
                    AC: {this.props.armor}
                    {this.props.hpCurrent > 0 ? <span>
                    <button className='edit-hp-btn' onClick={this.toggleHPAdjustMenu}>
                    HP: <b>{this.props.hpCurrent}</b>/<b>{this.props.hpMax}</b>
                    </button></span> : <span> <button className='edit-hp-btn' onClick={this.toggleHPAdjustMenu}>Dead</button></span> }
                    {editHpMenu()}
                </div>
                <button onClick={this.toggleSubMenu}>...</button>
                {this.state.showSubMenu ? this.props.subMenu : <div></div>}
            </li>
        )
    }
}

export default Creature;