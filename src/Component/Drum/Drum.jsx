import React from "react";
import "./drum.css";

const Drum = () => {
  return (
    <div className="App">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Russo+One"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="style.css" />
      <title>Drum Machine</title>
      <div id="root">
        <div className="inner-container" id="drum-machine">
          <div className="pad-bank">
            <div className="drum-pad" id="Heater-1">
              Q
              <audio
                className="clip"
                id="Q"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              />
            </div>
            <div className="drum-pad" id="Heater-2">
              W
              <audio
                className="clip"
                id="W"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              />
            </div>
            <div className="drum-pad" id="Heater-3">
              E
              <audio
                className="clip"
                id="E"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              />
            </div>
            <div className="drum-pad" id="Heater-4">
              A
              <audio
                className="clip"
                id="A"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              />
            </div>
            <div className="drum-pad" id="Clap">
              S
              <audio
                className="clip"
                id="S"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              />
            </div>
            <div className="drum-pad" id="Open-HH">
              D
              <audio
                className="clip"
                id="D"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              />
            </div>
            <div className="drum-pad" id="Kick-n-Hat">
              Z
              <audio
                className="clip"
                id="Z"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              />
            </div>
            <div className="drum-pad" id="Kick">
              X
              <audio
                className="clip"
                id="X"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              />
            </div>
            <div className="drum-pad" id="Closed-HH">
              C
              <audio
                className="clip"
                id="C"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              />
            </div>
          </div>
          <div className="controls-container">
            <div className="control">
              <p>Power</p>
              <div className="power-control">
                <div className="inner" />
                <div className="signal-light" />
              </div>
            </div>
            <div className="control">
              <p>Volume</p>
              <input
                type="range"
                min={0}
                max={1}
                step="0.01"
                defaultValue="0.5"
                className="volume-control"
              />
            </div>
            <div id="display">Welcome to BP's Music Player</div>
          </div>
        </div>
      </div>
      <div
        className="author"
        style={{ textAlign: "center", marginTop: "5px", color: "black" }}
      >
        Made by Bisheswor parajuli
      </div>
    </div>
  );
};

export default Drum;
