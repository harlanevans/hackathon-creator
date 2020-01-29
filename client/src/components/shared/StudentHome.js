import React from "react";
import axios from "axios";
import "../css/custom.css";
import StudentEvents from "./StudentEvents";
import { Segment, Container } from "semantic-ui-react";
import { Sections, StudentCourseWrapper, StudentCourseFlex } from '../styled-components/Shared';


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
      // Need to fix this to work how i want
        <StudentCourseWrapper key={course.id}>

            <StudentCourseFlex>
              <Segment>
              <h2>{course.name}</h2>
                Events: <StudentEvents key={course.id} name={course.name} id={course.id} />
              </Segment>
            </StudentCourseFlex>
            
        </StudentCourseWrapper>
    ));
  };

  render() {
    return (
      <div>
        <Container fluid>
            <div className="image-header home">
              <h1>DPL Hackathon</h1>
              <div className="img-overlay"></div>
            </div>
        </Container>

        <Container>
          <Sections>
            <h1>Courses:</h1>
            {this.renderCourses()}
          </Sections>
        </Container>
      </div>
    );
  }
}

export default StudentHome;
