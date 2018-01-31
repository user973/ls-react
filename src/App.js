import React, {Component} from 'react';
import './App.css';
import Switcher from './Switcher/Switcher';
import CardNumberHolder from './CardNumberHolder/CardNumberHolder';
import ModalButton from './ModalButton/ModalButton';
import VideoPlayer from './VideoPlayer/VideoPlayer';

class App extends Component {
  render() {
    return (
      <Switcher>
        <VideoPlayer />
        <CardNumberHolder />
        <ModalButton />
      </Switcher>
    );
  }
}

export default App;
