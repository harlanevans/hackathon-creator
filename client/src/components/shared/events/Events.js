import React, { Component } from 'react';
import axios from 'axios';
import { List, Button, Header } from 'semantic-ui-react';


class Events extends Component {
  state = { 
    events: [],
    adding: false
  }
  componentDidMount() {
    axios.get(`/api/courses/${this.props.course.id}/events`)
    .then( res => {
      this.setState({ events: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }
  addStudent = (event) => {
    axios.post(`/api/courses/${this.props.course.id}/events`, event)
    .then( res => {
      this.setState({ events: [...this.state.events, res.data] })
    })
    .catch( err => {
      console.log(err)
    })
  } 

  toggleAdd = () => {this.setState({adding: !this.state.adding})}

  deleteEvent = (course_id, name, rubric) => {
    axios.delete(`/api/courses/${course_id}/events/${id}`)
    .then( res => {
      const { events } = this.state
      this.setState({events: events.filter( s => s.id !== id)})
    })
    .catch( err => {
      console.log(err)
    })
  }

  updateEvent = (course_id, id, name, rubric) => {
    axios.put(`/api/courses/${course_id}/events/${id}`, event)
    .then( res => {
      console.log(res)
      const events = this.state.events.map( e => {
      if (e.id === id)
        return res.data;
      return e;
    });
    this.setState({ events });
    })
    .catch( err => {
      console.log(err)
    })
  }
  render(){
    return(
      <List>
        <Header size='large'>Events</Header>
          {this.state.adding ? <></> : <Button onClick={this.toggleAdd}>Add Event</Button>}
          {this.state.adding ? 
          <EventForm addEvent={this.addEvent} adding={this.state.adding} toggleAdd={this.toggleAdd}/>
          : 
          <></>
          }
          {
            this.state.tasks.map( e => 
              <Event 
                {...e} 
                deleteEvent={this.deleteEvent}
                updateEvent={this.updateEvent} 
              />
            )
          }
      </List>
    )
  }
}
export default Events;