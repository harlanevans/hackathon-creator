import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class EventForm extends Component {

  state = {
    name: null,
    rubric: null,
  }

  

  componentDidMount() {
    const { id, name, rubric } = this.props
    if (id) {
      this.setState({
        name,
        rubric
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
      this.props.updateEvent(this.props.course_id, this.props.id, this.state)
      this.props.toggleEdit()
      this.setState({ name: null, rubric: null })
    } else {
      this.props.addEvent(this.state)
      this.props.toggleAdd()
      this.setState({ name: null, rubric: null })
    }
  }

  render() {
    const { name, rubric } = this.state
    return (
      <Form onSubmit={this.handleSumbit}>
        <Form.Input
          name='name'
          value={name}
          onChange={this.handleChange}
          label='Event Name'
        />
        <Form.Input
          name='rubric'
          value={rubric}
          onChange={this.handleChange}
          label='Rubric'
        />
        <Form.Group>
          <Form.Button>{this.props.id ? "Update Event" : "Create Event"}</Form.Button>
          <Button onClick={this.props.id ? this.props.toggleEdit : this.props.toggleAdd}>Cancel</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default EventForm;
