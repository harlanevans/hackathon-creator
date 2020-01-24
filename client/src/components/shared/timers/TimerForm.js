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
    const { minutes } = this.state
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
        </Form>
    )
  }  
}



export default TimerForm;