import React, {Component} from 'react';
import './VideoPlayer.css';

class VideoPlayer extends Component {

  play = () => {
    this.video.play();
  }

  stop = () => {
    this.video.pause();
  }

  render() {
    return (
      <div className='video-player'>
        <video ref={(video) => this.video = video} className='video-player__source'>
          <source src='Video.mp4' type='video/mp4'/>
        </video>
        <div>
          <button onClick={this.play}>Play</button>
          <button onClick={this.stop}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
