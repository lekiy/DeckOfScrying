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
        this.setState({components: [...this.state.components, <EncounterTracker />]})
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