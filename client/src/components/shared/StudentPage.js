import React from "react";
import { Link } from 'react-router-dom';
import SubmissionForm from './submissions/SubmissionForm';
import Rubric from "./Rubric";
import Countdown from './timers/Countdown';
import { Icon } from 'semantic-ui-react';

class StudentPage extends React.Component {


  render() {
    const { course_id, id, name, rubric, courseName } = this.props.location.state
    return (
      <div>
        <Link to="/">
          <h2>
            <Icon name='arrow left'/>
            Go back
          </h2>
        </Link>
        <h1>{courseName} {name}</h1>
        <Countdown timeTillDate="17:00" timeFormat="hh:mm" />
        <Rubric rubric={rubric}/>
        <SubmissionForm course_id={course_id} event_id={id} />
      </div>
    );
  }
}

export default StudentPage;
