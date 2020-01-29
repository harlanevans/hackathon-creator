import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { PrimaryBtn } from '../styled-components/Shared';

class StudentEvents extends React.Component {
  state = { course: {}, events: [] };

  componentDidMount() {
    const { id } = this.props;
    axios.get(`/api/courses/${id}`).then(res => {
      this.setState({ course: res.data });
      console.log(this.state.course);
    });
    axios.get(`/api/courses/${id}/events`).then(res => {
      this.setState({ events: res.data });
    });
  }

  renderEvents = () => {
    return this.state.events.map(event => (
      <PrimaryBtn className="student-events" key={event.id}>
        <Link 
          to={{
            pathname: `/event/${event.id}`,
            state: { ...event, courseName: this.state.course.name }
          }}
        >
          <p>{event.name}</p>
        </Link>
      </PrimaryBtn>
    ));
  };

  render() {
    return (
      <div>
        {/* {this.state.course} */}
        {this.renderEvents()}
      </div>
    );
  }
}

export default StudentEvents;
