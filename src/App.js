import React, {Component} from 'react';
import './App.css';
import Switcher from './Switcher/Switcher';
import CardNumberHolder from './CardNumberHolder/CardNumberHolder';
import ModalButton from './ModalButton/ModalButton';
import VideoPlayer from './VideoPlayer/VideoPlayer';

class App extends Component {
  render() {

    const Aaa = () => <CardNumberHolder />;
    Aaa.displayName = 'Card number formating';

    return (
      <Switcher>
        <VideoPlayer />
        <Aaa />
        <ModalButton />
      </Switcher>
    );
  }
}

export default App;
