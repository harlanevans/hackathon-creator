import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import CourseForm from "./CourseForm";

class Course extends React.Component {
  state = {};

  render() {
    const { id, name } = this.props;
    return (
      <div
        style={{
          padding: "1em 0em",
          border: "solid 1px grey",
          borderRadius: "3px",
          margin: "2em 0em"
        }}
      >
        <Link 
          to={{
            pathname:`/course/${id}`,
            state: {id, name}
        }} >
          
          <h1>Course Name: {name}</h1>
        </Link>
        <button onClick={() => this.props.deleteCourse(id)}>Delete </button>
      </div>
    );
  }
}

export default Course;
