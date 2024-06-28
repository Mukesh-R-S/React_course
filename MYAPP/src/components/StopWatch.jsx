import React, { Component } from "react";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      running: false,
    };
    this.timer = null;
  }

  startStopwatch = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.timer = setInterval(() => {
        this.setState({ elapsedTime: this.state.elapsedTime + 1 });
      }, 1000);
    }
  };

  stopStopwatch = () => {
    if (this.state.running) {
      this.setState({ running: false });
      clearInterval(this.timer);
    }
  };

  resetStopwatch = () => {
    this.setState({ elapsedTime: 0, running: false });
    clearInterval(this.timer);
  };

  formatTime = (elapsedTime) => {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  render() {
    const { elapsedTime, running } = this.state;
    return (
      <div>
        <h1>Stopwatch</h1>
        <p>{this.formatTime(elapsedTime)}</p>
        <button onClick={this.startStopwatch} disabled={running}>
          Start
        </button>
        <button onClick={this.stopStopwatch} disabled={!running}>
          Stop
        </button>
        <button onClick={this.resetStopwatch}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
