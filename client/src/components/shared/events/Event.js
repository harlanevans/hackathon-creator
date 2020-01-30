import React from "react";
import EventForm from "./EventForm";
import { Link } from 'react-router-dom';
import { Card, Dropdown } from 'semantic-ui-react';

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
      <Card className="events-section" style={{textAlign: "center"}}>
        <Card.Content>
            
          { 
            editing ? 
              <EventForm updateEvent={updateEvent} {...event} toggleEdit={this.toggleEdit}/> 
            :
            <>
              <Link className="event-name"
                to={{
                  pathname: `/courses/${course_id}/events/${id}`,
                  state: { ...event }
                }}
              >
              <h1>{name}</h1>
              </Link>
              <h3 className="course-name"><a href={rubric} target="_blank" rel="noopener noreferrer">Requirements</a></h3>
              <div className="edit-buttons">
                <Dropdown icon='ellipsis vertical'>
                  <Dropdown.Menu>
                    <Dropdown.Item icon='pencil' text='Edit' onClick={this.toggleEdit}/>
                    <Dropdown.Item icon='trash' text='Delete' onClick={() => deleteEvent(course_id, id)}/>
                  </Dropdown.Menu>
                </Dropdown> 
              </div>  
            </>
          }
        </Card.Content>
      </Card>
    );
  }
}

export default Event;
