import React from 'react';
import Groups from '../groups/Groups'

import Submissions from '../submissions/Submissions';


class EventShow extends React.Component {
  render() {
    const { name, id, course_id } = this.props.location.state;

    return(
      <div>
        
       <h1> {name}</h1>

       <Groups course_id={course_id} event_id={id}/>
       <Submissions course_id={course_id} event_id={id} />
      </div>
    )
  }
}

export default EventShow;