import React from "react";
import axios from "axios";
import "../css/custom.css";
import StudentEvents from "./StudentEvents";
import { Container } from "semantic-ui-react";
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

        <StudentCourseFlex key={course.id}>
        <div >
        <h2>{course.name}</h2>
        <h3>Events : </h3><StudentEvents key={course.id} name={course.name} id={course.id} />
        </div>
        </StudentCourseFlex>    
        )
    );
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
            <div className="image-header home">
              <h1>DPL Hackathon</h1>
              <div className="img-overlay"></div>
            </div>
        </div>

        <Container>
          <Sections>
            <h1>Courses</h1>
          
          <StudentCourseWrapper>
            
            {this.renderCourses()}
            </StudentCourseWrapper>
          </Sections>
        </Container>
      </div>
    );
  }
}

export default StudentHome;
