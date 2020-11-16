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
            addCreatureModal: false,
            encounterStarted: false,
            encounterIndex: 0
        }

        this.toggleAddCreatureModal = this.toggleAddCreatureModal.bind(this);
        this.addCreature = this.addCreature.bind(this);
        this.calcHP = this.calcHP.bind(this);
        this.buildImgURL = this.buildImgURL.bind(this);
        this.rollDice = this.rollDice.bind(this);
        this.startEncounter = this.startEncounter.bind(this);
        this.nextTurn = this.nextTurn.bind(this);
        this.modifyHp = this.modifyHp.bind(this);
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
            init: this.rollDice(1, 20)+formData[2].value,
            active: false,
            hpMax: hp,
            hpCurrent:hp
        }
        this.setState({creaturesList: [...this.state.creaturesList, creature]});
        this.toggleAddCreatureModal();
        // console.log(this.state.creaturesList);
    }

    startEncounter() {
        if(this.state.creaturesList.length > 0){
            let creatures = this.state.creaturesList.sort((a, b) => a.init - b.init);
            creatures[0].active = true;
            this.setState({creaturesList: this.state.creaturesList.sort((a, b) => a.init - b.init), encounterStarted: true});
            console.log(this.state.encounterIndex);
        }else{
            console.log('no creatures in list', this.state.creaturesList);
        }
        
    }

    nextTurn() {
        let index = this.state.encounterIndex+1;
        if(index >= this.state.creaturesList.length) index = 0;
        this.setState({encounterIndex: index, creaturesList: this.state.creaturesList.map((creature, i) => {
            creature.active = false;
            if(i === index){
                creature.active = true;
            }
            return creature;
        })})
    }

    buildImgURL(string){
        const value = string.toLowerCase().split(' ').join('-');
        return process.env.PUBLIC_URL+'/'+value+'.png'
    }

    calcHP(formula){
        const values = formula.match(/(\d+d\d+)|([\+|-]*\d+)/g)
        let total = 0;
        values.forEach(i => {
            if(/\d+d\d+/g.test(i)){
                const digits = i.split('d');
                total += this.rollDice(parseInt(digits[0]), parseInt(digits[1]));
            }else{
                total += parseInt(i);
            }
        });

        return total;
    }

    modifyHp(index, amount){
        const creatures = this.state.creaturesList;
        creatures[index].hpCurrent+=amount;
        this.setState({creaturesList: creatures});
    }

    rollDice(amount, size){
        let total = 0;
        for(let i = 0; i < amount; i++){
            total += Math.ceil(Math.random()*size);
        }
        return total;
    }

    render(){
        const renderedCreatures = this.state.creaturesList.map((creature, i) => <Creature key={this.props.key+' creature '+i} index={i} active={creature.active} thumbnail={creature.thumbnail} name={creature.name} armor={creature.armor} hpMax={creature.hpMax} hpCurrent={creature.hpCurrent} modifyHP={this.modifyHp}/>);
        //console.log(this.state.creaturesList);
        // console.log(renderedCreatures);

        return (
            <div className='encounter-tracker'>
                <Toolbar content={
                    <React.Fragment>
                        <button className='add-creature-btn' onClick={this.toggleAddCreatureModal}>Add Combatent</button>
                        {this.state.encounterStarted ? <button className='next-turn-btn' onClick={this.nextTurn}>Next Turn</button> : <button className='start-encounter-btn' onClick={this.startEncounter}>Start Encounter</button>}
                    </React.Fragment>
                } />
                {/* <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(this.calcHP(e.target[0].value));
                    // console.log(this.rollDice(2, 6));
                }}>
                <input id='test'></input>
                <input type='submit'></input>
                </form> */}
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