import React from "react";
import { Link } from 'react-router-dom';
import SubmissionForm from './submissions/SubmissionForm';

class StudentPage extends React.Component {


  render() {
    const { course_id, id, name, rubric, courseName } = this.props.location.state
    return (
      <div>
        <Link to="/studenthome">
          <button>Go back</button>
        </Link>
        <h1>{courseName} {name}</h1>
        <SubmissionForm course_id={course_id} event_id={id}/>
      </div>
    );
  }
}

export default StudentPage;
