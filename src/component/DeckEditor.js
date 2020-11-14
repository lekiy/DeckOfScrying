import React, {Component} from 'react';

class DeckEditor extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="deckEditor">
                <h3>Title</h3>
                <input />
                <h3>Content</h3>
                <input />
            </div>
        );
    }
}

export default DeckEditor;