import React from 'react';
import axios from "axios";
import CourseForm from './CourseForm';


class Course extends React.Component {
  state = {}

  render() {
    const { id, name, } = this.props;
    return(
      <div>{name}</div>
    )
  }
}

  export default Course
