import React, { Component } from 'react';
import StudentForm from './StudentForm';
import { Table, Icon } from 'semantic-ui-react'

class Student extends Component{


  state = {
    editing: false,
  }

  toggleEdit = () => {this.setState({editing: !this.state.editing})}

  render(){
    const {name, effort_lvl, skill_lvl, id, deleteStudent, updateStudent, course_id} = this.props
    const student = {name, effort_lvl, skill_lvl, id, course_id}
    return(
      this.state.editing ? 
      <Table.Body>
        <Table.Row>
          <Table.Cell colSpan='4'>
          <StudentForm 
            updateStudent={updateStudent}
            toggleEdit={this.toggleEdit}
            {...student}
          />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
      :
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            {name}
          </Table.Cell>
          <Table.Cell>
            {effort_lvl}
          </Table.Cell>
          <Table.Cell>
            {skill_lvl}
          </Table.Cell>
          <Table.Cell>
            <Icon
              name='trash'
              onClick={() => deleteStudent(course_id, id)}
              link
              />
            <Icon
              name='pencil'
              onClick={this.toggleEdit}
              color='orange'
              link
              />
            </Table.Cell>
        </Table.Row>
      </Table.Body>
    )
  }

}

export default Student