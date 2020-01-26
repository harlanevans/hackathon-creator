import React, { Component } from 'react';
import { Form, Segment } from 'semantic-ui-react';
import '../../../App.css';
import axios from 'axios';
import Countdown from './Countdown';
import TimerForm from './TimerForm';

class Timer extends Component {

  state = {
    timers: [],
    timeTillDate: "17:00",
    timeFormat: "hh:mm",
    running: false,
    editing: false
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

  toggleEdit = () => {this.setState({editing: !this.state.editing})}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSumbit = (e) => {
    e.preventDefault()
    this.setState({running: !this.state.running})
  }

  render() {
    const { name, end_time, types, active } = this.props
    const timer = { name, end_time, types, active }
    return(
      this.state.editing ?
      <TimerForm 
      updateTimer={this.props.updateTimer}
      toggleEdit={this.toggleEdit}
      {...timer}
      />
      :
      <Segment>
        <Countdown
          timeTillDate={this.state.end_time} 
          timeFormat={this.state.timeFormat}
          running
        />
        <Form onSubmit={this.handleSumbit}>
          <Form.Group>  
            <Form.Input
              type={<input type='time'/>}
              name='end_time'
              value={this.state.end_time}
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