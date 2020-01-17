import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react';
import TaskForm from './TaskForm'


class Task extends Component {

  state = {
    editing: false,
  }

  toggleEdit = () => {this.setState({editing: !this.state.editing})}

  render(){
    const {complete, name, staff, id, completeTask, deleteTask, updateTask, user_id} = this.props
    const task = {complete, name, staff, id, user_id}
    return(
      this.state.editing ? 
      <TaskForm 
        updateTask={updateTask}
        toggleEdit={this.toggleEdit}
        {...task}
      />
      :
      <List.Item>
      {complete ? 
        <Icon 
        onClick={() => completeTask({complete,name,staff,id})} 
          name='check circle'
          /> 
          : 
        <Icon 
        onClick={() => completeTask({complete,name,staff,id})} 
        name='circle outline'
        />
      }
      <List.Content>
        <List.Header>
          {name}
        </List.Header>
        <List.Description>
          {staff}
        </List.Description>
        <Icon 
          name='trash'
          onClick={() => deleteTask(user_id, id)}
          link
          />
        <Icon 
          name='pencil'
          onClick={this.toggleEdit}
          link
          />
      </List.Content>
    </List.Item>
    )
  }
}

export default Task