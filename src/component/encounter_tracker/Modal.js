import React, {Component} from 'react';

class Modal extends Component {
    
    render(){
        if(this.props.isActive){
            return (
                <div className="modal">
                    <button className="close-modal-btn" onClick={this.props.toggleModal}>X</button>
                    <div className="modal-content">
                        {this.props.content}
                    </div>
                    
                </div>
            )
        }
        return (<div></div>);
    }
}

export default Modal;