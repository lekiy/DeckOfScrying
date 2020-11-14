import React, {Component} from 'react';
import Creature from './Creature';
import './encounter-tracker.css';
import Toolbar from './Toolbar';
import Modal from './Modal'


class EncounterTracker extends Component {
    constructor(props){
        super(props);
        let creature = <Creature thumbnail={process.env.PUBLIC_URL+'/swarm-of-spiders.png'} name='Swarm of Spiders' armor='10' hpMax='7' hpCurrent='7'/>;
        this.state = {
            creaturesList: [],
            addCreatureModal: false
        }

        this.toggleAddCreatureModal = this.toggleAddCreatureModal.bind(this);
        this.addCreature = this.addCreature.bind(this);
        this.calcHP = this.calcHP.bind(this);
        this.buildImgURL = this.buildImgURL.bind(this);
        this.rollDice = this.rollDice.bind(this);
    }

    toggleAddCreatureModal(){
        this.setState({addCreatureModal: !this.state.addCreatureModal});
    }

    addCreature(e){
        e.preventDefault();
        const formData = e.target;
        const thumbnail = this.buildImgURL(formData[0].value)
        const hp = this.calcHP(e.target[3].value);
        const creature = {
            name: formData[0].value, 
            thumbnail: thumbnail, 
            armor: formData[1].value,
            initMod: formData[2].value,
            hpMax: hp,
            hpCurrent:hp
        }
        this.setState({creaturesList: [...this.state.creaturesList, creature]});
        this.toggleAddCreatureModal();
        // console.log(this.state.creaturesList);
    }

    buildImgURL(string){
        const value = string.toLowerCase().split(' ').join('-');
        return process.env.PUBLIC_URL+'/'+value+'.png'
    }

    calcHP(formula){
        const regEx = /([0-9]*[d][0-9]*)/g;
        const dice = formula.match(regEx);
        let total = dice.reduce((acc, value) => {this.rollDice(parseInt(value.match(/([0-9]*)(?:d)/g)), parseInt(value.match(/(?:d)([0-9]*)/g)))}, parseInt(formula.match(/([-+][0-9]*)$/g)));
        return total;
    }

    rollDice(amount, size){
        let total = 0;
        for(let i = 0; i < amount; i++){
            total += Math.ceil(Math.random()*size);
        }
        return total;
    }

    render(){
        const renderedCreatures = this.state.creaturesList.map((creature, i) => <Creature key={i} thumbnail={creature.thumbnail} name={creature.name} armor={creature.armor} hpMax={creature.hpMax} hpCurrent={creature.hpCurrent} />);
        //console.log(this.state.creaturesList);
        // console.log(renderedCreatures);

        return (
            <div className='encounter-tracker'>
                <Toolbar content={<button className='add-creature-btn' onClick={this.toggleAddCreatureModal}></button>} />
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(this.calcHP(e.target[0].value));
                    // console.log(this.rollDice(2, 6));
                    }}>
                <input id='test'></input>
                <input type='submit'></input>
                </form>
                <ul className='creature-list'>
                    {renderedCreatures}
                </ul>

                <Modal isActive={this.state.addCreatureModal} toggleModal={this.toggleAddCreatureModal} content={
                <form onSubmit={this.addCreature}>
                    <label for='name'>Creature Name</label>
                    <input type='name' id='name'></input>
                    <label for='armor'>Armor Class</label>
                    <input type='range' id='armor' min='1' max='30'></input>
                    <label for='init-mod'>Inititive Modifier</label>
                    <input type='range' id='init-mod' min='-5' max='5'></input>
                    <label for='hp'>HP Formula</label>
                    <input id='hp'></input>
                    <input type='submit'></input>
                </form>
                }/>
            </div>
        )
    }
}

export default EncounterTracker;