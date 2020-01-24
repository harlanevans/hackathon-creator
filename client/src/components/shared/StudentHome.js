import React from "react";
import axios from "axios";
import "../css/custom.css";
import { Input } from "semantic-ui-react";
import {
  Sections,
  StudentHacks,
} from "../styled-components/Shared";

import StudentEvents from "./StudentEvents";

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
      <div
        style={{
          border: "solid 3px black",
          borderRadius: "5px",
          padding: "2em",
          margin: "2em"
        }}
      >
        <h1>Course : {course.name}</h1>
        Event: <StudentEvents key={course.id} name={course.name} id={course.id} />
      </div>
    ));
  };

  render() {
    return (
      <div>
        <div class="image-header home">
          <h1>DPL Hackathon</h1>
          <div class="img-overlay"></div>
        </div>

        {this.renderCourses()}

        <Sections>
          <h3>Submission URL</h3>
          {/* make it's own component */}
          {/* <Input fluid action='Submit' placeholder='https://...' /> */}
        </Sections>
      </div>
    );
  }
}

export default StudentHome;
