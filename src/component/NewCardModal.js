import React, {Component} from 'react';

class NewCardModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.createCard = this.createCard.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    updateState(){
        this.setState({title: this.props.values.title, description: this.props.values.description})
    }

    createCard(){
        const data = {type: this.props.type, title: this.state.title, description: this.state.description};
        this.props.createCard(data);
        this.props.closeModal();
    }

    handleChange(e){
        if(e.target.id === 'title'){
            this.setState({title: e.target.value});
        }
        if(e.target.id === 'discription'){
            this.setState({description: e.target.value});
        }
    }

    render(){
        if(this.props.isActive){
            return (
                <div className="modal">
                    <button className="closeModalBtn" onClick={this.props.closeModal}>X</button>
                    <div className="modalContent">
                        <label>Name</label>
                        <input id="title" onChange={this.handleChange} value={this.state.title}></input>
                        <label>Discription</label>
                        <input id="discription" onChange={this.handleChange} value={this.state.description}></input>
                        <button onClick={this.createCard}><h3>Create New {this.props.type}</h3></button>
                    </div>
                    
                </div>
            )
        }
        return (<div></div>);
    }
}

export default NewCardModal;