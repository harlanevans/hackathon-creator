import React, { Component } from "react";
import axios from "axios";
import { Segment, Button, Header, Card, Divider } from "semantic-ui-react";
import Event from "./Event";
import EventForm from "./EventForm";

class Events extends Component {
  state = {
    events: [],
    adding: false
  };

  componentDidMount() {
    axios
      .get(`/api/courses/${this.props.course_id}/events`)
      .then(res => {
        this.setState({ events: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addEvent = event => {
    axios
      .post(`/api/courses/${this.props.course_id}/events`, event)
      .then(res => {
        this.setState({ events: [...this.state.events, res.data] });
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggleAdd = () => {
    this.setState({ adding: !this.state.adding });
  };

  deleteEvent = (course_id, id,) => {
    axios.delete(`/api/courses/${course_id}/events/${id}`)
    .then( res => {
      const { events } = this.state
      this.setState({events: events.filter( e => e.id !== id)})
    })
    .catch( err => {
      console.log(err)
    })
  };

  updateEvent = (course_id, id, event) => {
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
  };
  
  render() {
    const { events } = this.state;
    return (
      <Segment>
        <Header size="large">Events</Header>
        {
          this.state.adding ?
            <></>
          :
            <Button onClick={this.toggleAdd}>Add Event</Button>
        }
        {
          this.state.adding ? 
            <EventForm
              addEvent={this.addEvent}
              adding={this.state.adding}
              toggleAdd={this.toggleAdd}
            />
          :
            <></>
        }
        <Divider />
        {
          events ?
            <Card.Group itemsPerRow='2'>
              {events.map(event => (
                <Event
                key={event.id}
                  {...event}
                  deleteEvent={this.deleteEvent}
                  updateEvent={this.updateEvent}
                />
              ))}
            </Card.Group>
          : 
          <div>No Events, please add some.</div>
        }
      </Segment>
    );
  }
}
export default Events;
