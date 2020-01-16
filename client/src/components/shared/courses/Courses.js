import React, { Component } from "react";
import axios from "axios";
import CourseForm from "./CourseForm";
import Course from './Course';
import { Button } from "semantic-ui-react";
import Students from '../students/Students';

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
    axios.put(`/api/courses${id}`, course).then(res => {
      const courses = this.state.course.map(c => {
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
      <Course key={course.id} {...course} deleteCourse={this.deleteCourse} updateCourse={this.updateCourse} />
    ));
  }

  render() {
    const { adding } = this.state;
    return (
      <div className="course-page">
        <h1 className="course-header">Courses</h1>
        <h4>Click the button below to add a new course!</h4>
        <div className="add-course">
          {adding ? (
            <div className="adding-course">
              <CourseForm
                addCourse={this.addCourse}
                toggleAdd={this.toggleAdd}
              />
            </div>
          ) : (
            <Button
              className="add-course-button"
              color="teal"
              onClick={this.toggleAdd}
            >
              New Course
            </Button>
          )}
        </div>
        <div style={{paddingTop: '2em', width: "50%"}}>{this.renderCourses()}</div>
      </div>
    );
  }
}
export default Courses;
