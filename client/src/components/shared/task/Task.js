import React, { Component } from 'react';
import { List, Icon, Dropdown } from 'semantic-ui-react';
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
      {
        complete ? 
          <Icon 
            onClick={() => completeTask({complete,name,staff,id})} 
            name='check circle'
            link
          /> 
        : 
          <Icon 
            onClick={() => completeTask({complete,name,staff,id})} 
            name='circle outline'
            link
            />
          }
      <List.Content>
        <List.Header>
          <Dropdown icon='ellipsis vertical' float='right'>
            <Dropdown.Menu>
              <Dropdown.Item icon='pencil' text='Edit' onClick={this.toggleEdit}/>
              <Dropdown.Item icon='trash' text='Delete' onClick={() => deleteTask(user_id, id)}/>
            </Dropdown.Menu>
          </Dropdown>     
          {name}
        </List.Header>
        <List.Description>
        &emsp;&ensp;{staff}
        </List.Description>
      </List.Content>
     </List.Item>
    )
  }
}

export default Task