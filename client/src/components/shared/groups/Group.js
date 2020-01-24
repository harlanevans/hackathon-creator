import React, { Component } from 'react';
import { Icon, Form, Select } from 'semantic-ui-react';
import GroupForm from './GroupForm';
import StudentGroup from '../studentgroups/StudentGroup';

class Group extends Component {

  state = {
    editing: false
  }

  toggleEdit = () => {this.setState({editing: !this.state.editing})}

  render(){
    const { id, name } = this.props
    return(
      <>
      {
        this.state.editing ?
        <GroupForm 
          name={name} 
          id={id} 
          toggleEdit={this.toggleEdit} 
          updateGroup={this.props.updateGroup}
        />
        :
        <h1>{name}</h1>

      }
        <Icon
          name='trash'
          onClick={() => this.props.deleteGroup(id)}
          link
          />
        <Icon
          name='pencil'
          onClick={this.toggleEdit}
          link
          />

        <StudentGroup course_id={this.props.course_id} group_id={id}/>
      </>
    )
  }
}

export default Group