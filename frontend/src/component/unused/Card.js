import React, {Component} from 'react';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: this.props.values.type,
            title: this.props.values.title,
            description: this.props.values.description
        }
    }

    render(){
        return (
            <div className='card'>
                <div className='cardHeader'>
                    <h3 className='cardTitle'>{this.state.title}</h3>
                </div>
                <div className='cardBody'>
                    {this.state.description}
                </div>
                <div className='cardFooter'>
                    <i>{this.state.type}</i>
                    <button className="editBtn" onClick={() => this.props.onClick(this.state)}><i>edit</i></button>
                </div>
            </div>
        );
    }
}

export default Card;