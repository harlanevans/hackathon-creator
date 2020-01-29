import React from 'react';
import Groups from '../groups/Groups'
import Submissions from '../submissions/Submissions';
import Rubric from '../Rubric';
import { Sections } from '../../styled-components/Shared';


class EventShow extends React.Component {
  render() {
    const { name, id, course_id, rubric } = this.props.location.state;

    return(
      <div>
       <Sections>
        <h1> {name}</h1>
      </Sections> 
       <Groups course_id={course_id} event_id={id}/>
       <Rubric rubric={rubric}/>
       <Submissions course_id={course_id} event_id={id} />
      </div>
    )
  }
}

export default EventShow;