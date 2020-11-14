import React, {Component} from 'react';
import {lengthDirX, lengthDirY, slicePie} from '../util/Geometry';

class RadialMenu extends Component{

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            options: this.props.options
        }

        this.onClick = this.onClick.bind(this);
        this.setOptions = this.setOptions.bind(this);
    }

    setOptions(){
        let options = this.state.options;
        let values = [];
        const count = options.length;
        const distance = 80;
        const totalWith = options.length*distance;
        options.forEach((option, i) => {
            const slice = slicePie(180, count)
            const x = lengthDirX(distance, i*slice-slice*1);
            const y = lengthDirY(distance, i*slice-slice*1);
            //const x = Math.sin(((i*(180/count))-(1.5*(180/count)))*Math.PI/180)*distance*1.5;//-totalWith/2+distance*i;
            //const y = Math.cos(((i*(180/count))-(1.5*(180/count)))*Math.PI/180)*distance;
            values.push(<button className='radialOption' key={i} style={{left: x.toString().concat('px'), top: y.toString().concat('px')}} key={i} onClick={() => {option.onClick(); this.onClick()}}>{option.name}</button>)
            //option.style.right = x.toString().concat("px");
        });

        return values;
    }

    onClick = function(e){
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){

        

        if(this.state.isOpen){
            return(
                <div className='radialMenu'>
                    <button className='radialMenuButton' onClick={this.onClick}></button>
    
                    <div className='radialOptions'>{this.setOptions()}</div>
                </div>
                ); 
        }

        return(
            <div className='radialMenu'>
                <button className='radialMenuButton' onClick={this.onClick}></button>
            </div>
            );
    }
}

export default RadialMenu;