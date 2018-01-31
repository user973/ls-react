import React, {Component} from 'react';
import './ModalButton.css';

class Modal extends Component {
  
  render() {
    
    const {hideModal} = this.props;

    return (
      <div className='modal'>
        <div className='modal__fog'>
          <div className='modal__body'>
            <h1>Модальное окно!</h1>
            <button onClick={hideModal}>Close</button>
          </div>
        </div>
      </div>
    );

  };
  
  
}

export default Modal;
