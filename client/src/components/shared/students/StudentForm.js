import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

const lvl_choices = [ { key: "1", text: "1", value: 1},
{ key: "2", text: "2", value: 2},
{ key: "3", text: "3", value: 3},
{ key: "4", text: "4", value: 4},
{ key: "5", text: "5", value: 5} ]

class StudentForm extends Component {

  state = {
    name: '',
    skill_lvl: '',
    effort_lvl: '',
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

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSumbit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateStudent(this.props.course_id, this.props.id, this.state)
      this.props.toggleEdit()
      this.setState({ name: '', skill_lvl: '', effort_lvl: '' })
    } else {
      this.props.addStudent(this.state)
      this.setState({ name: '', skill_lvl: '', effort_lvl: '' })
    }
    }

  render() {
    const { name, skill_lvl, effort_lvl } = this.state
    return(
      <Form onSubmit={ this.handleSumbit }>     
        <Form.Group>
          <Form.Input 
            name='name'
            value={name}
            onChange={this.handleChange}
            label='Student Name'
            required
            />
          <Form.Select
            name='skill_lvl'
            value={skill_lvl}
            onChange={this.handleChange}
            options={lvl_choices}
            label='Skill Level'
            required
            />
          <Form.Select
            name='effort_lvl'
            value={effort_lvl}
            options={lvl_choices}
            onChange={this.handleChange}
            label='Effort Level'
            required
            />
        </Form.Group>
        <Form.Group>
          <Form.Button>{this.props.id ? "Update Student" : "Create Student" }</Form.Button>
          <Button onClick={this.props.id ? this.props.toggleEdit : this.props.toggleAdd}>Cancel</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default StudentForm;