import React from "react";
import EventForm from "./EventForm";
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';

class Event extends React.Component {
  state = { editing: false };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const { id, name, rubric, updateEvent, deleteEvent, course_id} = this.props;
    const event = { id, name, rubric, course_id}
    const { editing } = this.state;
    return (
      <Card style={{textAlign: "center"}}>
        <Card.Content>
            
          { 
            editing ? 
              <EventForm updateEvent={updateEvent} {...event} toggleEdit={this.toggleEdit}/> 
            :
            <>
              <Link
                to={{
                  pathname: `/courses/${course_id}/events/${id}`,
                  state: { ...event }
                }}
              >
              <h1>{name}</h1>
              </Link>
              <h3 className="course-name"><a href={rubric} target="_blank" rel="noopener noreferrer">Requirements</a></h3>
              <Icon
                name='trash'
                onClick={() => deleteEvent(course_id, id)}
                link
              />
              <Icon
                name='pencil'
                onClick={this.toggleEdit}
                color='orange'
                link
              />
            </>
          }
        </Card.Content>
      </Card>
    );
  }
}

export default Event;
