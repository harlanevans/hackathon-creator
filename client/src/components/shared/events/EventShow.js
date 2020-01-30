import React from 'react';
import Groups from '../groups/Groups'
import Submissions from '../submissions/Submissions';
import Rubric from '../Rubric';
import { Sections } from '../../styled-components/Shared';
import { Container } from 'semantic-ui-react';


class EventShow extends React.Component {
  render() {
    const { name, id, course_id, rubric } = this.props.location.state;

    return(
      <div className="eventshow-wrapper">
        <Container fluid>
            <div className="image-header admin">
            <h1> {name}</h1>
                <div className="img-overlay"></div>
            </div>
        </Container>
        
        <Sections>
          <Groups course_id={course_id} event_id={id}/>
        </Sections> 

        <Rubric rubric={rubric}/>

        <Sections>
          <Submissions course_id={course_id} event_id={id} />
        </Sections>
      </div>
    )
  }
}

export default EventShow;