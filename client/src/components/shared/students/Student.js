import React, { Component } from 'react';
import StudentForm from './StudentForm';
import { Table, Dropdown } from 'semantic-ui-react'

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
            <Dropdown icon='ellipsis vertical'>
              <Dropdown.Menu>
                <Dropdown.Item icon='pencil' text='Edit' onClick={this.toggleEdit}/>
                <Dropdown.Item icon='trash' text='Delete' onClick={() => deleteStudent(course_id, id)}/>
              </Dropdown.Menu>
            </Dropdown>
            {name}
          </Table.Cell>
          <Table.Cell>
            {effort_lvl}
          </Table.Cell>
          <Table.Cell>
            {skill_lvl}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    )
  }

}

export default Student