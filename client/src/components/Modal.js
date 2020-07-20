import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class ModalBox extends React.Component {
  state = {showModal: false };
  
  componentDidMount() {
    Modal.setAppElement('body');
}

  handleOpenModal=()=>{
    this.setState({ showModal: true });
  }
  
  handleCloseModal=()=>{
    this.setState({ showModal: false });
  }
  
  render () {
    const{title,description,tech}=this.props;
    return (
      <> 
        <button onClick={this.handleOpenModal} className="portfolio-button">Learn More <span><FontAwesomeIcon icon='arrow-right'/></span></button>
        <Modal 
           isOpen={this.state.showModal}
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="overlay-modal"
        >
          <h3>{title}</h3> 
          <div className='modal-content'>
            <p>{description}</p>
            <h5>Created With: <span>{tech}</span></h5>
            {this.props.children}
          </div>
        </Modal>
      </>
    );
  }
}
