import React, { Component } from 'react';
import { Card, Form } from 'semantic-ui-react';


class TimerForm extends Component {
  state = { minutes: 0 }


  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCountdown(parseInt(this.state.minutes)); 
  }


  render() {
    const { minutes, lunch } = this.state
    return(
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name='minutes'
            value={minutes}
            onChange={this.handleChange}
            type='number' 
            min='1'
            max='1440'
          />

          <Form.Select
            name='lunch'
            value={lunch}
            onChange={this.handleChange}
            options={LunchTime}
            label='Lunch Time'
          />
        </Form>
    )
  }  
}



export default TimerForm;


const LunchTime = [
  { key: '30', text: '30 Minutes', value: 30 },
  { key: '45', text: '45 Minutes', value: 45 },
  { key: '60', text: '60 Minutes', value: 60 }
]

