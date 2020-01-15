import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { AuthConsumer } from '../../../providers/AuthProvider';
import { List, Button, Icon, Header } from 'semantic-ui-react';
import TaskForm from './TaskForm'

class Task extends Component {

  state = { 
    tasks: [],
    // loading: false,
    adding: false
  }

  componentDidMount() {
    if (this.props.auth.user) {
      axios.get(`/api/users/${this.props.auth.user.id}/tasks`)
      .then( res => {
        this.setState({ tasks: res.data })
      })
      .catch( err => {
        console.log(err)
      })
    }
  }

  addTask = (task) => {
    axios.post(`/api/users/${this.props.auth.user.id}/tasks`, task)
    .then( res => {
      this.setState({ tasks: [...this.state.tasks, res.data] })
    })
    .catch( err => {
      console.log(err)
    })
  }   

  toggleAdd = () => {this.setState({adding: !this.state.adding})}

  deleteTask = (user_id, id) => {
    axios.delete(`/api/users/${user_id}/tasks/${id}`)
    .then( res => {
      const { tasks } = this.state
      this.setState({tasks: tasks.filter( t => t.id !== id)})
    })
    .catch( err => {
      console.log(err)
    })
  }

  updateTask = (user_id, id, task) => {
    axios.put(`/api/users/${user_id}/tasks/${id}`, task)
    .then( res => {
      console.log(res)
      const tasks = this.state.tasks.map( t => {
      if (t.id === id)
        return res.data;
      return t;
    });
    this.setState({ tasks, 
      // loading: false 
    });
    })
    .catch( err => {
      console.log(err)
    })
  }

  completeTask = (task) => {
    task.complete = !task.complete;
    const updatedTasks = this.state.tasks.map( t => {
      if (t.id === task.id) return task;
      return t;
    })
    this.setState({ 
      tasks: updatedTasks, 
      loading: !this.state.loading 
    }, () => this.updateTask(task.user_id, task.id, task));
  }

  render(){
    return(
      <List>
        <Header size='large'>Tasks</Header>
          {
            this.props.auth.user ? 
            <>
              <Button onClick={this.toggleAdd}>
                {this.state.adding ? <>Cancel</> : <>Add Task</> }
              </Button>
              {this.state.adding ? 
              <TaskForm addTask={this.addTask} adding={this.state.adding} toggleAdd={this.toggleAdd}/>
              : 
              <></>
              }
              {this.state.tasks.map( t => 
                <List.Item>
                  {t.complete ? 
                    <Icon 
                      onClick={() => this.completeTask(t)} 
                      name='check circle'
                    /> 
                  : 
                    <Icon 
                      onClick={() => this.completeTask(t)} 
                      name='circle outline'
                    />
                  }
                  <List.Content>
                    <List.Header>
                      {t.name}
                    </List.Header>
                    <List.Description>
                      {t.staff}
                    </List.Description>
                    <Icon 
                      name='trash'
                      onClick={() => this.deleteTask(this.props.auth.user.id, t.id)}
                    />
                    <Icon 
                      name='pencil'
                    />
                  </List.Content>
                </List.Item>
              )}
            </>
            : 
            <List.Item>Sign in to create tasks</List.Item>
          }
      </List>
    )
  }
}


export class ConnectedTask extends Component {
  render(){
    return(
      <AuthConsumer>
        {
          auth =>
          <Task {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedTask)
