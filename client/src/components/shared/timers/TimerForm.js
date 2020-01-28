import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { PrimaryBtn, DefaultBtn } from '../../styled-components/Shared';


class TimerForm extends Component {

  state = {
    end_time: '',
    types: '', 
    active: undefined
  } 

  componentDidMount() {
    const { end_time, types, active } = this.props
    this.setState({
        end_time,
        types,
        active
      })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  toggleActive = () => {
    const { types, end_time, active } = this.state
    this.setState({ types: types, end_time: end_time, active: !active})
    this.props.updateTimer(this.props.id, this.state)
  }

  handleSumbit = (e) => {
    const { types, end_time, active } = this.state
    e.preventDefault()
    const updatedTimer = { types: types, end_time: end_time, active: active}
    this.props.updateTimer(this.props.id, updatedTimer)
    this.setState({types, end_time, active})
    }

  render() {
    const { end_time, active } = this.state
    return(
      <Form onSubmit={ this.handleSumbit }>     
        <Form.Group>
          <Form.Input
            type='time'
            name='end_time'
            value={end_time}
            onChange={this.handleChange}
            />
          <PrimaryBtn>Change End Time</PrimaryBtn>
          <DefaultBtn onClick={this.toggleActive}>{active ? "Stop" : "Start"}</DefaultBtn>
        </Form.Group>
      </Form>
    )
  }
}

export default TimerForm;