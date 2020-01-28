import React from "react";
import { Link } from 'react-router-dom';
import SubmissionForm from './submissions/SubmissionForm';
import Rubric from "./Rubric";
import Countdown from './timers/Countdown';
import { Icon, Container } from 'semantic-ui-react';
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
        <div>
          <Link to="/" className="back-btn">
            <h3>
              <Icon name='arrow left' />
              Go back
            </h3>
          </Link>
        </div>
        {/* Add image background here */}
          <h1>{courseName} <br></br>{name}</h1>

        <Container>
          {
            this.state.timers.map(t =>
              t.active ?
              <Countdown key={t.id} timeTillDate={t.end_time} types={t.types} />
              :
              ""
              )
              
            }
          <Rubric rubric={rubric} />
        </Container>
          <SubmissionForm course_id={course_id} event_id={id} />
      </div>
    );
  }
}

export default StudentPage;
