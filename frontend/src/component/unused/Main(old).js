import React, {Component} from 'react';
import Card from './Card';
import NewCardModal from './NewCardModal';
import Navbar from './Navbar';
import RadialMenu from './RadialMenu';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            cards: [],
            modalType: 'location',
            modalActive: false,
            modalValues: {}
        }

        this.createCard = this.createCard.bind(this);
        this.createNewCard = this.createNewCard.bind(this);
        this.editCard = this.editCard.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render(){
        return (
            <div id="main">
                <Navbar content={<RadialMenu options={
                    [{name: "Location", onClick: () => this.createCard('location')},
                    {name: "Character", onClick: () => this.createCard('character')}, 
                    {name: "Item", onClick: () => this.createCard('item')}]}/>} />
                <div className="deckHolder">
                    {this.state.cards}
                </div>
                <NewCardModal ref='cardModal' isActive={this.state.modalActive} type={this.state.modalType} closeModal={this.closeModal} values={this.state.modalValues} createCard={this.createNewCard} />
            </div>
        );
    }

    createCard = function(type){
        this.setState({modalActive: true, modalType: type});
        // this.setState({decks: [...this.state.decks, <DeckEditor />]});
    }

    createNewCard = function(values){

        this.setState({cards: [...this.state.cards, <Card key={this.state.cards.length++} values={values} onClick={this.editCard}/>]});
    }

    editCard = function(values){
        this.setState({modalActive: true, modalType: values.type, modalValues: values});
        this.refs.cardModal.updateState();
    }

    closeModal = function(){
        this.setState({modalActive: false});
    }
}

export default Main;
