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



  render() {
      const { hours, minutes, running } = this.state
      return (
        <Card>
            { hours === 0 && minutes === 0
                ? <h1>STOP CODING!!!!!!!!!</h1>
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


// create_table "timers", force: :cascade do |t|
// t.string "name"
// t.time "start_time"
// t.time "end_time"
// t.boolean "complete"
// t.bigint "event_id", null: false
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// t.index ["event_id"], name: "index_timers_on_event_id"
// end


// create const for lunch
 
// figure out the math from end time subtracted start time 



