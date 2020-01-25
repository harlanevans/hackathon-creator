import React from 'react';
import Groups from '../groups/Groups'
import Submissions from '../submissions/Submissions';
import EventForm from './EventForm';
import Rubric from '../Rubric';

class EventShow extends React.Component {
  render() {
    const { name, id, course_id, rubric } = this.props.location.state;

    return(
      <div>
        
       <h1> {name}</h1>
       <Groups course_id={course_id} event_id={id}/>
       <Submissions course_id={course_id} event_id={id} />
       <Rubric></Rubric>
      </div>
    )
  }
}
//"https://drive.google.com/file/d/1h8vrAUdPcQ0Op50aGhQU5Htbueaot4XG/preview"
//"https://drive.google.com/file/d/1h8vrAUdPcQ0Op50aGhQU5Htbueaot4XG/view"
export default EventShow;