import React from "react";
import EventForm from "./EventForm";

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
      <div
        style={{
          border: "solid 1px grey",
          borderRadius: "3px",
          padding: "2em 2em",
          margin: "2em 0em"
        }}
      >
        <h1>Name: {name}</h1>
        <h3>Rubric: {rubric}</h3>
        <button onClick={this.toggleEdit}>{editing ? "Cancel" : "Edit"}</button>
        <button onClick={() => deleteEvent(course_id, id)}>Delete</button>
        { editing ? 

          <EventForm updateEvent={updateEvent} {...event} toggleEdit={this.toggleEdit}/> 
          :
          <></>
        }
      </div>
    );
  }
}

export default Event;
