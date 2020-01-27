import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import '../../../App.css';
import axios from 'axios';
import Countdown from './Countdown';
import TimerForm from './TimerForm';

class Timer extends Component {

  state = {
    timers: [],
    id: '',
    types: '',
    end_time: '',
    timeTillDate: "17:00",
    timeFormat: "hh:mm",
    active: '',
    running: true,
    editing: false
  }

  componentDidMount() {
    axios.get(`/api/timers`)
    .then( res => {
      this.setState({ timers: res.data })
      this.timerMap()
    })
    .catch( err => {
      console.log(err)
    })
  }

  toggleEdit = () => {this.setState({editing: !this.state.editing})}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSumbit = (e) => {
    e.preventDefault()
    this.setState({ id: ''})
  }

  timerMap = () => {
    const timers = this.state.timers.map(s =>
      {
        return {...s, text: s.types, value: s.id}
      })
      this.setState({ timers })
  }

  render() {
    const { name, end_time, types, active } = this.props
    const timer = { name, end_time, types, active }
    return(
      <Segment>
        <Countdown
          timeTillDate={this.state.end_time} 
          timeFormat={this.state.timeFormat}
          running
        />
        <Form onSubmit={this.handleSumbit}>
          <Form.Select
            name='id'
            value={this.state.id}
            options={this.state.timers}
            placeholder='Timer'
            onChange={this.handleChange}
            search
          />
          <Form.Button>Choose Timer</Form.Button>
          { 
          this.state.editing ?
            <TimerForm 
              updateTimer={this.props.updateTimer}
              toggleEdit={this.toggleEdit}
              {...timer}
            />
          :
          <Form.Button onClick={this.toggleEdit}>Update Timer</Form.Button>
          }
        </Form>
      </Segment>
    )
  }
}

export default Timer