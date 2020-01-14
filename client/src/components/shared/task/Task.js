import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { AuthConsumer } from '../../../providers/AuthProvider';
import { List, Button, Icon, Header } from 'semantic-ui-react';
import TaskForm from '../task/TaskForm'

class Task extends Component {

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
    axios.delete(`/api/trips/${user_id}/locations/${id}`)
    .then( res => {
      const { tasks } = this.state
      this.setState({tasks: tasks.filter( t => t.id !== id)})
    })
    .catch( err => {
      console.log(err)
    })
  }

  render(){
    return(
      <List>
        <Header size='large'>Tasks</Header>
          {
            this.props.auth.user ? 
            <>
              <Button onClick={this.toggleAdd}>{this.state.adding ? <>Cancel</> : <>Add Task</> }</Button>
              {this.state.adding ? 
              <TaskForm addTask={this.addTask} adding={this.state.adding} toggleAdd={this.toggleAdd}/>
              : 
              <></>
              }
              {this.state.tasks.map( t => 
                <List.Item>
                  {t.complete ? <Icon name='check'/> : <Icon name='x'/>}
                  <List.Content>
                    <List.Header>
                      {t.name}
                    </List.Header>
                    <List.Description>
                      Assigned to: {t.staff}
                    </List.Description>
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
