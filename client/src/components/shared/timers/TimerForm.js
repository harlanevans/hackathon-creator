import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

const active_dropdown = [ { key: "yes", text: "Yes", value: true},
{ key: "no", text: "No", value: false} ]

class TimerForm extends Component {

  state = {
    id: '',
    name: '', 
    end_time: '',
    types: '', 
    active: null
  } 

  componentDidMount() {
    const { id, name, end_time, types, active } = this.props
    if (id) {
      this.setState({
        id,
        name,
        end_time,
        types,
        active
      })
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSumbit = (e) => {
    e.preventDefault()
    this.props.updateTimer(this.props.id, this.state)
    this.props.toggleEdit()
    this.setState({ name: '', end_time: '', types: '', active: null }) 
    }

  render() {
    const { end_time, active } = this.state
    return(
      <Form onSubmit={ this.handleSumbit }>     
        <Form.Group>
          <Form.Input
            type={<input type='time'/>}
            name='end_time'
            value={end_time}
            label='End Time'
            onChange={this.handleChange}
            />
         <Form.Select
            name='active'
            value={active}
            options={active_dropdown}
            onChange={this.handleChange}
            label='Active'
            required
            />
        </Form.Group>
        <Form.Group>
          <Form.Button>Update Timer</Form.Button>
          <Button onClick={this.props.toggleEdit}>Cancel</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default TimerForm;