import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { AuthConsumer } from '../../../providers/AuthProvider';
import { List, Button, Card } from 'semantic-ui-react';
import TaskForm from './TaskForm';
import Task from './Task';

class Tasks extends Component {

  state = { 
    tasks: [],
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

    axios.put(`/api/users/${this.props.auth.user.id}/tasks/${id}`, task)
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
      
      <Card>
        <Card.Content>
          <Card.Header>Tasks</Card.Header>
        </Card.Content>
        <Card.Content>
          
              {
                this.props.auth.user ? 
                <>
                
                  <Card.Content>
                    <Card.Description>
                      {
                        this.state.adding ? 
                        <></> 
                        : 
                        <Button onClick={this.toggleAdd}>Add Task</Button>
                      }
                      {
                        this.state.adding ? 
                        <TaskForm 
                          addTask={this.addTask} 
                          adding={this.state.adding} 
                          toggleAdd={this.toggleAdd}
                        />
                        : 
                        <></>
                      }
                    </Card.Description>
                  </Card.Content>
                  <List celled>
                    {
                      this.state.tasks.map( t => 
                        <Task 
                          key={t.id}
                          {...t} 
                          completeTask={this.completeTask} 
                          deleteTask={this.deleteTask}
                          updateTask={this.updateTask} 
                        />
                      )
                    }
                  </List>
                </>
                : 
                <List.Item>Sign in to create tasks</List.Item>
              }
        </Card.Content>
      </Card>
    )
  }
}


export class ConnectedTasks extends Component {
  render(){
    return(
      <AuthConsumer>
        {
          auth =>
          <Tasks {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedTasks)
