import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

const active_dropdown = [ { key: "yes", text: "yes", value: true},
{ key: "no", text: "no", value: false} ]

const types_dropdown = [ { key: "event", text: "event", value: "event"},
{ key: "lunch", text: "lunch", value: "lunch"} ]

class TimerForm extends Component {

  state = {
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
    if (this.props.id) {
      this.props.updateTimer(this.props.course_id, this.props.id, this.state)
      this.props.toggleEdit()
      this.setState({ name: '', end_time: '', types: '', active: null })
    } else {
      this.props.addTimer(this.state)
      this.props.toggleAdd()
      this.setState({ name: '', end_time: '', types: '', active: null })
    }
    }

  render() {
    const { name, end_time, types, active } = this.state
    return(
      <Form onSubmit={ this.handleSumbit }>     
        <Form.Group>
          <Form.Input 
            name='name'
            value={name}
            onChange={this.handleChange}
            label='Timer Name'
            required
            />
          <Form.Input
            type={<input type='time'/>}
            name='end_time'
            value={end_time}
            onChange={this.handleChange}
            />
          <Form.Select
            name='type'
            value={types}
            options={types_dropdown}
            onChange={this.handleChange}
            label='type'
            required
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
          <Form.Button>{this.props.id ? "Update Timer" : "Create Timer" }</Form.Button>
          <Button onClick={this.props.id ? this.props.toggleEdit : this.props.toggleAdd}>Cancel</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default TimerForm;