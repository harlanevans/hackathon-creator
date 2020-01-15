import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';


class TaskForm extends Component {

  state = {
    name: null,
    staff: null,
    complete: false,
  } 

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSumbit = (e) => {
    e.preventDefault()
    this.props.addTask(this.state)
    this.props.toggleAdd()
    this.setState({ name: null, staff: null })
    }

  render() {
    const { name, staff } = this.state
    return(
      <Form onSubmit={ this.handleSumbit }>     
          <Form.Input 
            name='name'
            value={name}
            onChange={this.handleChange}
            label='Task Name'
            />
          <Form.Input 
            name='staff'
            value={staff}
            onChange={this.handleChange}
            label='Assigned To'
            />
        <Form.Button>Create Task</Form.Button>
      </Form>
    )
  }
}

export default TaskForm;