import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { PrimaryBtn, DefaultBtn } from '../../styled-components/Shared';


class TaskForm extends Component {

  state = {
    name: '',
    staff: '',
    complete: '',
  } 

  componentDidMount() {
    const { id, name, staff, complete } = this.props
    if (id) {
      this.setState({
        name,
        staff,
        complete,
      })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSumbit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateTask(this.props.user_id, this.props.id, this.state)
      this.props.toggleEdit()
      this.setState({ name: '', staff: '', complete: '' })
    } else {
      this.props.addTask(this.state)
      this.props.toggleAdd()
      this.setState({ name: '', staff: '', complete: '' })
    }
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
          required
          />
        <Form.Input 
          name='staff'
          value={staff}
          onChange={this.handleChange}
          label='Assigned To'
          required
          />
        <Form.Group>
          <PrimaryBtn>{this.props.id ? "Update Task" : "Create Task" }</PrimaryBtn>
          <DefaultBtn onClick={this.props.id ? this.props.toggleEdit : this.props.toggleAdd}>Cancel</DefaultBtn>
        </Form.Group>
      </Form>
    )
  }
}

export default TaskForm;