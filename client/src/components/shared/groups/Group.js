import React, { Component } from 'react';
import { Dropdown, Card } from 'semantic-ui-react';
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
      <Card>
        <Card.Content>
          {
            this.state.editing ?
            <GroupForm 
              name={name} 
              id={id} 
              toggleEdit={this.toggleEdit} 
              updateGroup={this.props.updateGroup}
            />
            :
            <Card.Header>
              <div class="group-edit">
                {name}
                <div class="edit-buttons">
                <Dropdown icon='ellipsis vertical'>
                  <Dropdown.Menu>
                    <Dropdown.Item icon='pencil' text='Edit' onClick={this.toggleEdit}/>
                    <Dropdown.Item icon='trash' text='Delete' onClick={() => this.props.deleteGroup(id)}/>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
              </div>
            </Card.Header>
          }
            <StudentGroup course_id={this.props.course_id} group_id={id}/>
        </Card.Content>
      </Card>
    )
  }
}

export default Group