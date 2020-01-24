import React, { Component } from 'react';
import { Icon, Card } from 'semantic-ui-react';
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
                {name}
              <Icon
                name='trash'
                onClick={() => this.props.deleteGroup(id)}
                floated='right'
                link
                />
              <Icon
                name='pencil'
                onClick={this.toggleEdit}
                floated='right'
                link
                />
            </Card.Header>
          }
            <StudentGroup course_id={this.props.course_id} group_id={id}/>
        </Card.Content>
      </Card>
    )
  }
}

export default Group