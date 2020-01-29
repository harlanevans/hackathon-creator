import React, { Component } from 'react';
import axios from 'axios';
import {Card, Segment} from 'semantic-ui-react';
import Timer from './Timer'
import { Sections, TimerFlex } from '../../styled-components/Shared';


class Timers extends Component {

  state = {
    timers: []
  }

  componentDidMount() {
    axios.get(`/api/timers`)
    .then( res => {
      this.setState({ timers: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }

  updateTimer = (id, updatedTimer) => {
    axios.put(`/api/timers/${id}`, updatedTimer)
    .then( res => {
      const timers = this.state.timers.map( t => {
      if (t.id === id)
        return res.data;
      return t;
    });
    this.setState({ timers });
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() {
    return(
      <div className="timer">
      <Sections>
          <h1>Event Timers</h1>
          <TimerFlex>
            {
              this.state.timers.map( t => 
                <Timer 
                key={t.id} 
                {...t} 
                updateTimer={this.updateTimer}
                />
                )
              }
          </TimerFlex>
      </Sections>
      </div>
    )
  }
}

export default Timers