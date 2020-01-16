import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class StudentForm extends Component {

  state = {
    name: null,
    skill_lvl: null,
    effort_lvl: null,
  } 

  componentDidMount() {
    const { id, name, skill_lvl, effort_lvl } = this.props
    if (id) {
      this.setState({
        name,
        skill_lvl,
        effort_lvl,
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
      this.props.updateStudent(this.props.course_id, this.props.id, this.state)
      this.props.toggleEdit()
      this.setState({ name: null, skill_lvl: null, effort_lvl: null })
    } else {
      this.props.addStudent(this.state)
      this.props.toggleAdd()
      this.setState({ name: null, skill_lvl: null, effort_lvl: null })
    }
    }

  render() {
    const { name, skill_lvl, effort_lvl } = this.state
    return(
      <Form onSubmit={ this.handleSumbit }>     
        <Form.Input 
          name='name'
          value={name}
          onChange={this.handleChange}
          label='Student Name'
          />
        <Form.Input 
          name='skill_lvl'
          value={skill_lvl}
          onChange={this.handleChange}
          label='Skill Level'
          />
        <Form.Input 
          name='effort_lvl'
          value={effort_lvl}
          onChange={this.handleChange}
          label='Effort Level'
          />
        <Form.Group>
          <Form.Button>{this.props.id ? "Update Student" : "Create Student" }</Form.Button>
          <Button onClick={this.props.id ? this.props.toggleEdit : this.props.toggleAdd}>Cancel</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default StudentForm;