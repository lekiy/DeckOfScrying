import React, {Component} from 'react';
import DeckEditor from './DeckEditor';

class NewDeckButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            decks: []
        }
    }

    render(){
        return (<button className="newDeckBtn" 
            onClick={this.props.onClick}
            >+</button>);
    }

}

export default NewDeckButton;