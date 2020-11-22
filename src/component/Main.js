import React, {Component} from 'react'
import EncounterTracker from './encounter_tracker/EncounterTracker';
import Navbar from './Navbar';

class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            components: []
        }
    }

    createEncounter = () => {
        const key = 'encounter-'+(this.state.components.length+1);
        this.setState({components: [...this.state.components, <EncounterTracker key={key} removeEncounter={() => this.removeEncounter(key)}/>]})
    }

    removeEncounter = (key) => {
        this.setState({components: this.state.components.filter((component) => component.key !== key)});
    }

    render(){
        return (
            <div className="main">
                <Navbar content={<button onClick={this.createEncounter}>Create New Encounter</button>}/>
                {this.state.components}
            </div>
        )
    }
}

export default Main