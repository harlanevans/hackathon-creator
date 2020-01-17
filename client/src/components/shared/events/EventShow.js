import React from 'react';
import Groups from '../groups/Groups'

class EventShow extends React.Component {


  render() {
    const { name, id, course_id } = this.props.location.state;
    return(
      <div>
       <h1> {name}</h1>
       {/* Timer */}
       <Groups course_id={course_id} event_id={id}/>
      </div>
    )
  }
}

export default EventShow;