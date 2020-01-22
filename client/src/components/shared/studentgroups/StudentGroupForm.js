import React, { Component } from "react";
import { Form, Select } from 'semantic-ui-react';
import axios from 'axios';

class StudentGroupForm extends Component {

  state = {
    students: [],
    id: ''
  }

  componentDidMount() {
    axios.get(`/api/courses/${this.props.course_id}/students`)
    .then( res => {
      this.setState({ students: res.data })
      this.studentMap()
    })
    .catch( err => {
      console.log(err)
    })
  }

  studentMap = () => {
    const students = this.state.students.map(s =>
      {
        return {...s, text: s.name, value: s.id}
      })
      this.setState({ students })
  }
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSumbit = (e) => {
    const studentGroup = {group_id: this.props.group_id, student_id: this.state.id}
    e.preventDefault()
    this.props.addStudentGroup(studentGroup)
    this.setState({ id: ''})
    }

  render () { 
    return (
      <> 
        <Form onSubmit={this.handleSumbit}>
          <Form.Select
            name='id'
            value={this.state.id}
            options={this.state.students}
            placeholder='Student'
            onChange={this.handleChange}
            search
          />
          <Form.Button>Add to Group</Form.Button>
        </Form>
      </>
    )
  }
}

export default StudentGroupForm