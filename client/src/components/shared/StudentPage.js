import React from "react";
import { Link } from 'react-router-dom';
import SubmissionForm from './submissions/SubmissionForm';
import Rubric from "./Rubric";
import Countdown from './timers/Countdown';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';

class StudentPage extends React.Component {

  state = {
    timers: []
  }

  componentDidMount() {
    axios.get(`/api/timers`)
      .then(res => {
        this.setState({ timers: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  renderCountdowns = () => {
    this.state.timers.map(t =>
      (t.active ? <Countdown timeTillDate={t.end_time} /> : <></>)
    )
    return
  }


  render() {
    const { id, course_id, name, rubric, courseName } = this.props.location.state
    return (
      <div>
        <Link to="/">
          <h2>
            <Icon name='arrow left' />
            Go back
          </h2>
        </Link>
        <h1>{courseName} {name}</h1>
        {
          this.state.timers.map(t =>
            t.active ?
              <Countdown key={t.id} timeTillDate={t.end_time} types={t.types} />
              :
              ""
          )

        }
        <Rubric rubric={rubric} />
        <SubmissionForm course_id={course_id} event_id={id} />
      </div>
    );
  }
}

export default StudentPage;
