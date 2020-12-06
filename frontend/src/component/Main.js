import React, {Component} from 'react'
import EncounterTracker from './encounter_tracker/EncounterTracker';
import Navbar from './Navbar';
import DropDown from './encounter_tracker/DropDown';
import Modal from './encounter_tracker/Modal';
import api from '../api/api';

class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            components: [],
            useJson: false,
            savedEncounters: [],
        }
    }

    createEncounter = async (e) => {
        e.preventDefault();
        const encounter = await api.insertEncounter({name:e.target[0].value}).then((encounter) =>{
            return encounter.data.data;
        });
        
        const key = 'encounter-'+(this.state.components.length+1);
        this.setState({components: [...this.state.components, <EncounterTracker key={key} removeEncounter={() => this.removeEncounter(key)} encounterData={encounter}/>]})
    }

    addEncounter = (encounter) => {
        console.log(encounter);
        const key = 'encounter-'+(this.state.components.length+1);
        this.setState({components: [...this.state.components, <EncounterTracker key={key} removeEncounter={() => this.removeEncounter(key)} encounterData={encounter}/>]})
    }

    removeEncounter = (key) => {
        this.setState({components: this.state.components.filter((component) => component.key !== key)});
    }

    loadEncounters = async () => {
        await api.getAllEncounters().then(encounters => {
            this.setState({
                savedEncounters: encounters.data.data, 
            })
        })
        console.log('encounters loaded', this.savedEncounters)
    }

    toggleUseJson = () => [
        this.setState({useJson: !this.state.useJson})
    ]

    saveCreature = async (e) => {
        e.preventDefault();
        let data = {};
        if(e.target[0].checked){
            data = JSON.parse(e.target[1].value);
        }else{
            data = {
                name: e.target[1].value,
                thumbnail: e.target[2].value,
                armor: e.target[3].value,
                armorType: e.target[4].value,
                initMod: e.target[5].value,
                hpFormula: e.target[6].value,
                hpFlat: e.target[7].value,
                challengeRating: e.target[8].value,
            }
        }
        api.insertMonster(data).then(() => window.alert('Creature Added '+data.name));
    }

    render(){
        return (
            <div className="main">
                <Navbar content={ <React.Fragment>
                    <h3 className='main-title'>Deck Of Scrying</h3>
                    <DropDown btnClass='nav-btn' buttonName='Encounter'>
                        <Modal modalName="Create New Encounter" content={
                            <form className='create-encounter-form' onSubmit={this.createEncounter}>
                                <label>Encounter Name</label>
                                <input type="name"></input>
                                <input type="submit" value="Create Encounter"></input>
                            </form>
                        }/>
                        <Modal btnClass='drop-down-item'modalName="Load Encounter" onClick={this.loadEncounters} content={<React.Fragment >
                            <ul className='encounters-list'>{this.state.savedEncounters.map((encounter) => <li><button onClick={() => this.addEncounter(encounter)}><span className='encounter-list-title'>{encounter.name}</span>Enemies: <span className='encounter-list-creatures'>{encounter.combatants.map(creature => <img className='icon' src={creature.thumbnail} />)}</span>Allies: </button></li>)}</ul>
                        </React.Fragment>}/>
                    </DropDown> 
                    <Modal btnClass='nav-btn' modalName="Add New Creature" content={<React.Fragment>
                        <form className="add-creature-form" onSubmit={this.saveCreature}>
                                <div className="start">
                                    <label>Import From JSON: </label>
                                    <input id="use-json" type="checkbox" onClick={this.toggleUseJson}></input>
                                </div>
                            {this.state.useJson ? (<textarea className='center' rows="10" cols='50' />) : (<React.Fragment>
                                <label>Name</label>
                                <input type='name'></input>
                                <label>icon</label>
                                <input></input>
                                <label>Armor Class</label>
                                <input type='number'></input>
                                <label>Armor Type</label>
                                <input></input>
                                <label>Inititave Modifier</label>
                                <input type='number'></input>
                                <label>HP Formula</label>
                                <input></input>
                                <label>Average HP</label>
                                <input type='number'></input>
                                <label>Challenge Rating</label>
                                <input type='number' step='.01'></input>
                            </React.Fragment>)}
                            <input className='end' type="submit" name='saveCreature' value="Save Creature"></input>
                        </form>
                    </React.Fragment>} />
                </React.Fragment>}/>
                
                {this.state.components}
            </div>
        )
    }
}

export default Main