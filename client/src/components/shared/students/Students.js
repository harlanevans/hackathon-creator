import React, { Component } from 'react';
import axios from 'axios';
import { List, Button, Header } from 'semantic-ui-react';
import StudentForm from './StudentForm';
import Student from './Student';

class Students extends Component {

  state = { 
    students: [],
    adding: false
  }

  componentDidMount() {
    axios.get(`/api/courses/${this.props.course_id}/students`)
    .then( res => {
      this.setState({ students: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }

  addStudent = (student) => {
    axios.post(`/api/courses/${this.props.course_id}/students`, student)
    .then( res => {
      this.setState({ students: [...this.state.students, res.data] })
    })
    .catch( err => {
      console.log(err)
    })
  }   

  toggleAdd = () => {this.setState({adding: !this.state.adding})}

  deleteStudent = (course_id, id) => {
    axios.delete(`/api/courses/${course_id}/students/${id}`)
    .then( res => {
      const { students } = this.state
      this.setState({students: students.filter( s => s.id !== id)})
    })
    .catch( err => {
      console.log(err)
    })
  }

  updateStudent = (course_id, id, student) => {

    axios.put(`/api/courses/${course_id}/students/${id}`, student)
    .then( res => {
      console.log(res)
      const students = this.state.students.map( s => {
      if (s.id === id)
        return res.data;
      return s;
    });
    this.setState({ students });
    })
    .catch( err => {
      console.log(err)
    })
  }

  render(){
    return(
      <List>
        <Header size='large'>Students</Header>
          {this.state.adding ? <></> : <Button onClick={this.toggleAdd}>Add Student</Button>}
          {this.state.adding ? 
          <StudentForm addStudent={this.addStudent} adding={this.state.adding} toggleAdd={this.toggleAdd}/>
          : 
          <></>
          }
          {
            this.state.students.map( s => 
              <Student 
                {...s} 
                deleteStudent={this.deleteStudent}
                updateStudent={this.updateStudent} 
              />
            )
          }
      </List>
    )
  }
}


export default Students
