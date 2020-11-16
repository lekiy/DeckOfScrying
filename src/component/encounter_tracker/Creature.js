import React, {Component} from 'react';

class Creature extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <li className='creature' style={this.props.active ? {'marginLeft': '-10px'} : {'marginLeft': '10px'}}>
                <img src={this.props.thumbnail} />
                <h3>{this.props.name}</h3> 
                <div>
                    AC: {this.props.armor} 
                    HP: <b>{this.props.hpCurrent}</b>/<b>{this.props.hpMax}</b>
                </div>
            </li>
        )
    }
}

export default Creature;