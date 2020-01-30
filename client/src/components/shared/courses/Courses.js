import React, { Component } from "react";
import axios from "axios";
import CourseForm from "./CourseForm";
import Course from "./Course";
import { PrimaryBtn, Sections, AlignCenter } from '../../styled-components/Shared';

class Courses extends Component {
  state = {
    courses: [],
    adding: false
  };

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

  toggleAdd = () => this.setState({ adding: !this.state.adding });

  addCourse = course => {
    axios
      .post("/api/courses", { course })
      .then(res => {
        const { courses } = this.state;
        this.setState({ courses: [...courses, res.data] });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateCourse = (id, course) => {
    axios.put(`/api/courses/${id}`, course).then(res => {
      const courses = this.state.courses.map(c => {
        if (c.id === id) {
          return res.data;
        }
        return c;
      });
      this.setState({ courses });
    });
  };

  deleteCourse = id => {
    axios
      .delete(`/api/courses/${id}`)
      .then(res => {
        const { courses } = this.state;
        this.setState({ courses: courses.filter(t => t.id !== id) });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderCourses() {
    return this.state.courses.map(course => (
      <Course
        key={course.id}
        {...course}
        deleteCourse={this.deleteCourse}
        updateCourse={this.updateCourse}
        
      />
    ));
  }

  render() {
    const { adding } = this.state;
    return (
        <Sections>
          
            <h1 style={{textAlign: "center"}}>Courses</h1>
              {
                adding ?
                <CourseForm
                addCourse={this.addCourse}
                toggleAdd={this.toggleAdd}
                />
                :
                <AlignCenter><PrimaryBtn onClick={this.toggleAdd}>New Course</PrimaryBtn></AlignCenter>
              }
              
              <div className="admincourse-items">
                {this.renderCourses()}
              </div>
          
        </Sections>
    );
  }
}
export default Courses;
