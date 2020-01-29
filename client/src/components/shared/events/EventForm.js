import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { PrimaryBtn, DefaultBtn } from '../../styled-components/Shared';

class EventForm extends Component {

  state = {
    name: '',
    rubric: '',
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
      this.setState({ name: '', rubric: '' })
    } else {
      this.props.addEvent(this.state)
      this.props.toggleAdd()
      this.setState({ name: '', rubric: '' })
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
          label='Rubric link to PDF'
        />
        <Form.Group>
          <PrimaryBtn>{this.props.id ? "Update Event" : "Create Event"}</PrimaryBtn>
          <DefaultBtn onClick={this.props.id ? this.props.toggleEdit : this.props.toggleAdd}>Cancel</DefaultBtn>
        </Form.Group>
      </Form>
    )
  }
}

export default EventForm;
