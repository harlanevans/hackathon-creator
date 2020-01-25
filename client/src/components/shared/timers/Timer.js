import React, { Component } from 'react';
import { Form, Segment } from 'semantic-ui-react';
import '../../../App.css';
import Countdown from './Countdown';

class Timer extends Component {

  state = {
    timeTillDate: "17:00",
    timeFormat: "hh:mm",
    running: false
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSumbit = (e) => {
    e.preventDefault()
    this.setState({running: !this.state.running})
  }

  render() {
    return(
      <Segment>
        <Countdown
          timeTillDate={this.state.timeTillDate} 
          timeFormat={this.state.timeFormat}
          running
        />
        <Form onSubmit={this.handleSumbit}>
          <Form.Group>  
            <Form.Input
              type={<input type='time'/>}
              name='timeTillDate'
              value={this.state.timeTillDate}
              onChange={this.handleChange}
            />
            <Form.Button>{this.state.running ? "Stop Clock" : "Start Clock"}</Form.Button>
          </Form.Group>
        </Form>
      </Segment>
    )
  }
}

export default Timer