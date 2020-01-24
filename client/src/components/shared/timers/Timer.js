import React, { Component } from "react";
import TimerForm from './TimerForm';
import { Card, Button } from 'semantic-ui-react';
import Clock from './Clock';

class Timer extends Component {
  state = {
      hours: 0,
      minutes: 0,
      running: false
  }

  componentDidUpdate(prevState) {
    if(this.state.running !== prevState.running){
      switch(this.state.running) {
        case true:
          this.handleStart();
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  handleStart = () => {
    this.timer = setInterval(() => {
      const newCount = this.state.minutes - 1;
      this.setState(
        {minutes: newCount >= 0 ? newCount : 0}
      );
    }, 60000);
  }

  handleStop = () => {
    if(this.timer) {
      clearInterval(this.timer);
      this.setState({running: false});
    }
  }
  
  handleResume = () => {
    if(this.timer) {
      this.setState({running: true});
    }
  }

  handleReset = () => {
    this.setState(
      {minutes: 0}
    );
  }

  handleCountdown = (minutes) => {
    this.setState({
      minutes: minutes,
      running: true
    })
  }

  render() {
      const { minutes, running } = this.state
      return (
        <Card>
          <h1>Lunch Timer</h1>
            { 
            minutes == 0 && hours == 0
              ? <h3>Get Coding!</h3>
              : <Clock minutes={minutes} />
              }
            <TimerForm handleCountdown={this.handleCountdown}/>
            {
              running ?
              <Button onClick={this.handleStop}>Stop</Button>
              :
              <Button onClick={this.handleResume}>Resume</Button>
            }
            <Button onClick={this.handleReset}>Reset</Button>
          </Card>

      )
  }
}

export default Timer;