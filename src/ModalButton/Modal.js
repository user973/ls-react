import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './ModalButton.css';

class Modal extends Component {
  
  render() {
    
    const {hideModal} = this.props;

    return ReactDOM.createPortal(
      (
        <div className='modal'>
          <div className='modal__fog'>
            <div className='modal__body'>
              <h1>Модальное окно!</h1>
              <button onClick={hideModal}>Close</button>
            </div>
          </div>
        </div>
      ),
      document.querySelector('#portal')
    );

  };
  
  
}

export default Modal;
