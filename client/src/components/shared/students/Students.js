import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Header, Segment, Divider } from 'semantic-ui-react';
import { PrimaryBtn, DefaultBtn } from '../../styled-components/Shared';
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
      <Segment>
      <Header size='large'>Students</Header>
      {this.state.adding ? <></> : <PrimaryBtn onClick={this.toggleAdd}>Add Student</PrimaryBtn>}
      <Divider />
      <Table celled structured>
          {this.state.adding ? 
          <Table.Header>  
            <Table.Row>
              <Table.Cell colSpan='4'>
                <StudentForm addStudent={this.addStudent} adding={this.state.adding} toggleAdd={this.toggleAdd}/>
              </Table.Cell>
            </Table.Row>
          </Table.Header>
          : 
          <></>
          }
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Name
              </Table.HeaderCell>
              <Table.HeaderCell>
                Effort Level
              </Table.HeaderCell>
              <Table.HeaderCell>
                Skill Level
              </Table.HeaderCell>
              <Table.HeaderCell>
                Delete/Edit
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {
            this.state.students.map( s => 
              <Student 
                key={s.id}
                {...s} 
                deleteStudent={this.deleteStudent}
                updateStudent={this.updateStudent} 
              />
            )
          }
      </Table>
      </Segment>
    )
  }
}


export default Students
