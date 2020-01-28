import React, { Component } from 'react';
import axios from 'axios';
import {Card, Segment} from 'semantic-ui-react';
import Timer from './Timer'

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
      <Segment>
        <h1>Event Timers</h1>
        <Card.Group itemsPerRow='2'>
          {
            this.state.timers.map( t => 
              <Timer 
                key={t.id} 
                {...t} 
                updateTimer={this.updateTimer}
              />
            )
          }
        </Card.Group>
      </Segment>
    )
  }
}

export default Timers