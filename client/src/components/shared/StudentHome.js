import React from "react";
import axios from "axios";
import "../css/custom.css";
import StudentEvents from "./StudentEvents";
import { Segment } from "semantic-ui-react";

class StudentHome extends React.Component {
  state = { courses: [], events: [] };

  componentDidMount() {
    axios
      .get("/api/courses")
      .then(res => {
        this.setState({ courses: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderCourses = () => {
    return this.state.courses.map(course => (
      <Segment key={course.id}>
        <h1>{course.name}</h1>
        Events: <StudentEvents key={course.id} name={course.name} id={course.id} />
      </Segment>
    ));
  };

  render() {
    return (
      <div>
        <div>
          <div className="image-header home">
            <h1>DPL Hackathon</h1>
            <div className="img-overlay"></div>
          </div>
        </div>
        <h1>Courses:</h1>
        {this.renderCourses()}
      </div>
    );
  }
}

export default StudentHome;
