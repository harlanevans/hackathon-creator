import React, { Component } from 'react';
import Countdown, { CountdownApi } from 'react-countdown';

var time = new Date()
time.setHours(17,0,0,0)
var endTime = (time.getTime() - new Date().getTime())

class ReactTimer extends Component {
    countdownApi: CountdownApi | null = null;
    
    state = { date: Date.now() + endTime };
    
    handleResetClick = (): void => {
        this.setState({ date: Date.now() + endTime});
      };

    handleStartClick = (): void => {
      this.countdownApi && this.countdownApi.start();
    };
  
    handlePauseClick = (): void => {
      this.countdownApi && this.countdownApi.pause();
    };
    
    handleUpdate = (): void => {
      this.forceUpdate();
    };
  
    setRef = (countdown: Countdown | null): void => {
      if (countdown) {
        this.countdownApi = countdown.getApi();
      }
    };
  
    isPaused(): boolean {
      return !!(this.countdownApi && this.countdownApi.isPaused());
    }
  
    isCompleted(): boolean {
      return !!(this.countdownApi && this.countdownApi.isCompleted())
    }

    tick() {
        this.setState((prevState, props) => ({
            diff: prevState.fixDate - (new Date()).getTime(),
        }));
    }

    render() {
        
      return (
        <>
        <h1>Countdown</h1>
        { this.isCompleted() ?
        <h3>Stop Coding</h3>
        : null }

        <Countdown
          key={this.state.date}
          ref={this.setRef}
          date={this.state.date}
          onMount={this.handleUpdate}
          onStart={this.handleUpdate}
          onPause={this.handleUpdate}
          onComplete={this.handleUpdate}
          autoStart={false}
        />
        <div>
          <button
            type="button"
            onClick={this.handleStartClick}
            disabled={!this.isPaused() || this.isCompleted()}
          >
            Start
          </button>{' '}
          <button type="button" onClick={this.handleResetClick}>
            Reset
          </button>
        </div>
      </>
      )
    
    }
}

export default ReactTimer;