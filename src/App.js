import React from 'react';
import './style.css';

function App() {
  let initAudio = () => {
    const targetAudio = document.getElementsByClassName('audioBtn')[0];
    targetAudio.play();
  };

  return (
    <div className="container">
      <button className="btn" onClick={initAudio}>
        Play Mp3 Audio
      </button>

      <audio className="audioBtn">
        <source src="\\## MUSIC\Beats by Date\2024\4 April\Week 3\Sinner 140 @CAESARS_WRLD.mp3"></source>
      </audio>
    </div>
  );
}

export default App;
