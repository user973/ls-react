import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends Component {
  
  state = {
      isModalShow: false
  };

  hideModal = () => {
    this.setState({ isModalShow: false });
  };

  showModal = () => {
    this.setState({ isModalShow: true });
  };

  render() {

    const {isModalShow} = this.state;
    //ReactDOM.createPortal(<Modal hideModal={this.hideModal} />, document.querySelector('#portal')) - не проходило unit-test
    return (
      <div>
        <button onClick={this.showModal}>Show modal!</button>
        { isModalShow ? <Modal hideModal={this.hideModal} /> : null }
      </div>
    );
  }
}

export default ModalButton;
