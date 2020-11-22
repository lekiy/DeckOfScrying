import React, {Component} from 'react';

class Modal extends Component {

    constructor(props){
        super(props);
        this.state = {
            isActive: false
        }
    }

    toggleModal = () => {
        this.setState({isActive: !this.state.isActive});
    }
    
    render(){
        return (<React.Fragment>
            <button className={this.props.buttonClass+' open-modal-btn'} onClick={this.toggleModal}>{this.props.modalName}</button>
            {this.state.isActive ?
            (
                <div className="modal">
                    <button className="close-modal-btn" onClick={this.toggleModal}>X</button>
                    <div className="modal-content">
                        {this.props.content}
                    </div>
                    
                </div>
            ) : (<React.Fragment />)}
            
            </React.Fragment>)
    }
}

export default Modal;