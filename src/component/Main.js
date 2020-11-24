import React, {Component} from 'react'
import EncounterTracker from './encounter_tracker/EncounterTracker';
import Navbar from './Navbar';
import Modal from './encounter_tracker/Modal';
import api from '../api/api';

class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            components: [],
            useJson: false
        }
    }

    createEncounter = () => {
        const key = 'encounter-'+(this.state.components.length+1);
        this.setState({components: [...this.state.components, <EncounterTracker key={key} removeEncounter={() => this.removeEncounter(key)}/>]})
    }

    removeEncounter = (key) => {
        this.setState({components: this.state.components.filter((component) => component.key !== key)});
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
                    <button onClick={this.createEncounter}>Create New Encounter</button> 
                    <Modal modalName="Add New Creature" content={<React.Fragment>
                        <form onSubmit={this.saveCreature}>
                            <div>
                                <label>Import From JSON: </label>
                                <input id="use-json" type="checkbox" onClick={this.toggleUseJson}></input>
                            </div>
                            {this.state.useJson ? (<textarea rows="10" cols='50' />) : (<React.Fragment>
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
                            <input type="submit" name='saveCreature' value="Save Creature"></input>
                        </form>
                    </React.Fragment>} />
                </React.Fragment>}/>
                
                {this.state.components}
            </div>
        )
    }
}

export default Main