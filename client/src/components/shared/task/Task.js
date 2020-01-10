import React, { Component } from 'react';
import axios from 'axios';

class Task extends Component {

  state = { 
    tasks: {},
    editing: false
  }

  componentDidMount() {
    axios.get('/api/tasks')
      .then( res => {
        this.setState({ tasks: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  } 

  
  render(){
    return(
      <div>
        Task Component
      </div>
    )
  }
}

export default Task
