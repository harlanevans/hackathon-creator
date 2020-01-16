import React, { Component } from 'react';
import StudentForm from './StudentForm';
import { List, Icon } from 'semantic-ui-react'

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
      <StudentForm 
        updateStudent={updateStudent}
        toggleEdit={this.toggleEdit}
        {...student}
      />
      :
      <List.Item>
      <List.Content>
        <List.Header>
          {name}
        </List.Header>
        <List.Description>
          {effort_lvl}
        </List.Description>
        <List.Description>
          {skill_lvl}
        </List.Description>
        <Icon 
          name='trash'
          onClick={() => deleteStudent(course_id, id)}
          />
        <Icon 
          name='pencil'
          onClick={this.toggleEdit}
          />
      </List.Content>
    </List.Item>
    )
  }

}

export default Student