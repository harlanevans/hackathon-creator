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

  componentDidUpdate(prevProps, prevState) {
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
 
  isCompleted(prevState): boolean {
    if (this.state.running == false || prevState.running == true ) {
      return true
    }
    else return  false
  }

  render() {
      const { hours, minutes, running } = this.state
      return (
        <Card>
          <h1>Lunch Timer</h1>
            { this.isCompleted()
                ? <h3>Start Coding!</h3>
                : 
                <Clock minutes={minutes} />
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