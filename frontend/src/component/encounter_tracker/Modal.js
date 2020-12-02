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
            <button className={`open-modal-btn ${this.props.btnClass}`} onClick={() => {this.toggleModal(); if(this.props.onClick){this.props.onClick()}}}>{this.props.modalName}</button>
            {this.state.isActive ?
            (
                <div className="modal-bg">
                    <div className="modal">
                        <div className='modal-header'>
                            <h3 className='modal-name'>{this.props.modalName}</h3>
                            <button className="close-modal-btn" onClick={this.toggleModal}>X</button>
                        </div>
                        <div className="modal-content">
                        
                            {this.props.content}
                        </div>
                    </div>
                    
                </div>
            ) : (<React.Fragment />)}
            
            </React.Fragment>)
    }
}

export default Modal;