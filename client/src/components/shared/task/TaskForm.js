import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class TaskForm extends Component {

  state = {
    name: null,
    staff: null,
    complete: null,
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
      this.setState({ name: null, staff: null, complete: null })
    } else {
      this.props.addTask(this.state)
      this.props.toggleAdd()
      this.setState({ name: null, staff: null, complete: null })
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
          />
        <Form.Input 
          name='staff'
          value={staff}
          onChange={this.handleChange}
          label='Assigned To'
          />
        <Form.Group>
          <Form.Button>{this.props.id ? "Update Task" : "Create Task" }</Form.Button>
          <Button onClick={this.props.id ? this.props.toggleEdit : this.props.toggleAdd}>Cancel</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default TaskForm;